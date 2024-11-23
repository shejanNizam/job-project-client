/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for debugging
  productionBrowserSourceMaps: true, // Allows debugging production builds with source maps

  images: {
    remotePatterns: [
      {
        protocol: "https", // Allowing HTTPS URLs
        hostname: "images.pexels.com", // Adding the hostname of the remote image
      },
      {
        protocol: "https", // Allowing HTTPS URLs
        hostname: "i.stack.imgur.com", // Adding the hostname of the remote image
      },
      {
        protocol: "https", // Allowing HTTPS URLs
        hostname: "img.freepik.com", // Adding the hostname of the remote image
      },
      {
        protocol: "https", // Allowing HTTPS URLs
        hostname: "www.freepnglogos.com", // Adding the hostname of the remote image
      },
      {
        protocol: "https", // Allowing HTTPS URLs
        hostname: "cdn-icons-png.flaticon.com", // Adding the hostname of the remote image
      },
    ],
  },
};

module.exports = nextConfig;
