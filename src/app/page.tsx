import Link from "next/link";
import { ViewerDemo } from "@/components/ViewerDemo";
import { ASSETS, PROOF, SERVICES } from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage() {
  const servicePreview = SERVICES.filter((s) => s.category === "cbct").slice(0, 6);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={`${styles.heroCopy} reveal`}>
            <p className="eyebrow">Oral & maxillofacial radiology</p>
            <h1 className={styles.brandTitle}>
              Canaray
              <span>Clarity in every dimension.</span>
            </h1>
            <p className={styles.heroLead}>
              Specialist dental imaging and interactive 3D reports — designed to make complex
              anatomy understandable for patients and decisive for dentists.
            </p>
            <div className={styles.pathSplit}>
              <Link href="/patients" className={styles.pathCard}>
                <span className={styles.pathLabel}>I&apos;m a patient</span>
                <strong>Understand your visit</strong>
                <span>What to expect, how booking works, and what happens after your scan.</span>
              </Link>
              <Link href="/dentists" className={styles.pathCard}>
                <span className={styles.pathLabel}>I&apos;m a dental professional</span>
                <strong>Refer with confidence</strong>
                <span>Start referrals, review imaging options, and explore true 3D reporting.</span>
              </Link>
            </div>
            <div className="btn-row">
              <Link href="/book" className="btn btn-primary btn-lg">
                Book an appointment
              </Link>
              <Link href="/refer" className="btn btn-ghost btn-lg">
                Start a referral
              </Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} reveal`} style={{ animationDelay: "120ms" }}>
            <div className={styles.visualFrame}>
              <video
                className={styles.heroVideo}
                src={ASSETS.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={ASSETS.icons.laptop}
                aria-label="Demonstration of Canaray interactive 3D reporting"
              />
              <div className={styles.visualCaption}>
                <span className="demo-pill">Product vision</span>
                <p>Interactive 3D reporting — patients are 3D, CBCTs are 3D, reports should be too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.tech}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Technology</p>
            <h2>True 3D reports — not PDFs pretending to be 3D</h2>
            <p className="lead">
              Canaray cases load in interactive 3D by default. Findings stay linked to the scan, so
              clinicians and patients can see exactly what the radiologist is describing.
            </p>
          </div>
          <ViewerDemo />
          <div className={`${styles.techPoints} grid-3`}>
            <div>
              <h3>Evidence you can locate</h3>
              <p>Findings are accompanied by scrollable 3D references in the CBCT volume.</p>
            </div>
            <div>
              <h3>Built for treatment conversations</h3>
              <p>Clear presentation helps dentists explain options and plan care with patients.</p>
            </div>
            <div>
              <h3>PDF when you need it</h3>
              <p>Traditional exports remain available — without making them the only interface.</p>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
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
          <div className={styles.sectionHead}>
            <p className="eyebrow">Services</p>
            <h2>Imaging organized around clinical intent</h2>
            <p className="lead">
              From CBCT use cases to plain-film and digital records — services grouped so patients
              and dentists can find the right path quickly.
            </p>
          </div>
          <div className={`grid-3 ${styles.serviceGrid}`}>
            {servicePreview.map((service) => (
              <Link key={service.id} href={`/services#${service.id}`} className={styles.serviceLink}>
                <span className="demo-pill">CBCT</span>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </Link>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/services" className="btn btn-ghost">
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.how}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">How it works</p>
            <h2>A clear path from appointment to report</h2>
          </div>
          <ol className={styles.steps}>
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
                <p>Results are delivered in an interactive 3D experience, with traditional formats available.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={`section-tight ${styles.trust}`}>
        <div className="container">
          <div className={styles.trustGrid}>
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
          <div className={styles.ctaPanel}>
            <div>
              <p className="eyebrow">Next step</p>
              <h2>Choose the experience built for you</h2>
              <p>
                Patients get reassurance and simplicity. Dental professionals get a faster path to
                referrals, reporting, and case review.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/book" className="btn btn-on-dark btn-lg">
                Book as a patient
              </Link>
              <Link href="/refer" className="btn btn-on-dark-ghost btn-lg">
                Refer as a dentist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
