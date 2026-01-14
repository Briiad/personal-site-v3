import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion"
    ],
  },
  reactCompiler: true,
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
