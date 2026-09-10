"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/content";
import styles from "./Flow.module.css";

const STEPS = ["Patient", "Service", "Details", "Pricing", "Review"] as const;

type ReferralState = {
  patientName: string;
  patientDob: string;
  patientEmail: string;
  serviceId: string;
  urgency: "standard" | "priority";
  clinicalNotes: string;
  orderType: "imaging" | "upload";
};

const empty: ReferralState = {
  patientName: "",
  patientDob: "",
  patientEmail: "",
  serviceId: "",
  urgency: "standard",
  clinicalNotes: "",
  orderType: "imaging",
};

/** Conceptual demo pricing only — not real Canaray fees */
function estimateFee(serviceId: string, urgency: string, orderType: string) {
  const base = orderType === "upload" ? 120 : 180;
  const serviceBoost = serviceId === "implant" || serviceId === "orthognathic" ? 40 : 20;
  const rush = urgency === "priority" ? 35 : 0;
  return base + serviceBoost + rush;
}

export function ReferralFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ReferralState>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [uploadName, setUploadName] = useState("");

  const service = useMemo(
    () => SERVICES.find((s) => s.id === data.serviceId),
    [data.serviceId],
  );
  const fee = estimateFee(data.serviceId || "endo", data.urgency, data.orderType);

  function update<K extends keyof ReferralState>(key: K, value: ReferralState[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validate() {
    const next: Record<string, string> = {};
    if (step === 0) {
      if (!data.patientName.trim()) next.patientName = "Enter the patient name.";
      if (!data.patientDob) next.patientDob = "Enter date of birth.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.patientEmail)) {
        next.patientEmail = "Enter a valid patient email.";
      }
    }
    if (step === 1 && !data.serviceId) next.serviceId = "Select a service.";
    if (step === 2 && data.orderType === "upload" && !uploadName) {
      next.upload = "Attach a demo file (or choose imaging referral instead).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (!validate()) return;
    if (step === STEPS.length - 1) {
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  }

  if (submitted) {
    return (
      <div className={`${styles.shell} panel panel-pad`}>
        <p className="demo-pill">Demo referral submitted</p>
        <h2>Referral recorded in this demonstration</h2>
        <p>
          No live referral, email, or payment was created. Pricing shown below is conceptual only
          and does not represent Canaray&apos;s actual fees.
        </p>
        <dl className={styles.summary}>
          <div>
            <dt>Patient</dt>
            <dd>{data.patientName}</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{service?.name}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{data.orderType === "upload" ? "Upload & order report" : "Refer for imaging"}</dd>
          </div>
          <div>
            <dt>Demo estimate</dt>
            <dd>${fee} CAD</dd>
          </div>
        </dl>
        <div className="btn-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSubmitted(false);
              setData(empty);
              setUploadName("");
              setStep(0);
            }}
          >
            Create another demo referral
          </button>
          <Link href="/dentists" className="btn btn-ghost">
            Back to dentist hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} panel panel-pad`}>
      <div className="progress" aria-label="Referral progress">
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
        <div>
          <h2>Choose a patient</h2>
          <div className="field">
            <label htmlFor="patientName">Patient full name</label>
            <input
              id="patientName"
              className="input"
              value={data.patientName}
              aria-invalid={!!errors.patientName}
              onChange={(e) => update("patientName", e.target.value)}
            />
            {errors.patientName ? <p className="error">{errors.patientName}</p> : null}
          </div>
          <div className={styles.inlineFields}>
            <div className="field">
              <label htmlFor="dob">Date of birth</label>
              <input
                id="dob"
                className="input"
                type="date"
                value={data.patientDob}
                aria-invalid={!!errors.patientDob}
                onChange={(e) => update("patientDob", e.target.value)}
              />
              {errors.patientDob ? <p className="error">{errors.patientDob}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="pemail">Patient email</label>
              <input
                id="pemail"
                className="input"
                type="email"
                value={data.patientEmail}
                aria-invalid={!!errors.patientEmail}
                onChange={(e) => update("patientEmail", e.target.value)}
              />
              {errors.patientEmail ? <p className="error">{errors.patientEmail}</p> : null}
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>Select a service</h2>
          <div className={styles.choiceGrid}>
            {SERVICES.filter((s) => s.audience.includes("dentist")).map((s) => (
              <label
                key={s.id}
                className={`${styles.choice} ${data.serviceId === s.id ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="service"
                  checked={data.serviceId === s.id}
                  onChange={() => update("serviceId", s.id)}
                />
                <strong>{s.name}</strong>
                <span>{s.summary}</span>
              </label>
            ))}
          </div>
          {errors.serviceId ? <p className="error">{errors.serviceId}</p> : null}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Referral details</h2>
          <fieldset className={styles.fieldset}>
            <legend>Order type</legend>
            <div className={styles.timeGrid}>
              <label className={`${styles.time} ${data.orderType === "imaging" ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="orderType"
                  checked={data.orderType === "imaging"}
                  onChange={() => update("orderType", "imaging")}
                />
                Refer for imaging at Canaray
              </label>
              <label className={`${styles.time} ${data.orderType === "upload" ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="orderType"
                  checked={data.orderType === "upload"}
                  onChange={() => update("orderType", "upload")}
                />
                Upload X-rays & order a report
              </label>
            </div>
          </fieldset>

          {data.orderType === "upload" ? (
            <div className="field">
              <label htmlFor="upload">Demo upload</label>
              <input
                id="upload"
                className="input"
                type="file"
                accept=".zip,.dcm,.jpg,.jpeg,.png,.pdf"
                onChange={(e) => setUploadName(e.target.files?.[0]?.name ?? "")}
              />
              <p className="hint">
                Files stay in your browser only. Nothing is uploaded to Canaray in this POC.
              </p>
              {uploadName ? <p className="muted">Selected: {uploadName}</p> : null}
              {errors.upload ? <p className="error">{errors.upload}</p> : null}
            </div>
          ) : null}

          <div className="field">
            <label htmlFor="notes">Clinical notes</label>
            <textarea
              id="notes"
              className="textarea"
              value={data.clinicalNotes}
              onChange={(e) => update("clinicalNotes", e.target.value)}
              placeholder="Reason for referral, relevant history, special instructions…"
            />
          </div>

          <fieldset className={styles.fieldset}>
            <legend>Turnaround</legend>
            <div className={styles.timeGrid}>
              <label className={`${styles.time} ${data.urgency === "standard" ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="urgency"
                  checked={data.urgency === "standard"}
                  onChange={() => update("urgency", "standard")}
                />
                Standard
              </label>
              <label className={`${styles.time} ${data.urgency === "priority" ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="urgency"
                  checked={data.urgency === "priority"}
                  onChange={() => update("urgency", "priority")}
                />
                Priority (demo)
              </label>
            </div>
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Dynamic pricing preview</h2>
          <p className="demo-pill">Conceptual estimate only</p>
          <div className={styles.pricePanel}>
            <div>
              <span>Service</span>
              <strong>{service?.name ?? "—"}</strong>
            </div>
            <div>
              <span>Order type</span>
              <strong>{data.orderType === "upload" ? "External report order" : "Imaging referral"}</strong>
            </div>
            <div>
              <span>Urgency</span>
              <strong>{data.urgency === "priority" ? "Priority" : "Standard"}</strong>
            </div>
            <div className={styles.priceTotal}>
              <span>Demo total</span>
              <strong>${fee} CAD</strong>
            </div>
          </div>
          <p className="muted">
            Production Canaray pricing is calculated inside the live referral system. This number is
            generated locally for demonstration and is not billable.
          </p>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Review referral</h2>
          <dl className={styles.summary}>
            <div>
              <dt>Patient</dt>
              <dd>
                {data.patientName}
                <br />
                {data.patientEmail}
              </dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>{service?.name}</dd>
            </div>
            <div>
              <dt>Notes</dt>
              <dd>{data.clinicalNotes || "None provided"}</dd>
            </div>
            <div>
              <dt>Demo estimate</dt>
              <dd>${fee} CAD</dd>
            </div>
          </dl>
        </div>
      )}

      <div className={styles.navRow}>
        <button
          type="button"
          className="btn btn-ghost"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={nextStep}>
          {step === STEPS.length - 1 ? "Submit demo referral" : "Continue"}
        </button>
      </div>
    </div>
  );
}
