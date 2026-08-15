import Link from "next/link";
import BrandMark from "./BrandMark";
import CookiePreferenceButton from "./CookiePreferenceButton";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-nude-200 bg-nude-000">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <BrandMark size={88} />
            <p className="text-sm text-ink-600">{SITE.slogan}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow-label text-ink-600">Estudio</p>
            <FooterLink href="/#conoce-aura">Conoce Aura</FooterLink>
            <FooterLink href="/#servicios">Servicios</FooterLink>
            <FooterLink href="/#galeria">Galería</FooterLink>
            <FooterLink href="/#horario-ubicacion">Horario y ubicación</FooterLink>
            <FooterLink href="/reservar">Reservar cita</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow-label text-ink-600">Contacto</p>
            <FooterLink href={`https://wa.me/${SITE.whatsapp}`}>
              {SITE.phoneDisplay}
            </FooterLink>
            <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink>
            <FooterLink href={SITE.instagram}>{SITE.instagramHandle}</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow-label text-ink-600">Legal</p>
            <FooterLink href="/terminos">Términos y condiciones</FooterLink>
            <FooterLink href="/privacidad">Política de privacidad</FooterLink>
            <FooterLink href="/cookies">Política de cookies</FooterLink>
            <CookiePreferenceButton />
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-nude-200 pt-8 text-xs text-ink-600 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p>
            {SITE.city}, {SITE.region} · {SITE.country}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  const className =
    "w-fit text-sm text-ink-600 transition-colors hover:text-gold-700";
  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
