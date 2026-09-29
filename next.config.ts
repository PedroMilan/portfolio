import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 90 só para a foto do hero; o resto usa o padrão
    qualities: [75, 90],
  },
};

export default nextConfig;
