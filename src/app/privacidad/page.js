import LegalPage from "@/components/LegalPage";
import { FULL_ADDRESS, SITE } from "@/lib/site";

export const metadata = {
  title: "Política de privacidad",
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated={SITE.legalUpdated}>
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Aura Beauty Studio, {FULL_ADDRESS}. Contacto: {SITE.email} ·{" "}
          {SITE.phoneDisplay}.
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
            Datos que ingresas en el calendario de citas de Google (nombre,
            correo, hora) — para confirmar y recordarte la reserva.
          </li>
          <li>
            Mensaje del formulario de contacto — para responder tu consulta.
          </li>
        </ul>
      </section>
      <section>
        <h2>3. Base legal</h2>
        <p>Tu consentimiento al reservar una cita o al enviar el formulario de contacto.</p>
      </section>
      <section>
        <h2>4. Con quién se comparte</h2>
        <p>
          Con Google Calendar (para agendar y confirmar tu cita), el
          proveedor de correo transaccional y, si das permiso, Google
          Analytics. Eso puede implicar transferencia internacional de datos.
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
          ser objeto de decisiones automatizadas. Escríbenos a {SITE.email}{" "}
          para ejercerlos. Responderemos en el plazo que fija la ley.
        </p>
      </section>
    </LegalPage>
  );
}
