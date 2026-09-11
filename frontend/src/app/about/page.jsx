import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import CoreCapabilities from "../components/about/CoreCapabilities";
import IndustriesSection from "../components/about/IndustriesSection";
import AboutCTA from "../components/about/AboutCTA";

export const metadata = {
  title: "About Us",
  description:
    "Arahant Services Ltd is a New Zealand-based Siemens automation and engineering firm delivering end-to-end control system solutions across New Zealand, Fiji and Australia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <WhatMakesUsDifferent />
      <CoreCapabilities />
      <IndustriesSection />
      <AboutCTA />
    </>
  );
}