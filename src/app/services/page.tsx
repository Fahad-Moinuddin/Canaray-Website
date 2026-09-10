import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/content";
import styles from "./services.module.css";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const cbct = SERVICES.filter((s) => s.category === "cbct");
  const other = SERVICES.filter((s) => s.category === "other");

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Imaging organized by clinical need"
        description="Explore CBCT applications and complementary imaging services. Each listing explains what it is, who it’s for, and why it may be recommended."
        actions={
          <>
            <Link href="/book" className="btn btn-primary">
              Book imaging
            </Link>
            <Link href="/refer" className="btn btn-ghost">
              Refer a patient
            </Link>
          </>
        }
      />

      <section className="section-tight">
        <div className="container">
          <h2>CBCT</h2>
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Cone-beam CT for three-dimensional evaluation across common dental and surgical
            indications.
          </p>
          <div className={styles.list}>
            {cbct.map((service) => (
              <article key={service.id} id={service.id} className={styles.item}>
                <h3>{service.name}</h3>
                <dl>
                  <div>
                    <dt>What is it?</dt>
                    <dd>{service.summary}</dd>
                  </div>
                  <div>
                    <dt>Who is it for?</dt>
                    <dd>{service.forWhom}</dd>
                  </div>
                  <div>
                    <dt>Why might you need it?</dt>
                    <dd>{service.why}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Other imaging & records</h2>
          <div className={styles.list}>
            {other.map((service) => (
              <article key={service.id} id={service.id} className={styles.item}>
                <h3>{service.name}</h3>
                <dl>
                  <div>
                    <dt>What is it?</dt>
                    <dd>{service.summary}</dd>
                  </div>
                  <div>
                    <dt>Who is it for?</dt>
                    <dd>{service.forWhom}</dd>
                  </div>
                  <div>
                    <dt>Why might you need it?</dt>
                    <dd>{service.why}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
