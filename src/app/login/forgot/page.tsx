"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "../login.module.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter the work email associated with your office account.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`panel panel-pad ${styles.card}`}>
        <p className="demo-pill">Password recovery · demo UX</p>
        <h1>Reset your password</h1>
        <p className="muted">
          Designed for dental offices: clear confirmation, no silent failure, and an obvious path
          back to login. No reset email is actually sent in this POC.
        </p>

        {sent ? (
          <div className={styles.success} role="status">
            <h2>Check your inbox (demo)</h2>
            <p>
              If <strong>{email}</strong> were a registered office account, a reset link would arrive
              shortly. In production, this page should always explain next steps clearly — even when
              an address is unrecognized — without exposing account existence details insecurely.
            </p>
            <Link href="/login" className="btn btn-primary">
              Return to login
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Office email</label>
              <input
                id="email"
                className="input"
                type="email"
                value={email}
                aria-invalid={!!error}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="hint">Use the email your practice registered with Canaray.</p>
              {error ? (
                <p className="error" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Send reset link
            </button>
          </form>
        )}

        <div className={styles.links}>
          <Link href="/login">Back to login</Link>
          <a href="mailto:info@canaray.com">Contact support</a>
        </div>
      </div>
    </section>
  );
}
