import Link from "next/link";
import { ViewerDemo } from "@/components/ViewerDemo";
import { ASSETS, PROOF, SERVICES } from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage() {
  const servicePreview = SERVICES.filter((s) => s.category === "cbct").slice(0, 6);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <video
            className={styles.heroVideo}
            src={ASSETS.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={ASSETS.icons.laptop}
          />
          <div className={styles.heroScrim} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroCopy} reveal`}>
            <p className={styles.brand}>Canaray</p>
            <h1 className={styles.headline}>Clarity in every dimension.</h1>
            <p className={styles.heroLead}>
              Specialist dental imaging and interactive 3D reports — designed to make complex anatomy
              understandable for patients and decisive for dentists.
            </p>
            <div className={`btn-row ${styles.heroActions}`}>
              <Link href="/book" className="btn btn-primary btn-lg">
                Book an appointment
              </Link>
              <Link href="/refer" className="btn btn-on-dark-ghost btn-lg">
                Start a referral
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.paths}`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <p className="eyebrow">Who you are</p>
            <h2>Two clear paths into Canaray</h2>
            <p className="lead">
              Patients get reassurance and a simple booking journey. Dental professionals get a faster
              path to referrals and true 3D reporting.
            </p>
          </div>
          <div className={`${styles.pathList} reveal`} style={{ animationDelay: "80ms" }}>
            <Link href="/patients" className={styles.pathLink}>
              <span className={styles.pathLabel}>Patients</span>
              <strong>Understand your visit</strong>
              <span className={styles.pathArrow} aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/dentists" className={styles.pathLink}>
              <span className={styles.pathLabel}>Dental professionals</span>
              <strong>Refer with confidence</strong>
              <span className={styles.pathArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.tech}`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <p className="eyebrow">Technology</p>
            <h2>True 3D reports — not PDFs pretending to be 3D</h2>
            <p className="lead">
              Canaray cases load in interactive 3D by default. Findings stay linked to the scan, so
              clinicians and patients can see exactly what the radiologist is describing.
            </p>
          </div>
          <div className="reveal" style={{ animationDelay: "100ms" }}>
            <ViewerDemo />
          </div>
          <ul className={`${styles.techPoints} reveal`} style={{ animationDelay: "160ms" }}>
            <li>
              <h3>Evidence you can locate</h3>
              <p>Findings are accompanied by scrollable 3D references in the CBCT volume.</p>
            </li>
            <li>
              <h3>Built for treatment conversations</h3>
              <p>Clear presentation helps dentists explain options and plan care with patients.</p>
            </li>
            <li>
              <h3>PDF when you need it</h3>
              <p>Traditional exports remain available — without making them the only interface.</p>
            </li>
          </ul>
          <div className="btn-row" style={{ marginTop: "1.75rem" }}>
            <Link href="/technology" className="btn btn-secondary">
              Explore 3D reporting
            </Link>
            <Link href="/cases" className="btn btn-ghost">
              View example cases
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <p className="eyebrow">Services</p>
            <h2>Imaging organized around clinical intent</h2>
            <p className="lead">
              From CBCT use cases to plain-film and digital records — services grouped so patients
              and dentists can find the right path quickly.
            </p>
          </div>
          <ul className={`${styles.serviceList} reveal`} style={{ animationDelay: "80ms" }}>
            {servicePreview.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className={styles.serviceLink}>
                  <span className={styles.serviceMeta}>CBCT</span>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.serviceSummary}>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/services" className="btn btn-ghost">
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.how}`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <p className="eyebrow">How it works</p>
            <h2>A clear path from appointment to report</h2>
          </div>
          <ol className={`${styles.steps} reveal`} style={{ animationDelay: "80ms" }}>
            <li>
              <span>01</span>
              <div>
                <h3>Appointment</h3>
                <p>Book a visit at a Canaray location suited to the imaging your dentist requested.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Imaging</h3>
                <p>Specialist imaging is acquired with careful technique and clear patient guidance.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Radiologist analysis</h3>
                <p>Canadian-licensed oral and maxillofacial radiologists interpret the study.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Radiographic report</h3>
                <p>
                  Results are delivered in an interactive 3D experience, with traditional formats
                  available.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={`section-tight ${styles.trust}`}>
        <div className="container">
          <div className={`${styles.trustGrid} reveal`}>
            <div>
              <p className="eyebrow">Trusted across Canada</p>
              <h2>Built for clinical confidence</h2>
              <p className="lead">
                Canaray reports are trusted by thousands of dentists. When practices succeed, Canaray
                succeeds.
              </p>
            </div>
            <dl className={styles.stats}>
              <div>
                <dt>{PROOF.dentists}</dt>
                <dd>Dentists</dd>
              </div>
              <div>
                <dt>{PROOF.reports}</dt>
                <dd>Reports</dd>
              </div>
              <div>
                <dt>{PROOF.years}</dt>
                <dd>Years of experience</dd>
              </div>
              <div>
                <dt>OMFR</dt>
                <dd>{PROOF.radiologists}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className="container">
          <div className={`${styles.ctaPanel} reveal`}>
            <div>
              <p className="eyebrow">Next step</p>
              <h2>Choose the experience built for you</h2>
              <p>
                Patients get reassurance and simplicity. Dental professionals get a faster path to
                referrals, reporting, and case review.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/book" className="btn btn-primary btn-lg">
                Book as a patient
              </Link>
              <Link href="/refer" className="btn btn-ghost btn-lg">
                Refer as a dentist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
