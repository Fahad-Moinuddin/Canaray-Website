"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/content";
import styles from "./Flow.module.css";

const STEPS = ["Location", "Time", "Details", "Consent", "Confirm"] as const;
const STORAGE_KEY = "canaray-poc-booking";

type BookingState = {
  locationId: string;
  date: string;
  time: string;
  serviceId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referringDentist: string;
  consent: boolean;
  signature: string;
};

const empty: BookingState = {
  locationId: "",
  date: "",
  time: "",
  serviceId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  referringDentist: "",
  consent: false,
  signature: "",
};

const TIMES = ["8:30 AM", "9:30 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

export function BookingFlow({ kiosk = false }: { kiosk?: boolean }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingState>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      const params = new URLSearchParams(window.location.search);
      const locationFromQuery = params.get("location") ?? "";
      if (raw) {
        const parsed = JSON.parse(raw) as { step: number; data: BookingState };
        setStep(parsed.step ?? 0);
        setData({
          ...empty,
          ...parsed.data,
          locationId: parsed.data.locationId || locationFromQuery,
        });
      } else if (locationFromQuery) {
        setData((d) => ({ ...d, locationId: locationFromQuery }));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || submitted) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }));
  }, [step, data, hydrated, submitted]);

  const location = useMemo(
    () => LOCATIONS.find((l) => l.id === data.locationId),
    [data.locationId],
  );
  const service = useMemo(
    () => SERVICES.find((s) => s.id === data.serviceId),
    [data.serviceId],
  );

  function update<K extends keyof BookingState>(key: K, value: BookingState[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (step === 0 && !data.locationId) next.locationId = "Select a location to continue.";
    if (step === 1) {
      if (!data.serviceId) next.serviceId = "Choose the imaging service on your referral.";
      if (!data.date) next.date = "Choose a date.";
      if (!data.time) next.time = "Choose a time.";
    }
    if (step === 2) {
      if (!data.firstName.trim()) next.firstName = "Enter your first name.";
      if (!data.lastName.trim()) next.lastName = "Enter your last name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Enter a valid email.";
      if (data.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a 10-digit phone number.";
    }
    if (step === 3) {
      if (!data.consent) next.consent = "Consent is required to continue.";
      if (data.signature.trim().length < 2) next.signature = "Type your full name as your signature.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (!validate()) return;
    if (step === STEPS.length - 2) {
      setSubmitted(true);
      sessionStorage.removeItem(STORAGE_KEY);
      setStep(STEPS.length - 1);
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  if (submitted && step === STEPS.length - 1) {
    return (
      <div className={`${styles.shell} ${kiosk ? styles.kiosk : ""} panel panel-pad`}>
        <p className="demo-pill">Demo confirmation</p>
        <h2>You&apos;re all set — in this demonstration</h2>
        <p>
          No appointment was sent to Canaray systems. In production, patients would receive email
          confirmation and reminder details here.
        </p>
        <dl className={styles.summary}>
          <div>
            <dt>Location</dt>
            <dd>
              {location?.name}
              <br />
              {location?.address}
            </dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>
              {data.date} · {data.time}
            </dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{service?.name}</dd>
          </div>
          <div>
            <dt>Patient</dt>
            <dd>
              {data.firstName} {data.lastName}
            </dd>
          </div>
        </dl>
        <div className="btn-row">
          <button
            type="button"
            className={`btn btn-primary ${kiosk ? "btn-kiosk" : ""}`}
            onClick={() => {
              setSubmitted(false);
              setData(empty);
              setStep(0);
            }}
          >
            Start another demo booking
          </button>
          <Link href="/patients" className={`btn btn-ghost ${kiosk ? "btn-kiosk" : ""}`}>
            Back to patient guide
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} ${kiosk ? styles.kiosk : ""} panel panel-pad`}>
      <div className="progress" aria-label="Booking progress">
        <div className="progress-track">
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={`progress-step ${i < step ? "is-done" : ""} ${i === step ? "is-current" : ""}`}
            />
          ))}
        </div>
        <div className="progress-labels">
          {STEPS.map((label, i) => (
            <span key={label} className={i === step ? "is-current" : ""}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {step === 0 && (
        <fieldset className={styles.fieldset}>
          <legend>Choose a location</legend>
          <p className="muted">Your progress is saved in this browser tab while you book.</p>
          <div className={styles.choiceGrid}>
            {LOCATIONS.map((loc) => (
              <label key={loc.id} className={`${styles.choice} ${data.locationId === loc.id ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="location"
                  value={loc.id}
                  checked={data.locationId === loc.id}
                  onChange={() => update("locationId", loc.id)}
                />
                <strong>{loc.name}</strong>
                <span>
                  {loc.address}
                  <br />
                  {loc.city}
                </span>
                {loc.note ? <em>{loc.note}</em> : null}
              </label>
            ))}
          </div>
          {errors.locationId ? <p className="field error">{errors.locationId}</p> : null}
        </fieldset>
      )}

      {step === 1 && (
        <div>
          <h2>Pick a service and time</h2>
          <div className="field">
            <label htmlFor="service">Imaging service</label>
            <select
              id="service"
              className="select"
              value={data.serviceId}
              aria-invalid={!!errors.serviceId}
              onChange={(e) => update("serviceId", e.target.value)}
            >
              <option value="">Select service</option>
              {SERVICES.filter((s) => s.audience.includes("patient")).map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.serviceId ? <p className="error">{errors.serviceId}</p> : null}
          </div>
          <div className={styles.inlineFields}>
            <div className="field">
              <label htmlFor="date">Preferred date</label>
              <input
                id="date"
                className="input"
                type="date"
                value={data.date}
                aria-invalid={!!errors.date}
                onChange={(e) => update("date", e.target.value)}
              />
              {errors.date ? <p className="error">{errors.date}</p> : null}
            </div>
          </div>
          <fieldset className={styles.fieldset}>
            <legend>Available times</legend>
            <div className={styles.timeGrid}>
              {TIMES.map((t) => (
                <label key={t} className={`${styles.time} ${data.time === t ? styles.selected : ""}`}>
                  <input
                    type="radio"
                    name="time"
                    value={t}
                    checked={data.time === t}
                    onChange={() => update("time", t)}
                  />
                  {t}
                </label>
              ))}
            </div>
            {errors.time ? <p className="field error">{errors.time}</p> : null}
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Patient details</h2>
          <div className={styles.inlineFields}>
            <div className="field">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                className="input"
                value={data.firstName}
                aria-invalid={!!errors.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
              {errors.firstName ? <p className="error">{errors.firstName}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                className="input"
                value={data.lastName}
                aria-invalid={!!errors.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />
              {errors.lastName ? <p className="error">{errors.lastName}</p> : null}
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              autoComplete="email"
              value={data.email}
              aria-invalid={!!errors.email}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email ? <p className="error">{errors.email}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              className="input"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              aria-invalid={!!errors.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            {errors.phone ? <p className="error">{errors.phone}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="dentist">Referring dentist (optional)</label>
            <input
              id="dentist"
              className="input"
              value={data.referringDentist}
              onChange={(e) => update("referringDentist", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Consent</h2>
          <p>
            Please review this demonstration consent statement. In production, Canaray would present
            the full clinical consent language required for imaging.
          </p>
          <div className={styles.consentBox}>
            I understand this visit involves dental imaging ordered by my dental professional. I
            consent to Canaray collecting the information needed to provide imaging and reporting
            services, and to sharing results with my referring clinician as part of my circle of care.
          </div>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => update("consent", e.target.checked)}
            />
            <span>I agree to the consent statement above.</span>
          </label>
          {errors.consent ? <p className="error">{errors.consent}</p> : null}
          <div className="field">
            <label htmlFor="signature">Signature</label>
            <p className="hint">Large signature field sized for touchscreen and kiosk use.</p>
            <input
              id="signature"
              className={`input ${styles.signature}`}
              placeholder="Type your full legal name"
              value={data.signature}
              aria-invalid={!!errors.signature}
              onChange={(e) => update("signature", e.target.value)}
            />
            {errors.signature ? <p className="error">{errors.signature}</p> : null}
          </div>
        </div>
      )}

      <div className={styles.navRow}>
        <button
          type="button"
          className={`btn btn-ghost ${kiosk ? "btn-kiosk" : ""}`}
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Back
        </button>
        <button
          type="button"
          className={`btn btn-primary ${kiosk ? "btn-kiosk" : ""}`}
          onClick={nextStep}
        >
          {step === STEPS.length - 2 ? "Submit demo booking" : "Continue"}
        </button>
      </div>
    </div>
  );
}
