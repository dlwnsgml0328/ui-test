/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'd28btnt2z9x7nc.cloudfront.net',
      'firebasestorage.googleapis.com',
      'www.gravatar.com',
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
