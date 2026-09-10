import Link from "next/link";
import styles from "./Header.module.css";
import { ASSETS, NAV, SITE } from "@/lib/content";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSETS.logo} alt="" width={32} height={32} className={styles.mark} />
          <span className={styles.wordmark}>Canaray</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Login
          </Link>
          <Link href="/refer" className={styles.secondaryAction}>
            Refer
          </Link>
          <Link href="/book" className="btn btn-primary btn-sm">
            Book appointment
          </Link>
        </div>

        <details className={styles.mobile}>
          <summary className={styles.menuBtn} aria-label="Open menu">
            Menu
          </summary>
          <div className={styles.drawer}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <hr />
            <Link href="/login">Professional login</Link>
            <Link href="/refer" className="btn btn-ghost">
              Refer a patient
            </Link>
            <Link href="/book" className="btn btn-primary">
              Book appointment
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
