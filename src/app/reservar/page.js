import Reserva from "@/components/Reserva";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Reservar cita",
  description:
    "Reserva tu cita en Aura Beauty Studio, Ibarra — uñas, pestañas, cejas, maquillaje, depilación y masajes.",
};

export default function ReservarPage() {
  return (
    <main className="flex min-h-screen flex-col bg-nude-000">
      <SiteHeader reserveHref="#reserva" />
      <Reserva eager />
      <Footer />
    </main>
  );
}
