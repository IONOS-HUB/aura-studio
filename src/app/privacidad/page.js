import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="[fecha pendiente]">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Aura Beauty Studio. Contacto: crdiris2428@gmail.com.{" "}
          [Confirmar dirección legal completa.]
        </p>
      </section>
      <section>
        <h2>2. Qué datos recogemos y para qué</h2>
        <ul>
          <li>Nombre, teléfono y correo — para agendar y confirmar tu cita.</li>
          <li>
            Fecha de cumpleaños (opcional) — únicamente para enviarte un
            beneficio de cumpleaños, si la proporcionas.
          </li>
          <li>
            Mensaje del formulario de contacto — para responder tu consulta.
          </li>
        </ul>
      </section>
      <section>
        <h2>3. Base legal</h2>
        <p>Tu consentimiento expreso, otorgado al marcar la casilla correspondiente.</p>
      </section>
      <section>
        <h2>4. Con quién se comparte</h2>
        <p>
          Con nuestro proveedor de agendamiento (Cal.com), proveedor de
          correo transaccional y herramienta de analítica (Google Analytics),
          que pueden implicar transferencia internacional de datos.
        </p>
      </section>
      <section>
        <h2>5. Plazo de conservación</h2>
        <p>24 meses desde tu última cita, salvo que la ley exija un plazo distinto.</p>
      </section>
      <section>
        <h2>6. Tus derechos</h2>
        <p>
          Acceso, rectificación, eliminación, oposición, portabilidad y a no
          ser objeto de decisiones automatizadas. Escríbenos a
          crdiris2428@gmail.com para ejercerlos.
        </p>
      </section>
    </LegalPage>
  );
}
