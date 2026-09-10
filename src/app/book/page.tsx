import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BookingFlow } from "@/components/BookingFlow";

export const metadata = { title: "Book an Appointment" };

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient booking"
        title="Book an appointment"
        description="A streamlined booking demonstration with saved progress, clear validation, and a kiosk-friendly consent signature area. Nothing is submitted to live Canaray systems."
        actions={
          <Link href="/kiosk" className="btn btn-ghost">
            Open kiosk layout
          </Link>
        }
      />
      <section className="section-tight">
        <div className="container-narrow">
          <BookingFlow />
        </div>
      </section>
    </>
  );
}
