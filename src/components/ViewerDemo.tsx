"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ViewerDemo.module.css";

const FINDINGS = [
  {
    id: "f1",
    label: "Impacted third molar",
    detail: "Horizontally impacted relative to the inferior alveolar canal.",
  },
  {
    id: "f2",
    label: "Canal proximity",
    detail: "Close spatial relationship highlighted with a 3D reference marker.",
  },
  {
    id: "f3",
    label: "Bone morphology",
    detail: "Cortical outline and trabecular pattern available for review in context.",
  },
];

export function ViewerDemo() {
  const [rotation, setRotation] = useState(18);
  const [zoom, setZoom] = useState(1);
  const [active, setActive] = useState(FINDINGS[0].id);
  const [playing, setPlaying] = useState(true);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!playing || reduce) return;

    const tick = () => {
      setRotation((r) => (r + 0.25) % 360);
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [playing]);

  return (
    <div className={styles.shell}>
      <div className={styles.toolbar}>
        <span className="demo-pill">Simulated viewer</span>
        <div className={styles.tools}>
          <button type="button" className={styles.tool} onClick={() => setPlaying((p) => !p)}>
            {playing ? "Pause" : "Orbit"}
          </button>
          <button
            type="button"
            className={styles.tool}
            onClick={() => setZoom((z) => Math.min(1.45, +(z + 0.1).toFixed(2)))}
          >
            Zoom in
          </button>
          <button
            type="button"
            className={styles.tool}
            onClick={() => setZoom((z) => Math.max(0.8, +(z - 0.1).toFixed(2)))}
          >
            Zoom out
          </button>
          <button
            type="button"
            className={styles.tool}
            onClick={() => {
              setRotation(18);
              setZoom(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className={styles.stageWrap}>
        <div className={styles.stage} aria-hidden="true">
          <div
            className={styles.volume}
            style={{ transform: `scale(${zoom}) rotateY(${rotation}deg) rotateX(12deg)` }}
          >
            <div className={styles.slice} />
            <div className={styles.slice} />
            <div className={styles.slice} />
            <div className={`${styles.marker} ${active === "f1" ? styles.on : ""}`} style={{ top: "42%", left: "58%" }} />
            <div className={`${styles.marker} ${active === "f2" ? styles.on : ""}`} style={{ top: "58%", left: "46%" }} />
            <div className={`${styles.marker} ${active === "f3" ? styles.on : ""}`} style={{ top: "36%", left: "38%" }} />
            <div className={styles.scanline} />
          </div>
          <div className={styles.hud}>
            <span>Case demo · CBCT volume</span>
            <span>
              Y {Math.round(rotation)}° · {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>

        <aside className={styles.report} aria-label="Sample report findings">
          <h3>Report findings</h3>
          <p className={styles.note}>
            Every finding can be tied to a scrollable 3D location in the scan — not just a PDF page.
          </p>
          <ul>
            {FINDINGS.map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  className={`${styles.finding} ${active === f.id ? styles.active : ""}`}
                  onClick={() => {
                    setActive(f.id);
                    setPlaying(false);
                  }}
                >
                  <strong>{f.label}</strong>
                  <span>{f.detail}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
