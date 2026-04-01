export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Marshalls Tailoring",
    description:
      "Bespoke suits, barongs, and uniforms for men and women in Lipa City. Formal coats and suits available for rent.",
    url: "https://marshallstailoring.com",
    telephone: ["+639452731100", "+639397401011"],
    email: "marshalls.tailoring@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Bldg. 1, Lipa City Public Market",
      addressLocality: "Lipa City",
      addressRegion: "Batangas",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.9411,
      longitude: 121.1636,
    },
    sameAs: ["https://www.facebook.com/profile.php?id=100077176364725"],
    hasMap:
      "https://www.google.com/maps/search/Lipa+City+Public+Market,+Lipa+City,+Batangas",
    priceRange: "₱₱",
    paymentAccepted: "Cash",
    currenciesAccepted: "PHP",
    areaServed: {
      "@type": "City",
      name: "Lipa City",
    },
    servesCuisine: undefined,
    openingHoursSpecification: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
