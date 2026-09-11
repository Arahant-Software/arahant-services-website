const BASE_URL = "https://arahant.co.nz";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/siemens-automation", priority: 1.0, changeFrequency: "monthly" },
  { path: "/services/industrial-process-automation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/machine-safety", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/electrical-engineering", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/industrial-engineering", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/project-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/procurement", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
