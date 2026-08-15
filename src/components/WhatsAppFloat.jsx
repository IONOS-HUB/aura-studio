const WHATSAPP_NUMBER = "593995368242";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Aura Beauty Studio, me gustaría consultar disponibilidad para una cita."
);

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Aura Beauty Studio"
      className="fixed bottom-5 left-5 z-40 flex h-13 w-13 items-center justify-center rounded-full border border-gold-700/50 bg-ink-900 text-nude-000 shadow-[0_8px_24px_-8px_rgba(20,16,14,0.45)] transition-transform hover:scale-105"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="var(--color-gold-300)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a8.5 8.5 0 0 0-7.35 12.75L3.5 20.5l4.9-1.1A8.5 8.5 0 1 0 12 3Z" />
        <path d="M8.7 8.6c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.65 1.7.7 1.8.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.5-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85.9.8 1.7 1.1 2 1.25.3.15.5.1.65-.05.2-.2.7-.8.9-1.1.2-.3.4-.25.65-.15.25.1 1.6.75 1.85.9.25.15.45.2.5.35.05.15.05.85-.2 1.65-.25.8-1.45 1.5-2 1.55-.55.05-1 .25-3.4-.75-2.9-1.2-4.7-4.1-4.85-4.3-.15-.2-1.15-1.55-1.15-2.95s.75-2.1.95-2.35Z" />
      </svg>
    </a>
  );
}
