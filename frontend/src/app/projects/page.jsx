import ProjectsOverview from "../components/ProjectsOverview";

export const metadata = {
  title: "Projects",
  description:
    "Greenfield automation installs, brownfield upgrades, machine safety retrofits and procurement projects delivered across FMCG, manufacturing and infrastructure in New Zealand and the Pacific.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsOverview />;
}
