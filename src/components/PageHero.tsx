import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  tone?: "light" | "dark";
};

export function PageHero({ eyebrow, title, description, actions, tone = "light" }: Props) {
  return (
    <section className={`${styles.hero} ${tone === "dark" ? styles.dark : ""}`}>
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className={`lead ${styles.desc}`}>{description}</p>
        {actions ? <div className="btn-row">{actions}</div> : null}
      </div>
    </section>
  );
}
