import ElectricalEngineering from "../../components/services/ElectricalEngineering";

export const metadata = {
  title: "Electrical Engineering, Installation & Maintenance NZ",
  description:
    "Industrial electrical engineering in New Zealand — control panel design and build, site installation, fault diagnostics and maintenance to AS/NZS 3000.",
  alternates: { canonical: "/services/electrical-engineering" },
};

export default function ElectricalEngineeringPage() {
  return <ElectricalEngineering />;
}
