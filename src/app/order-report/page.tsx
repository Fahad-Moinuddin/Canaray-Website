import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ReferralFlow } from "@/components/ReferralFlow";

export const metadata = { title: "Order a Report" };

export default function OrderReportPage() {
  return (
    <>
      <PageHero
        eyebrow="For dental offices"
        title="Order a report for your own X-rays"
        description="Demonstration of uploading in-office imaging and requesting a Canaray radiologist report. Use the referral flow and choose “Upload X-rays & order a report.”"
        actions={
          <Link href="/dentists" className="btn btn-ghost">
            Back to dentist hub
          </Link>
        }
      />
      <section className="section-tight">
        <div className="container-narrow">
          <p className="demo-pill" style={{ marginBottom: "1rem" }}>
            Same demo engine as referrals · files never leave your browser
          </p>
          <ReferralFlow />
        </div>
      </section>
    </>
  );
}
