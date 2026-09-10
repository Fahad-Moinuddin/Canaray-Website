import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PROOF, SITE } from "@/lib/content";

export const metadata = { title: "About Canaray" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Specialists in oral radiology"
        description="Canaray provides advanced dental imaging and radiographic reporting for patients and dental professionals across Canada."
      />

      <section className="section-tight">
        <div className="container grid-2">
          <article className="panel panel-pad">
            <h2>Who we serve</h2>
            <p>
              Patients referred for specialized imaging, and dental professionals who need clear
              specialist interpretation — including interactive 3D reporting.
            </p>
            <p>
              Trusted by {PROOF.dentists} dentists over {PROOF.years} years, with {PROOF.reports}{" "}
              reports and {PROOF.radiologists}.
            </p>
          </article>
          <article className="panel panel-pad">
            <h2>Contact</h2>
            <p>
              {SITE.phone}
              <br />
              {SITE.email}
              <br />
              {SITE.hours}
            </p>
            <p>
              Head office
              <br />
              {SITE.headOffice}
            </p>
            <Link href="/locations" className="btn btn-ghost btn-sm">
              View all locations
            </Link>
          </article>
        </div>
      </section>

      <section className="section" id="poc-notes">
        <div className="container-narrow panel panel-pad">
          <p className="demo-pill">POC notes for stakeholders</p>
          <h2>What this website is</h2>
          <p>
            This is a greenfield frontend proof of concept. It is not connected to Canaray’s
            production booking, referral, authentication, upload, chat, or 3D rendering systems.
          </p>
          <ul style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            <li>Booking, referral, login, and uploads are simulated for UX demonstration.</li>
            <li>Pricing shown in the referral flow is conceptual only.</li>
            <li>Selected public Canaray media is referenced to illustrate product vision.</li>
            <li>
              Design priorities include clearer IA, patient/dentist separation, kiosk-friendly forms,
              and a stronger 3D reporting story.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
