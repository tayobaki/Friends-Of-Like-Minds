import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leapafrica.org",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
    ],
  },
};

export default nextConfig;
