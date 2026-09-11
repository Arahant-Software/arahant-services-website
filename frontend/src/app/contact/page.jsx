import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactCTA from "../components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arahant Services for industrial automation, machine safety, electrical engineering or OEM parts procurement. Based in Ramarama, Auckland, serving NZ & the Pacific.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactCTA />
    </>
  );
}