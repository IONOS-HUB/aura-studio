// PRD §12.1 — Schema.org/BeautySalon. streetAddress/city and geo are
// placeholders until PRD §16 Q11 (full address) is answered by the client.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Aura Beauty Studio",
    slogan: "La belleza de sentirte tú",
    telephone: "+593995368242",
    email: "crdiris2428@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Armando Hidrovo y Daniel Reyes (casa esquinera)",
      addressLocality: "[Ciudad pendiente — PRD §16 Q11]",
      addressCountry: "EC",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/beautystudio_aura1",
      "https://www.tiktok.com/@beautystudio_aura1",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
