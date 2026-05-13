const BASE_URL = 'https://hplaptop.co'

export function buildWebApplication(opts: {
  name: string
  url: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: opts.name,
    url: opts.url,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: opts.description,
    inLanguage: 'en',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: {
      '@type': 'Organization',
      name: 'hplaptop.co',
      url: BASE_URL,
    },
  }
}

export function buildBreadcrumb(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    ],
  }
}

export function buildFAQ(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function buildWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'hplaptop.co Gaming Tools',
    url: BASE_URL,
    description: 'Free gaming tools: username generator, FPS sensitivity calculator, PC requirements checker.',
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/username-generator?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'hplaptop.co',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    sameAs: [],
  }
}

export function buildItemList(
  items: { name: string; url: string; description: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Gaming Tools',
    description: 'Collection of free online gaming tools',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  }
}

/** Render multiple JSON-LD blocks as an array in a single script tag */
export function serializeSchemas(...schemas: object[]) {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
}
