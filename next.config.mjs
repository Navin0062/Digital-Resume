/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
