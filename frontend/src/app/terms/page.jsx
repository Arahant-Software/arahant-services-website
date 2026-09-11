import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Arahant Services Ltd website.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Acceptance Of Terms",
    body: (
      <p>
        By accessing and using arahant.co.nz (the "Site"), you accept and
        agree to be bound by these Terms & Conditions. If you do not agree,
        please do not use this Site.
      </p>
    ),
  },
  {
    heading: "2. About Arahant Services",
    body: (
      <p>
        Arahant Services Ltd is an industrial automation and engineering
        company based in Ramarama, Auckland, New Zealand, providing
        automation, electrical engineering, machine safety, project
        management and industrial parts procurement services across New
        Zealand and the Pacific region.
      </p>
    ),
  },
  {
    heading: "3. Website Content",
    body: (
      <p>
        Content on this Site — including service descriptions, technical
        capabilities and general information — is provided for general
        informational purposes only and does not constitute a formal quote,
        specification or contractual commitment. Specific project scope,
        pricing and deliverables are agreed separately in writing for each
        engagement.
      </p>
    ),
  },
  {
    heading: "4. Enquiries & Call-Back Requests",
    body: (
      <p>
        Submitting an enquiry, call-back request or contact form on this Site
        does not create a contractual relationship between you and Arahant
        Services Ltd. It simply allows our team to respond to your enquiry.
        Any resulting engagement will be governed by a separate agreement or
        purchase order between the parties.
      </p>
    ),
  },
  {
    heading: "5. Intellectual Property",
    body: (
      <p>
        All content on this Site — including text, graphics, logos and
        images — is the property of Arahant Services Ltd or its licensors and
        is protected by applicable intellectual property laws. You may not
        reproduce, distribute or use this content commercially without our
        prior written consent.
      </p>
    ),
  },
  {
    heading: "6. Third-Party Trademarks",
    body: (
      <p>
        References to third-party brands, platforms and technologies
        (including Siemens, Rockwell Automation, Schneider Electric, Omron,
        Mitsubishi and others) are for descriptive purposes only, to indicate
        the platforms we work with. These are trademarks of their respective
        owners, and their mention does not imply any endorsement of Arahant
        Services by those companies.
      </p>
    ),
  },
  {
    heading: "7. Limitation Of Liability",
    body: (
      <p>
        While we take reasonable care to keep information on this Site
        accurate and up to date, Arahant Services Ltd makes no warranties
        about the completeness, reliability or accuracy of this information.
        To the extent permitted by law, we are not liable for any loss or
        damage arising from your use of this Site.
      </p>
    ),
  },
  {
    heading: "8. Governing Law",
    body: (
      <p>
        These Terms & Conditions are governed by the laws of New Zealand, and
        any disputes arising from your use of this Site will be subject to
        the exclusive jurisdiction of the courts of New Zealand.
      </p>
    ),
  },
  {
    heading: "9. Contact Us",
    body: (
      <p>
        Questions about these Terms & Conditions can be directed to{" "}
        <a href="mailto:info@arahant.co.nz" className="font-semibold text-orange-600 hover:underline">
          info@arahant.co.nz
        </a>{" "}
        or{" "}
        <a href="tel:+6496009070" className="font-semibold text-orange-600 hover:underline">
          +64 9 600 9070
        </a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="September 2026"
      image="/services/DCS.jpg"
      sections={sections}
    />
  );
}
nb 