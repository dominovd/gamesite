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
      // Legacy URLs surfaced in Vercel Analytics (May 2026)
      {
        source: '/how-do-you-treat-muscles-pain-after-an-accident',
        destination: '/',
        permanent: true,
      },
      {
        source: '/poco-f1-vs-poco-x3-which-one-should-you-buy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/review-of-vivo-y21t-the-best-phone-for-senior-citizens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-hp-laptop-you-should-get-based-on-your-budget',
        destination: '/',
        permanent: true,
      },
      {
        source: '/why-jackfruit-is-nutritious-and-beneficial',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
