import Seal from "./Seal";
import CookiePreferenceButton from "./CookiePreferenceButton";

export default function Footer() {
  return (
    <footer className="border-t border-nude-200 bg-nude-000">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Seal size={40} tone="ink">
              <span className="text-sm">A</span>
            </Seal>
            <p className="font-display text-lg text-ink-900">
              Aura Beauty Studio
            </p>
            <p className="text-sm text-ink-600">La belleza de sentirte tú</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow-label text-ink-600">Estudio</p>
            <FooterLink href="#conoce-aura">Conoce Aura</FooterLink>
            <FooterLink href="#servicios">Servicios</FooterLink>
            <FooterLink href="#galeria">Galería</FooterLink>
            <FooterLink href="#horario-ubicacion">Horario y ubicación</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow-label text-ink-600">Contacto</p>
            <FooterLink href="https://wa.me/593995368242">
              +593 99 536 8242
            </FooterLink>
            <FooterLink href="mailto:crdiris2428@gmail.com">
              crdiris2428@gmail.com
            </FooterLink>
            <FooterLink href="https://instagram.com/beautystudio_aura1">
              @beautystudio_aura1
            </FooterLink>
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
          <p>© {new Date().getFullYear()} Aura Beauty Studio. Todos los derechos reservados.</p>
          <p>[Ciudad pendiente] · Ecuador</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="w-fit text-sm text-ink-600 transition-colors hover:text-gold-700"
    >
      {children}
    </a>
  );
}
