import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/services/automation",
        destination: "/services/industrial-process-automation",
        permanent: true,
      },
      {
        source: "/services/electrical",
        destination: "/services/electrical-engineering",
        permanent: true,
      },
      {
        source: "/services/mechanical",
        destination: "/services/industrial-engineering",
        permanent: true,
      },
      {
        source: "/services/process-installation",
        destination: "/services/industrial-engineering",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
