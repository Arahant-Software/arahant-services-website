import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import CoreCapabilities from "../components/about/CoreCapabilities";
import IndustriesSection from "../components/about/IndustriesSection";
import EngineeringLifecycle from "../components/about/EngineeringLifecycle";
import WhyChooseArahant from "../components/about/WhyChooseArahant";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <WhatMakesUsDifferent />
      <CoreCapabilities />
      <IndustriesSection />
      <EngineeringLifecycle />
      <WhyChooseArahant />
      <AboutCTA />
    </>
  );
}