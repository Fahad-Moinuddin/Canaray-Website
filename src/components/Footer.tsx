import Link from "next/link";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "-0.03em", fontWeight: 650 }}>
              Canaray
            </strong>
            <p>
              Advanced oral radiology and true interactive 3D reporting for patients and dental
              professionals across Canada.
            </p>
            <p>
              {SITE.phone}
              <br />
              {SITE.email}
              <br />
              {SITE.hours}
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/patients">For patients</Link>
              </li>
              <li>
                <Link href="/dentists">For dentists</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/technology">3D reports</Link>
              </li>
              <li>
                <Link href="/cases">Example cases</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Actions</h4>
            <ul>
              <li>
                <Link href="/book">Book an appointment</Link>
              </li>
              <li>
                <Link href="/refer">Refer a patient</Link>
              </li>
              <li>
                <Link href="/order-report">Order a report</Link>
              </li>
              <li>
                <Link href="/login">Professional login</Link>
              </li>
              <li>
                <Link href="/kiosk">Kiosk mode demo</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Canaray</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Canaray · Vision POC (not a live production site)</span>
          <span>Head office: {SITE.headOffice}</span>
        </div>
      </div>
    </footer>
  );
}
