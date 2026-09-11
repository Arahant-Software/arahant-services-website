import ServicesOverview from "../components/services/ServicesOverview";

export const metadata = {
  title: "Industrial Automation & Engineering Services",
  description:
    "Industrial automation, machine safety, electrical engineering, project management and OEM parts procurement — Arahant's full range of engineering services for New Zealand and the Pacific.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
