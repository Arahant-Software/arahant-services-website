import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactCTA from "../components/contact/ContactCTA";

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