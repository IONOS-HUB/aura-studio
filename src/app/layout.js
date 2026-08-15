import { Marcellus, Jost } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import SmoothHash from "@/components/SmoothHash";
import {
  DESCRIPTION_DEFAULT,
  getSiteUrl,
  SITE,
  TITLE_DEFAULT,
} from "@/lib/site";

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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${SITE.name}`,
  },
  description: DESCRIPTION_DEFAULT,
  applicationName: SITE.name,
  keywords: [
    "salón de belleza Ibarra",
    "uñas Ibarra",
    "pestañas Ibarra",
    "maquillaje Ibarra",
    "Aura Beauty Studio",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.slogan}`,
    description: `Realzamos la belleza de cada mujer en Ibarra. Uñas, pestañas, cejas, maquillaje — ${SITE.slogan}.`,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: SITE.logo,
        width: 1200,
        height: 1200,
        alt: `${SITE.name} — ${SITE.descriptor}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.slogan}`,
    description: `Realzamos la belleza de cada mujer en Ibarra. Uñas, pestañas y maquillaje — ${SITE.slogan}.`,
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
          fixed nav mark while the gold-on-black lockup fills the right column; the booking
          CTA and WhatsApp affordance are both visible without scrolling, docked bottom-right
          on mobile / right rail on desktop, never gated behind the hero animation.
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
        <StructuredData />
        <SmoothHash />
      </body>
    </html>
  );
}
