import ProjectManagement from "../../components/services/ProjectManagement";

export const metadata = {
  title: "Industrial Project Management & Design NZ",
  description:
    "End-to-end industrial project management in New Zealand — 3D modelling, FAT/SAT, commissioning and lifecycle support for automation and process projects.",
  alternates: { canonical: "/services/project-management" },
};

export default function ProjectManagementPage() {
  return <ProjectManagement />;
}
