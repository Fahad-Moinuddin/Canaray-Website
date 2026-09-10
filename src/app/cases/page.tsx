"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EXAMPLE_CASES } from "@/lib/content";
import styles from "./cases.module.css";

export default function CasesPage() {
  const [active, setActive] = useState(EXAMPLE_CASES[0]);

  return (
    <>
      <PageHero
        eyebrow="Example cases"
        title="Explore how findings can be presented"
        description="Sample case demonstrations from Canaray’s public media library. Select a case to preview the corresponding demo video. These are illustrative — not live patient records in this POC."
        actions={
          <Link href="/technology" className="btn btn-ghost">
            About 3D reporting
          </Link>
        }
      />

      <section className="section-tight">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.list} role="tablist" aria-label="Example cases">
              {EXAMPLE_CASES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active.id === c.id}
                  className={`${styles.tab} ${active.id === c.id ? styles.on : ""}`}
                  onClick={() => setActive(c)}
                >
                  <span className="demo-pill">{c.focus}</span>
                  <strong>{c.title}</strong>
                  <span>{c.summary}</span>
                </button>
              ))}
            </div>

            <div className={styles.viewer} role="tabpanel">
              <div className={styles.meta}>
                <h2>{active.title}</h2>
                <p>{active.summary}</p>
                <p className="demo-pill">Demo media · preload disabled</p>
              </div>
              <video
                key={active.id}
                className={styles.video}
                controls
                preload="none"
                playsInline
              >
                <source src={active.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
