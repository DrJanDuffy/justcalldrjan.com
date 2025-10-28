// Advanced hyperlocal schema markup for 2024-2025 Google SEO strategy

import { DR_JAN_INFO, BASE_URL } from './schema'

/**
 * ServiceArea schema for specific neighborhoods and zip codes
 * Implements Google's latest hyperlocal targeting strategy
 */
export function getServiceAreaSchema(areas: Array<{ name: string; type: 'City' | 'Neighborhood' | 'ZipCode' }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Services',
    provider: {
      '@type': 'RealEstateAgent',
      name: DR_JAN_INFO.name,
      '@id': `${BASE_URL}#realestateagent`
    },
    areaServed: areas.map(area => ({
      '@type': area.type === 'City' ? 'City' : 'Place',
      name: area.name,
      ...(area.type === 'City' && {
        containedIn: {
          '@type': 'State',
          name: 'Nevada'
        }
      })
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: BASE_URL,
      servicePhone: DR_JAN_INFO.telephone
    }
  }
}

/**
 * City schema for hyperlocal neighborhood pages
 * Helps Google understand location-specific content
 */
export function getCitySchema(cityName: string, state: string = 'Nevada') {
  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: cityName,
    containedIn: {
      '@type': 'State',
      name: state,
      containedIn: {
        '@type': 'Country',
        name: 'United States'
      }
    }
  }
}

/**
 * PostalCode schema for zip code pages
 * Implements Google's zip code targeting strategy
 */
export function getPostalCodeSchema(zipCode: string, cityName: string = 'Las Vegas') {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostalCode',
    postalCode: zipCode,
    addressLocality: cityName,
    addressRegion: 'NV',
    addressCountry: 'US'
  }
}

/**
 * Place schema for neighborhood pages
 * Enhances local relevance signals
 */
export function getPlaceSchema(placeName: string, placeType: 'Neighborhood' | 'City' = 'Neighborhood') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: placeName,
    containedIn: {
      '@type': 'City',
      name: 'Las Vegas',
      containedIn: {
        '@type': 'State',
        name: 'Nevada'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'placeType',
      value: placeType
    }
  }
}

/**
 * LocalBusiness with multiple locations schema
 * For businesses serving multiple neighborhoods
 */
export function getMultiLocationBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: DR_JAN_INFO.name,
    image: `${BASE_URL}/og-image.png`,
    '@id': `${BASE_URL}#business`,
    url: BASE_URL,
    telephone: DR_JAN_INFO.telephone,
    priceRange: '$$',
    address: DR_JAN_INFO.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'City', name: 'Summerlin' },
      { '@type': 'City', name: 'North Las Vegas' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Expired Listing Assistance',
            description: 'Expert help for homes that didn\'t sell'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description: 'Professional home value analysis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description: 'Full-service listing and selling support'
          }
        }
      ]
    }
  }
}

