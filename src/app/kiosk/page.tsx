"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BookingFlow } from "@/components/BookingFlow";
import styles from "./kiosk.module.css";

export default function KioskPage() {
  useEffect(() => {
    document.documentElement.classList.add("kiosk-mode");
    return () => document.documentElement.classList.remove("kiosk-mode");
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <div>
          <p className="demo-pill">Kiosk / large touchscreen demo</p>
          <h1>Check in & book</h1>
          <p>
            Large targets, high contrast, no hover-only actions, and a generously sized signature
            field — designed for clinic kiosks as well as phones.
          </p>
        </div>
        <Link href="/book" className="btn btn-on-dark-ghost btn-kiosk">
          Exit kiosk layout
        </Link>
      </header>
      <div className={styles.body}>
        <BookingFlow kiosk />
      </div>
    </div>
  );
}
