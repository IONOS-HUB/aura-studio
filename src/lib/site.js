export const SITE = {
  name: "Aura Beauty Studio",
  slogan: "La belleza de sentirte tú",
  descriptor: "Nails · Lashes · Makeup",
  city: "Ibarra",
  region: "Imbabura",
  country: "Ecuador",
  countryCode: "EC",
  streetAddress: "Armando Hidrovo y Daniel Reyes (casa esquinera)",
  url: "https://aurabeautystudio.com",
  logo: "/imgs/icon.PNG",
  email: "crdiris2428@gmail.com",
  phone: "+593995368242",
  phoneDisplay: "+593 99 536 8242",
  whatsapp: "593995368242",
  instagram: "https://www.instagram.com/beautystudio_aura1",
  instagramHandle: "@beautystudio_aura1",
  tiktok: "https://www.tiktok.com/@beautystudio_aura1",
  timezone: "America/Guayaquil",
  hoursWeek: "Lun–Sáb 08:00–19:00",
  hoursSunday: "Dom 08:00–16:00",
  cancellationHours: 12,
  lateMinutes: 15,
  legalUpdated: "15 de agosto de 2026",
  appointmentsUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vatENEh_I3ZTpIvgmy8r1Gu8ihP9lVVXcTn9thz6eZTQwqz_3koEOsKlTCNNihjy3wxg1PCb5",
  appointmentsEmbed:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vatENEh_I3ZTpIvgmy8r1Gu8ihP9lVVXcTn9thz6eZTQwqz_3koEOsKlTCNNihjy3wxg1PCb5?gv=true&hl=es",
};

export const FULL_ADDRESS = `${SITE.streetAddress}, ${SITE.city}, ${SITE.region}, ${SITE.country}`;

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE.streetAddress}, ${SITE.city}, ${SITE.region}, Ecuador`
)}&hl=es&z=17&output=embed`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.streetAddress}, ${SITE.city}, ${SITE.region}, Ecuador`
)}`;

export const TITLE_DEFAULT = `${SITE.name} — La belleza de sentirte tú | ${SITE.city}`;

export const DESCRIPTION_DEFAULT = `${SITE.name} en ${SITE.city}: realzamos la belleza de cada mujer con uñas, pestañas, cejas, maquillaje, depilación y masajes. ${SITE.slogan}.`;

/** Origin of this deployment (preview or production). Canonical brand URL stays in SITE.url. */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return SITE.url;
}

