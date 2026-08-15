import Link from "next/link";
import BrandMark from "./BrandMark";

export default function SiteHeader({ reserveHref = "/reservar" }) {
  return (
    <header className="border-b border-nude-200 bg-nude-000">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-16">
        <Link href="/" className="flex w-fit items-center">
          <BrandMark size={48} priority />
        </Link>
        <Link
          href={reserveHref}
          className="eyebrow-label rounded-[var(--radius-aura)] bg-ink-900 px-5 py-2.5 text-nude-000 transition-colors hover:bg-ink-600"
        >
          Reservar cita
        </Link>
      </div>
    </header>
  );
}
