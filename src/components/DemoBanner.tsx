import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="demo-banner" role="status">
      <strong>Vision POC</strong>
      <span>
        Frontend demonstration only — booking, referrals, login, and uploads are simulated.{" "}
        <Link href="/about#poc-notes" style={{ color: "#9ed4f5" }}>
          Learn more
        </Link>
      </span>
    </div>
  );
}
