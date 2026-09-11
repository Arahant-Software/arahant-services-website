import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import GetCallbackModal from "./components/GetCallbackModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://arahant.co.nz"),
  title: {
    default: "Arahant Services | Siemens PLC, SCADA & Industrial Automation Specialists",
    template: "%s | Arahant Services",
  },
  description:
    "Arahant Services delivers Siemens PLC programming, SCADA integration, HMI development, machine safety, electrical engineering and industrial process automation across New Zealand, Fiji and Australia.",
  keywords: [
    "Siemens PLC programming",
    "Siemens SCADA integration",
    "Siemens automation New Zealand",
    "Siemens S7 programming NZ",
    "Siemens WinCC",
    "Siemens TIA Portal programming",
    "Siemens PCS7 DCS",
    "industrial automation New Zealand",
    "industrial automation Fiji",
    "industrial automation Australia",
    "PLC programming NZ",
    "SCADA integration",
    "HMI development",
    "machine safety CMSE",
    "electrical engineering NZ",
    "industrial process automation",
    "Arahant Services",
  ],
  authors: [{ name: "Arahant Services Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://arahant.co.nz",
    siteName: "Arahant Services",
    title: "Arahant Services | Siemens & Industrial Automation Specialists",
    description:
      "Siemens PLC, SCADA, HMI and DCS programming, plus machine safety, electrical engineering and industrial process automation across New Zealand, Fiji and Australia.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Arahant Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arahant Services | Siemens & Industrial Automation Specialists",
    description:
      "Siemens PLC, SCADA, HMI and DCS programming, plus machine safety, electrical engineering and industrial process automation across New Zealand, Fiji and Australia.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Arahant Services Ltd",
  url: "https://arahant.co.nz",
  logo: "https://arahant.co.nz/logo.png",
  image: "https://arahant.co.nz/logo.png",
  description:
    "Siemens PLC, SCADA and automation specialists, plus electrical engineering and process installation, serving New Zealand, Fiji and Australia.",
  telephone: "+64-9-600-9070",
  email: "info@arahant.co.nz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "515 Ararimu Road",
    addressLocality: "Ramarama",
    addressRegion: "Auckland",
    postalCode: "2579",
    addressCountry: "NZ",
  },
  areaServed: [
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "Fiji" },
    { "@type": "Country", name: "Australia" },
  ],
  knowsAbout: [
    "Siemens S7 PLC programming",
    "Siemens TIA Portal",
    "Siemens WinCC SCADA",
    "Siemens Sinamics drives",
    "Siemens Sinumerik CNC",
    "Siemens PCS7 DCS",
    "Industrial automation",
    "Machine safety engineering",
    "Electrical engineering",
  ],
  sameAs: ["https://www.linkedin.com/company/arahant-services-ltd/"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollProgress />
        <GetCallbackModal />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
