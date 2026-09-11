import MachineSafety from "../../components/services/MachineSafety";

export const metadata = {
  title: "Machine Safety Engineering | CMSE® Certified NZ",
  description:
    "CMSE® TÜV NORD certified machine safety engineering in New Zealand — risk assessments, safety system design and compliance to ISO 13849 & IEC 62061.",
  alternates: { canonical: "/services/machine-safety" },
};

export default function MachineSafetyPage() {
  return <MachineSafety />;
}
