import Reserva from "@/components/Reserva";
import Footer from "@/components/Footer";
import Seal from "@/components/Seal";

export const metadata = {
  title: "Reservar cita",
  description:
    "Reserva tu cita en Aura Beauty Studio en segundos — disponibilidad real, sincronizada al instante.",
};

export default function ReservarPage() {
  return (
    <main>
      <header className="border-b border-nude-200 px-6 py-6 lg:px-16">
        <a href="/" className="flex w-fit items-center gap-3">
          <Seal size={36} tone="ink">
            <span className="text-sm">A</span>
          </Seal>
          <span className="eyebrow-label">Aura Beauty Studio</span>
        </a>
      </header>
      <Reserva />
      <Footer />
    </main>
  );
}
