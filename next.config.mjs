// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  basePath: '/symphony-of-stars', // Repo name for GitHub Pages
  assetPrefix: '/symphony-of-stars/', // Static assets prefix
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  output: 'export', // Export static files
};

export default nextConfig;
