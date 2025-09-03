import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "straightforward-background-415207.framer.app" },
      { protocol: "https", hostname: "api.qrserver.com" },
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
  webpack(config) {
    config.module.rules.push({
      test: /framer-motion/,
      sideEffects: false,
    });
    return config;
  },
};

export default nextConfig;