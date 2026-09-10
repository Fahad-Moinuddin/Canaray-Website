import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ViewerDemo } from "@/components/ViewerDemo";
import { ASSETS } from "@/lib/content";
import styles from "./technology.module.css";

export const metadata = { title: "3D Reports" };

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Interactive 3D reporting as the default"
        description="Patients are three-dimensional. CBCTs are three-dimensional. Canaray reports are designed to be explored in 3D — with PDFs still available when you need them."
        tone="dark"
        actions={
          <>
            <Link href="/cases" className="btn btn-on-dark">
              See example cases
            </Link>
            <Link href="/refer" className="btn btn-on-dark-ghost">
              Start a referral
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <h2>See findings in place</h2>
            <p className="lead">
              Instead of asking clinicians to translate a paper report back into anatomy, Canaray
              links observations to locations in the volume. This POC demonstrates the interaction
              model with a simulated viewer.
            </p>
          </div>
          <ViewerDemo />
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid-3">
          <article className="panel panel-pad">
            <h3>Built-in treatment planning context</h3>
            <p>
              Reports are structured to support clinical decision-making and patient conversations —
              clarity over jargon.
            </p>
          </article>
          <article className="panel panel-pad">
            <h3>Peace of mind through evidence</h3>
            <p>
              Findings can be accompanied by scrollable 3D references so dentists and patients can
              verify what was described.
            </p>
          </article>
          <article className="panel panel-pad">
            <h3>Cloud delivery</h3>
            <p>
              Cases are accessible without forcing clunky local PDF workflows as the primary
              experience.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.videoBlock}>
            <div>
              <p className="eyebrow">Case walkthrough</p>
              <h2>How a full case can feel</h2>
              <p>
                This video is hosted from Canaray&apos;s public site and lazy-loaded for performance.
                It illustrates the product direction this POC is proposing to elevate.
              </p>
              <p className="demo-pill">External demo media</p>
            </div>
            <video
              className={styles.video}
              controls
              preload="none"
              playsInline
              poster={ASSETS.icons.computer}
            >
              <source src={ASSETS.caseVideo} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
