const VARIANTS = {
  work: "radial-gradient(120% 140% at 15% 10%, #F5E8DC 0%, #E8D5C4 45%, #D9A88F 100%)",
  studio: "radial-gradient(120% 140% at 85% 100%, #FDF9F5 0%, #F5E8DC 55%, #E8D5C4 100%)",
  portrait: "radial-gradient(120% 140% at 50% 0%, #F5E8DC 0%, #D9A88F 60%, #B8836A 100%)",
};

/**
 * A clearly labeled stand-in for real photography (PRD §13.2 — nothing here
 * is a real photo of the studio, its work, or its owner). Renders in-world
 * rather than as a gray box so layout and pacing read correctly today, and
 * carries a visible + accessible label so it can never be mistaken for real
 * content once it ships. Replace with `next/image` once real photos land.
 */
export default function PlaceholderMedia({
  label,
  variant = "work",
  className = "",
}) {
  return (
    <div
      role="img"
      aria-label={`Espacio reservado para fotografía real: ${label}. Contenido de muestra, pendiente de reemplazo.`}
      className={`relative overflow-hidden rounded-[var(--radius-aura)] ${className}`}
      style={{ background: VARIANTS[variant] }}
    >
      <div className="absolute inset-3 rounded-[calc(var(--radius-aura)*0.6)] border border-gold-500/40" />
      <span className="eyebrow-label absolute bottom-4 left-4 rounded-[var(--radius-aura)] bg-ink-900/85 px-2.5 py-1.5 text-nude-000">
        Muestra — {label}
      </span>
    </div>
  );
}
