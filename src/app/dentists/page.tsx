import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "For Dentists" };

export default function DentistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For dental professionals"
        title="Refer, report, and review in one clearer workflow"
        description="Start patient referrals, order reports on your own imaging, explore CBCT use cases, and show patients findings in interactive 3D."
        actions={
          <>
            <Link href="/refer" className="btn btn-primary btn-lg">
              Start a referral
            </Link>
            <Link href="/order-report" className="btn btn-ghost btn-lg">
              Order a report
            </Link>
            <Link href="/login" className="btn btn-ghost btn-lg">
              Professional login
            </Link>
          </>
        }
      />

      <section className="section-tight">
        <div className="container grid-3">
          <article className="panel panel-pad">
            <p className="demo-pill">Workflow</p>
            <h3>Refer a patient</h3>
            <p>
              Choose the service, capture clinical context, and preview how dynamic pricing could
              surface before submission.
            </p>
            <Link href="/refer" className="btn btn-secondary btn-sm">
              Open referral demo
            </Link>
          </article>
          <article className="panel panel-pad">
            <p className="demo-pill">Reporting</p>
            <h3>Upload & order a report</h3>
            <p>
              For offices with in-house imaging: demonstrate ordering a specialist report on your
              own X-rays or CBCT.
            </p>
            <Link href="/order-report" className="btn btn-secondary btn-sm">
              Open order demo
            </Link>
          </article>
          <article className="panel panel-pad">
            <p className="demo-pill">Learning</p>
            <h3>Example cases</h3>
            <p>
              Review sample interactive case presentations spanning implants, endodontics, TMJ, and
              more.
            </p>
            <Link href="/cases" className="btn btn-secondary btn-sm">
              Browse cases
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article>
            <p className="eyebrow">Why practices use Canaray</p>
            <h2>Specialist interpretation, modern presentation</h2>
            <p>
              Canadian-licensed oral and maxillofacial radiologists interpret studies. Results are
              designed to support treatment planning conversations — including interactive 3D, not
              only static PDFs.
            </p>
            <ul style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              <li>CBCT use cases organized by clinical intent</li>
              <li>Clear separation between marketing and professional tools</li>
              <li>Patient-driven payment workflows where applicable</li>
            </ul>
          </article>
          <article className="panel panel-pad">
            <h3>Professional access</h3>
            <p>
              Login, password recovery, and account tools are demonstrated as UX only in this POC —
              they are not connected to Canaray authentication.
            </p>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <Link href="/login" className="btn btn-primary">
                Demo login
              </Link>
              <Link href="/login/forgot" className="btn btn-ghost">
                Forgot password UX
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
