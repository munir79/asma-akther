import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Asma Akter Restaurant & Food Cart | Authentic Hāser Hāndi & Catering in Agargaon, Dhaka",
  description: "Experience authentic slow-cooked claypot Hāser Hāndi, sizzling street rolls, 100% fresh juices and full reception catering by popular food creator & entrepreneur Asma Akter on Agargaon New Road, Dhaka.",
  keywords: [
    "Asma Akter",
    "Asma Akter Agargaon",
    "Agargaon New Road food",
    "Haser Handi Dhaka",
    "হাঁসের হাঁড়ি",
    "Agargaon street food",
    "duck curry clay pot",
    "reception catering Dhaka",
    "wedding catering Dhaka",
    "Asma Akter Entrepreneur",
    "Borhani",
    "fresh fruit juice Agargaon"
  ],
  authors: [{ name: "Asma Akter" }],
  creator: "Asma Akter",
  metadataBase: new URL("https://asmaakter-foodcart.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asmaakter-foodcart.com",
    title: "Asma Akter Restaurant & Food Cart | Agargaon New Road, Dhaka",
    description: "Authentic slow-cooked Hāser Hāndi, cold pressed fresh juices, and full event catering by creator Asma Akter.",
    siteName: "Asma Akter Restaurant & Food Cart",
    images: [
      {
        url: "/images/asma-pic/asma-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Asma Akter at Agargaon New Road Food Kitchen"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Asma Akter Restaurant & Food Cart - Agargaon New Road",
    description: "Authentic slow-cooked Hāser Hāndi, fresh juices, and street food catering in Dhaka.",
    images: ["/images/asma-pic/asma-hero.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Asma Akter Restaurant & Food Cart",
    "image": "https://asmaakter-foodcart.com/images/asma-pic/asma-hero.jpg",
    "description": "Authentic clay pot Hāser Hāndi, gourmet street fast food, cold-pressed juices and event catering at Agargaon New Road, founded by food creator Asma Akter.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Agargaon New Road",
      "addressLocality": "Dhaka",
      "postalCode": "1207",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.7772,
      "longitude": 90.3807
    },
    "url": "https://asmaakter-foodcart.com",
    "telephone": "+8801700",
    "servesCuisine": ["Bangladeshi", "Street Food", "Clay Pot Curries", "Fresh Juices"],
    "priceRange": "BDT 120 - 750",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "16:00",
        "closes": "23:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2410"
    }
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0c0e14] text-gray-100 flex flex-col antialiased font-roboto selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
