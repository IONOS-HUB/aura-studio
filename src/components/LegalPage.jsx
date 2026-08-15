import Link from "next/link";
import Footer from "./Footer";
import SiteHeader from "./SiteHeader";

const LEGAL_LINKS = [
  { href: "/terminos", label: "Términos" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export default function LegalPage({ title, updated, children }) {
  return (
    <main className="flex min-h-screen flex-col bg-nude-000">
      <SiteHeader />

      <article className="mx-auto w-full max-w-[720px] flex-1 px-6 py-16 lg:py-24">
        <p className="eyebrow-label mb-4 text-ink-600">
          Última actualización: {updated}
        </p>
        <h1 className="mb-12 font-display text-h1 text-ink-900">{title}</h1>
        <div className="flex flex-col gap-8 text-ink-600 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink-900 [&_p]:measure [&_p]:leading-relaxed [&_ul]:measure [&_ul]:list-disc [&_ul]:pl-5 [&_li]:leading-relaxed">
          {children}
        </div>

        <nav
          aria-label="Otras páginas legales"
          className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-nude-200 pt-8"
        >
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="eyebrow-label text-ink-600 transition-colors hover:text-gold-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </article>

      <Footer />
    </main>
  );
}
