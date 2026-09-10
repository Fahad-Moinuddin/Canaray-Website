"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password of at least 6 characters.");
      setDone(false);
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`panel panel-pad ${styles.card}`}>
        <p className="demo-pill">Professional access · demo only</p>
        <h1>Sign in</h1>
        <p className="muted">
          This screen demonstrates the intended login UX. Credentials are not authenticated against
          Canaray systems.
        </p>

        {done ? (
          <div className={styles.success} role="status">
            <h2>Demo sign-in complete</h2>
            <p>No live session was created. Explore professional demos from here:</p>
            <div className="btn-row">
              <Link href="/refer" className="btn btn-primary">
                Referral demo
              </Link>
              <Link href="/order-report" className="btn btn-ghost">
                Order report demo
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                className="input"
                type="email"
                autoComplete="username"
                value={email}
                aria-invalid={!!error}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="input"
                type="password"
                autoComplete="current-password"
                value={password}
                aria-invalid={!!error}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error ? (
              <p className="error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Continue
            </button>
          </form>
        )}

        <div className={styles.links}>
          <Link href="/login/forgot">Forgot password</Link>
          <Link href="/dentists">Back to dentist hub</Link>
        </div>
      </div>
    </section>
  );
}
