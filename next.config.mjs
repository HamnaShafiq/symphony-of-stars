/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export for GitHub Pages
  assetPrefix: '/symphony-of-stars', // Add your repo name here
  images: {
    unoptimized: true // Disable image optimization for static export
  }
};

export default nextConfig;
