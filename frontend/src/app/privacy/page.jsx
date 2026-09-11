import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Arahant Services Ltd collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "1. Who We Are",
    body: (
      <p>
        Arahant Services Ltd ("Arahant," "we," "us," "our") is an industrial
        automation and engineering company based in Ramarama, Auckland, New
        Zealand. This policy explains how we collect, use and protect personal
        information submitted through arahant.co.nz, in line with the New
        Zealand Privacy Act 2020.
      </p>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        <p>We collect personal information you provide directly to us, specifically:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Full name, email address and phone number, submitted via our "Get a Call Back" popup or the contact enquiry form.</li>
          <li>Any additional details you choose to include, such as a description of your project or preferred contact time.</li>
        </ul>
        <p>
          We do not use tracking cookies or third-party advertising trackers on
          this site. A small amount of information is stored locally in your
          browser (via <code>sessionStorage</code>) purely to remember that
          you&apos;ve already seen the call-back popup during your visit — this
          stays on your device and is never sent to us.
        </p>
      </>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <>
        <p>We use the information you submit solely to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your enquiry or call-back request.</li>
          <li>Contact you about the products or services you&apos;ve asked about.</li>
          <li>Maintain a record of enquiries for our own business purposes.</li>
        </ul>
        <p>We do not sell, rent or trade your personal information to third parties.</p>
      </>
    ),
  },
  {
    heading: "4. How We Store & Protect Your Information",
    body: (
      <p>
        Submissions are stored securely in our database and, where relevant,
        forwarded to our team by email so we can respond promptly. We use
        reasonable technical and organisational measures to protect your
        information from unauthorised access, loss or misuse.
      </p>
    ),
  },
  {
    heading: "5. Your Rights",
    body: (
      <p>
        Under the Privacy Act 2020, you have the right to request access to,
        or correction of, any personal information we hold about you. To make
        a request, or if you have any questions about this policy, contact us
        at{" "}
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
  {
    heading: "6. Changes To This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our practices or for legal reasons. Any changes will be
        posted on this page with an updated revision date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      image="/services/SCADA.jpg"
      sections={sections}
    />
  );
}
