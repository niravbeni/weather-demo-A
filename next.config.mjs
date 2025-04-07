/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['openweathermap.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        pathname: '/img/wn/**',
      },
    ],
  },
  // Explicitly define environment variables for server components
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  }
};

export default nextConfig; 