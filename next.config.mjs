/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/politica",
        destination: "/privacidad",
        permanent: true,
      },
      {
        source: "/politica-de-privacidad",
        destination: "/privacidad",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacidad",
        permanent: true,
      },
      {
        source: "/terminos-y-condiciones",
        destination: "/terminos",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terminos",
        permanent: true,
      },
      {
        source: "/politica-de-cookies",
        destination: "/cookies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
