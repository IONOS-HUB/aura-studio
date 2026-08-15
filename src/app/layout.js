import { Marcellus, Jost } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aurabeautystudio.com"),
  title: {
    default: "Aura Beauty Studio — Uñas, pestañas y maquillaje | [Ciudad]",
    template: "%s | Aura Beauty Studio",
  },
  description:
    "Aura Beauty Studio: uñas, pestañas, cejas, maquillaje, depilación y masajes en [Ciudad]. Reserva tu cita en línea, a cualquier hora — La belleza de sentirte tú.",
  openGraph: {
    title: "Aura Beauty Studio — La belleza de sentirte tú",
    description:
      "Reserva tu cita de belleza en línea, sincronizada al instante. Uñas, pestañas, cejas, maquillaje, depilación y masajes.",
    url: "https://aurabeautystudio.com",
    siteName: "Aura Beauty Studio",
    locale: "es_EC",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#fdf9f5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${marcellus.variable} ${jost.variable}`}>
      <body>
        {/*
          THESIS: A joyería-grade booking counter, not a salon flyer — the reservation
          is treated with the same precision as the jewelry it borrows its mark from,
          refusing the DM-and-wait pattern the category defaults to.
          OWN-WORLD: Nude/ink ground (#FDF9F5 → #14100E), gold used only as 1px hairline,
          icon, or underline (#8A6A28 text-safe, #C9A24A decorative-only) — never a filled
          area. Marcellus display serifs + Jost tracked-caps utility type. 2px square radii
          everywhere except the 9999px sello ring. Near-zero shadow; hierarchy from space
          and line.
          STORY: A visitor arriving from Instagram at night sees the studio's real work
          immediately, understands the six services and their price band, and can lock a
          slot without ever opening WhatsApp — while WhatsApp stays one tap away for
          whoever still wants to ask first.
          FIRST VIEWPORT: Full-bleed editorial hero — the sello unfolds top-left into the
          fixed nav mark while a single full-height photograph (placeholder-labeled) sits
          right of a left-aligned display headline; the booking CTA and WhatsApp affordance
          are both visible without scrolling, docked bottom-right on mobile / right rail on
          desktop, never gated behind the hero animation.
          FORM: Editorial Spread — magazine-style alternating full-bleed spreads and text
          columns, asymmetric grid, pull quotes (dealt lead, seed key ca7920e2, index 5).
          RAISE (from an airline-ticket-wallet challenger): the booking confirmation renders
          as a carbon-copy appointment card with a perforated tear-confirm state.
          RAISE (from a Miura-fold challenger): the hero sello reveal is a crease-timed
          unfold, not a flat circular stroke — more physical weight on "apertura del sello."
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
          review, the verdict, and DESIGN.md.
        */}
        {children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
