import Image from "next/image";

const GROUNDS = {
  work: "#14100E",
  studio: "#1A1612",
  portrait: "#000000",
};

/**
 * Branded stand-in for real photography. Uses the studio lockup on an ink
 * ground so empty slots still read as Aura — never as stock or a gray box.
 * Replace with next/image of real work once photos land.
 */
export default function PlaceholderMedia({
  label,
  variant = "work",
  className = "",
}) {
  return (
    <div
      role="img"
      aria-label={`Fotografía de ${label}, próximamente.`}
      className={`relative overflow-hidden rounded-[var(--radius-aura)] ${className}`}
      style={{ background: GROUNDS[variant] ?? GROUNDS.work }}
    >
      <div className="pointer-events-none absolute inset-3 rounded-[calc(var(--radius-aura)*0.6)] border border-gold-500/35" />
      <Image
        src="/imgs/icon.PNG"
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-contain p-[18%] opacity-90"
      />
      <span className="eyebrow-label absolute bottom-4 left-4 z-10 rounded-[var(--radius-aura)] bg-ink-900/85 px-2.5 py-1.5 text-nude-000">
        Próximamente — {label}
      </span>
    </div>
  );
}
