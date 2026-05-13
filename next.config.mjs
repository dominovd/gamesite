/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old hplaptop.co content — 301 to homepage
      {
        source: '/5-best-managed-wordpress-hosting-services-compared-2020',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sustainably-chic-eco-friendly-hoodies-for-the-conscious-shopper',
        destination: '/',
        permanent: true,
      },
      {
        source: '/navigating-the-tech-hub-top-mobile-app-development-companies-in-noida',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ashes-cricket-ps4-xbox-one-india-price-release-date-revealed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lenovo-legion-y7000-i7-8750h-gtx-1060-laptop-review',
        destination: '/',
        permanent: true,
      },
      {
        source: '/anxiety-free-living-with-pranic-healing',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
