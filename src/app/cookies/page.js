import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Política de cookies",
};

const COOKIES = [
  {
    name: "aura-cookie-consent",
    purpose: "Guarda tu preferencia de cookies",
    duration: "12 meses",
  },
  {
    name: "_ga / _ga_*",
    purpose: "Analítica (Google Analytics) — solo si aceptas",
    duration: "hasta 24 meses",
  },
  {
    name: "Cookies de Google Calendar",
    purpose: "Funcionamiento del calendario de citas embebido",
    duration: "las define Google",
  },
];

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated={SITE.legalUpdated}>
      <section>
        <p>
          Usamos cookies necesarias para el funcionamiento del sitio y,
          solo con tu permiso, cookies de analítica. El calendario de citas
          (Google) puede establecer las suyas al cargar. Puedes cambiar tu
          preferencia de analítica cuando quieras desde el pie de página.
        </p>
      </section>
      <section>
        <h2>Cookies utilizadas</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-nude-200 text-left">
                <th className="py-2 pr-4 font-normal text-ink-900">Nombre</th>
                <th className="py-2 pr-4 font-normal text-ink-900">Finalidad</th>
                <th className="py-2 font-normal text-ink-900">Duración</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name} className="border-b border-nude-200/60">
                  <td className="py-3 pr-4 font-tabular">{c.name}</td>
                  <td className="py-3 pr-4">{c.purpose}</td>
                  <td className="py-3">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LegalPage>
  );
}
