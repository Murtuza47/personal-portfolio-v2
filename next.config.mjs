/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['personal-portfolio-v2-flax.vercel.app'],
    unoptimized: true, // This can help if you're having issues with image optimization
  },
};

export default nextConfig;