import Reserva from "@/components/Reserva";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Tu cita",
  description:
    "Agenda tu momento en Aura Beauty Studio, Ibarra — realzamos la belleza de cada mujer.",
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
