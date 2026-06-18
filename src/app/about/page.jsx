import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import CoreCapabilities from "../components/about/CoreCapabilities";
import IndustriesSection from "../components/about/IndustriesSection";
import AboutCTA from "../components/about/AboutCTA";

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