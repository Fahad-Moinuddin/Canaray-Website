import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "For Patients" };

export default function PatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For patients"
        title="Your imaging visit, explained simply"
        description="If your dentist sent you to Canaray, you’re here for specialized dental imaging and a clear radiographic report. Here’s what to expect — without the jargon."
        actions={
          <>
            <Link href="/book" className="btn btn-primary btn-lg">
              Book an appointment
            </Link>
            <Link href="/locations" className="btn btn-ghost btn-lg">
              Find a location
            </Link>
          </>
        }
      />

      <section className="section-tight">
        <div className="container grid-2">
          <article className="panel panel-pad">
            <h2>Why you may be referred</h2>
            <p>
              Your dentist may need a more detailed view than a regular dental office X-ray can
              provide — for implants, wisdom teeth, root canals, jaw joints, or other concerns.
            </p>
            <p>
              Canaray focuses on oral radiology: acquiring the images and having specialist
              radiologists interpret them.
            </p>
          </article>
          <article className="panel panel-pad">
            <h2>What happens at your visit</h2>
            <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-muted)" }}>
              <li style={{ marginBottom: "0.6rem" }}>Check in and review your referral details.</li>
              <li style={{ marginBottom: "0.6rem" }}>Complete consent on a clear, touch-friendly form.</li>
              <li style={{ marginBottom: "0.6rem" }}>Have your imaging completed by trained staff.</li>
              <li>Your radiologist prepares the report for your dentist.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="panel panel-pad">
              <h3>After your scan</h3>
              <p>
                Results are prepared for your referring dentist. Interactive 3D reporting helps make
                findings easier to understand during treatment conversations.
              </p>
            </article>
            <article className="panel panel-pad">
              <h3>Insurance</h3>
              <p>
                Canaray provides insurance claim forms from radiologists for the work performed.
                Coverage varies by plan — your dental office can help interpret benefits.
              </p>
            </article>
            <article className="panel panel-pad">
              <h3>Ready to book?</h3>
              <p>
                Use the demo booking flow to see how a simpler patient appointment experience could
                feel on phone, tablet, or clinic kiosk.
              </p>
              <Link href="/book" className="btn btn-primary" style={{ marginTop: "0.75rem" }}>
                Start booking demo
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
