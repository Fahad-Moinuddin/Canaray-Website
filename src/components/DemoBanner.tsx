import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="demo-banner" role="status">
      <strong>Vision POC</strong>
      <span>
        Frontend demonstration only — booking, referrals, login, and uploads are simulated.{" "}
        <Link href="/about#poc-notes" style={{ color: "#7ed0ff" }}>
          Learn more
        </Link>
      </span>
    </div>
  );
}
