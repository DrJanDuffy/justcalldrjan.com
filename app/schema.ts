export default function schema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Janet Duffy',
    description: 'Las Vegas real estate agent specializing in helping homes that didn\'t sell get sold successfully',
    url: 'https://www.calldrduffy.com',
    telephone: '+17022221964',
    email: 'HomeSales@CallDrDuffy.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    sameAs: [
      // Add social media profiles when available
    ],
    jobTitle: 'Real Estate Agent',
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy Real Estate'
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Expired Listings',
      'Home Selling',
      'Property Valuation',
      'Real Estate Marketing'
    ]
  }
}

