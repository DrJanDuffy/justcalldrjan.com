// Schema.org structured data utilities

export const BASE_URL = 'https://www.calldrduffy.com'

export const DR_JAN_INFO = {
  name: 'Dr. Janet Duffy',
  fullTitle: 'Dr. Janet Duffy | Licensed Real Estate Professional',
  telephone: '+17022221964',
  email: 'HomeSales@CallDrDuffy.com',
  licenseNumber: 'S.0197614',
  brokerage: 'Berkshire Hathaway HomeServices',
  location: 'Las Vegas, NV',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89109',
    addressCountry: 'US'
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: DR_JAN_INFO.name,
    description: "Las Vegas's Trusted Expert for Hard-to-Sell Homes",
    url: BASE_URL,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    address: DR_JAN_INFO.address,
    priceRange: '$$',
    image: `${BASE_URL}/og-image.png`,
    licenseNumber: DR_JAN_INFO.licenseNumber,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ]
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dr. Janet Duffy Real Estate',
    legalName: 'Dr. Janet Duffy',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: DR_JAN_INFO.telephone,
      contactType: 'Sales',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: DR_JAN_INFO.address,
    sameAs: [] // Add social media profiles when available
  }
}

export function getRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: DR_JAN_INFO.name,
    description: "Las Vegas real estate agent specializing in helping homes that didn't sell get sold successfully",
    url: BASE_URL,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    address: DR_JAN_INFO.address,
    licenseNumber: DR_JAN_INFO.licenseNumber,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    jobTitle: 'Licensed Real Estate Professional',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US'
      }
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Expired Listings',
      'Home Selling',
      'Property Valuation',
      'Real Estate Marketing',
      'Homes That Didn\'t Sell'
    ]
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Just Call Dr. Jan',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DR_JAN_INFO.name,
    jobTitle: 'Licensed Real Estate Professional',
    description: `${DR_JAN_INFO.fullTitle}\n${DR_JAN_INFO.brokerage} | ${DR_JAN_INFO.location}\nLicense #${DR_JAN_INFO.licenseNumber}`,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    sameAs: [],
    worksFor: {
      '@type': 'Organization',
      name: DR_JAN_INFO.brokerage
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Expired Listings',
      'Home Selling',
      'Property Valuation'
    ]
  }
}

export function getArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  author = getPersonSchema()
}: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  image?: string
  author?: any
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author,
    publisher: getOrganizationSchema(),
    datePublished,
    dateModified,
    image: image || `${BASE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL
    }
  }
}

export function getServiceSchema({
  name,
  description,
  provider = getLocalBusinessSchema(),
  areaServed = 'Las Vegas, NV',
  serviceType
}: {
  name: string
  description: string
  provider?: any
  areaServed?: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider,
    areaServed: {
      '@type': 'City',
      name: areaServed
    },
    serviceType,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function getReviewSchema({
  author,
  rating,
  reviewBody,
  datePublished
}: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody,
    datePublished
  }
}

export function getAggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating: 5,
    worstRating: 1
  }
}

export function getImageObjectSchema({
  contentUrl,
  description,
  width,
  height
}: {
  contentUrl: string
  description: string
  width?: number
  height?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl,
    description,
    ...(width && height && { width, height }),
    license: `${BASE_URL}/license`
  }
}

