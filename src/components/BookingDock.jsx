/**
 * The always-visible booking affordance (Product Principle 1 — never gated
 * behind scroll depth or animation delay). A vertical tab on desktop, a
 * grounded pill on mobile — docked bottom-right opposite the WhatsApp float
 * at bottom-left, so the two escape hatches never collide.
 */
export default function BookingDock() {
  return (
    <a
      href="#reserva"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-[var(--radius-aura)] border border-gold-700/50 bg-ink-900 py-3 pl-4 pr-4 text-nude-000 shadow-[0_8px_24px_-8px_rgba(20,16,14,0.45)] lg:bottom-auto lg:right-0 lg:top-1/2 lg:flex-col lg:gap-3 lg:-translate-y-1/2 lg:rounded-none lg:rounded-l-[var(--radius-aura)] lg:border-y lg:border-l lg:border-r-0 lg:py-6 lg:px-2.5 lg:shadow-none"
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="var(--color-gold-300)"
        strokeWidth="1.4"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="3.5" y="4.5" width="17" height="16" rx="1" />
        <path d="M3.5 9.5h17M7.5 2.5v4M16.5 2.5v4" strokeLinecap="round" />
      </svg>
      <span className="eyebrow-label lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:tracking-[0.22em]">
        Reservar cita
      </span>
    </a>
  );
}
