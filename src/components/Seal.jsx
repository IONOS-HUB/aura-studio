/**
 * The recurring "sello" ring — the logo's circular mark reused as a structural
 * device across section numbers, the nav mark, the map pin, and the booking
 * confirmation icon (PRD §7.4). Always a 1px gold ring; content lives inside it.
 */
export default function Seal({
  size = 40,
  strokeWidth = 1,
  tone = "gold",
  children,
  className = "",
}) {
  const stroke = tone === "ink" ? "var(--color-ink-900)" : "var(--color-gold-700)";
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={50 - strokeWidth}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth * 2}
        />
      </svg>
      <span className="relative flex items-center justify-center">{children}</span>
    </span>
  );
}
