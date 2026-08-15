import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Términos y condiciones",
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="[fecha pendiente]">
      <section>
        <h2>1. Servicios ofrecidos</h2>
        <p>
          Aura Beauty Studio ofrece servicios de uñas, pestañas, cejas,
          maquillaje, depilación y masajes corporales, descritos en la
          sección Servicios de este sitio.
        </p>
      </section>
      <section>
        <h2>2. Reservas</h2>
        <p>
          Una reserva realizada en línea es una <strong>solicitud</strong>{" "}
          hasta que Aura la confirme por correo o WhatsApp.
        </p>
      </section>
      <section>
        <h2>3. Cancelación y reprogramación</h2>
        <p>
          [Pendiente — PRD §16 pregunta 12: sugerido, cancelación libre hasta
          12 horas antes de la cita.]
        </p>
      </section>
      <section>
        <h2>4. Retrasos</h2>
        <p>
          [Pendiente confirmar. Sugerido: un retraso mayor a 15 minutos puede
          implicar reprogramación de la cita.]
        </p>
      </section>
      <section>
        <h2>5. Precios</h2>
        <p>
          Los precios publicados en el sitio son referenciales y pueden
          variar según el caso particular; el precio final se confirma antes
          de la cita.
        </p>
      </section>
      <section>
        <h2>6. Responsabilidad y propiedad intelectual</h2>
        <p>
          Todo el contenido de este sitio (textos, imágenes, marca) pertenece
          a Aura Beauty Studio y no puede reproducirse sin autorización.
        </p>
      </section>
    </LegalPage>
  );
}
