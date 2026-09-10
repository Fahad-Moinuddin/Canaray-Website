import { PageHero } from "@/components/PageHero";
import { ReferralFlow } from "@/components/ReferralFlow";

export const metadata = { title: "Refer a Patient" };

export default function ReferPage() {
  return (
    <>
      <PageHero
        eyebrow="Dentist referral"
        title="Start a referral"
        description="Demonstration of a professional referral journey with service selection, optional upload, and conceptual dynamic pricing. Fees shown are not real Canaray prices."
      />
      <section className="section-tight">
        <div className="container-narrow">
          <ReferralFlow />
        </div>
      </section>
    </>
  );
}
