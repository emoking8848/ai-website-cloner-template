import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.joheiewisepro.com",
      },
    ],
  },
};

export default nextConfig;
