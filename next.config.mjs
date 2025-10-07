/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore all ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // ignore all TS errors
  },
};

module.exports = nextConfig;
