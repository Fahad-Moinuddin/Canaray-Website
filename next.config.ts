import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "canaray.com",
        pathname: "/canaray/static/**",
      },
    ],
  },
};

export default nextConfig;
