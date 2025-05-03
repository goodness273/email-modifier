/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Gemini API in both server and client components
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  
  // Optional: Configure other settings
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig; 