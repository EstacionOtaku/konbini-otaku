/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "i.ytimg.com", "loremflickr.com"],
  },
};

module.exports = nextConfig;
