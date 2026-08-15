import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ConoceAura from "@/components/ConoceAura";
import Servicios from "@/components/Servicios";
import Galeria from "@/components/Galeria";
import PorQueAura from "@/components/PorQueAura";
import HorarioUbicacion from "@/components/HorarioUbicacion";
import Reserva from "@/components/Reserva";
import Footer from "@/components/Footer";
import BookingDock from "@/components/BookingDock";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ConoceAura />
      <Servicios />
      <Galeria />
      <PorQueAura />
      <HorarioUbicacion />
      <Reserva />
      <Footer />
      <BookingDock />
    </main>
  );
}
