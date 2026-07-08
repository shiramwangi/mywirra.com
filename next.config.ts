/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com', // (If you are still using the preloader image)
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com', // <--- The new Webflow CDN for your hero assets
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;