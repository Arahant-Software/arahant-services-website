import SiemensAutomation from "../../components/services/SiemensAutomation";

export const metadata = {
  title: "Siemens PLC, SCADA & Automation Specialists | NZ, Fiji & Australia",
  description:
    "Siemens S7 PLC programming, TIA Portal, WinCC SCADA, Sinamics drives, Sinumerik CNC and PCS7 DCS engineering across New Zealand, Fiji and Australia.",
  alternates: { canonical: "/services/siemens-automation" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Siemens PLC, SCADA and automation engineering",
  provider: {
    "@type": "ProfessionalService",
    name: "Arahant Services Ltd",
    url: "https://arahant.co.nz",
  },
  areaServed: [
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "Fiji" },
    { "@type": "Country", name: "Australia" },
  ],
  description:
    "Siemens S7 PLC programming, TIA Portal, WinCC SCADA, Sinamics drives, Sinumerik CNC and PCS7 DCS engineering, commissioning and support.",
};

export default function SiemensAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SiemensAutomation />
    </>
  );
}
