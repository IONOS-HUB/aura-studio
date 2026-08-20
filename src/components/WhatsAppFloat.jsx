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
      className="group fixed bottom-5 left-5 z-40 flex h-13 w-13 items-center justify-center"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <span
        className="flex h-full w-full items-center justify-center rounded-full border border-gold-700/50 bg-ink-900 shadow-[0_10px_28px_-8px_rgba(20,16,14,0.55)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-6px_rgba(20,16,14,0.6)] group-hover:border-gold-500/70"
      >
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="var(--color-gold-300)"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.362.687 4.564 1.874 6.42L4 29l7.77-1.837A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.71 9.71 0 0 1-4.95-1.354l-.355-.21-4.61 1.09 1.117-4.49-.232-.368A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Z" />
          <path d="M21.63 17.52c-.302-.152-1.79-.883-2.067-.984-.278-.102-.48-.152-.682.152-.202.303-.782.984-.958 1.187-.176.202-.352.227-.654.076-.303-.152-1.278-.472-2.434-1.505-.9-.804-1.508-1.797-1.684-2.1-.176-.303-.019-.467.133-.618.136-.136.303-.353.454-.53.152-.176.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.649-.935-2.258-.246-.593-.497-.513-.682-.522l-.581-.01c-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.526s1.086 2.93 1.238 3.132c.152.202 2.138 3.267 5.183 4.58.724.313 1.29.5 1.73.64.727.232 1.388.199 1.911.121.583-.087 1.79-.732 2.042-1.44.253-.707.253-1.313.177-1.44-.076-.126-.278-.202-.58-.353Z" />
        </svg>
      </span>
    </a>
  );
}
