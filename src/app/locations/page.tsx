import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LOCATIONS } from "@/lib/content";
import styles from "./locations.module.css";

export const metadata = { title: "Locations" };

export default function LocationsPage() {
  const regions = ["Ontario GTA", "Ontario", "Alberta"] as const;

  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Find a Canaray imaging location"
        description="Book at a clinic that offers the imaging your dentist requested. Hours and availability vary by site."
        actions={
          <Link href="/book" className="btn btn-primary btn-lg">
            Book an appointment
          </Link>
        }
      />

      <section className="section-tight">
        <div className="container">
          {regions.map((region) => {
            const items = LOCATIONS.filter((l) => l.region === region);
            if (!items.length) return null;
            return (
              <div key={region} className={styles.region}>
                <h2>{region}</h2>
                <div className={styles.grid}>
                  {items.map((loc) => (
                    <article key={loc.id} className={styles.card}>
                      <h3>{loc.name}</h3>
                      <p>
                        {loc.address}
                        <br />
                        {loc.city}
                      </p>
                      {loc.note ? <p className={styles.note}>{loc.note}</p> : null}
                      <Link href={`/book?location=${loc.id}`} className="btn btn-ghost btn-sm">
                        Book at {loc.name}
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
