// Service definitions for real estate services

import { getServiceSchema } from './schema'

export const SERVICES = {
  EXPIRED_LISTING_ASSISTANCE: {
    name: 'Expired Listing Assistance',
    description: 'Comprehensive help for homes that didn\'t sell the first time. Expert pricing analysis, professional marketing, and proven strategies to get your home sold successfully.',
    serviceType: 'Real Estate Brokerage Service',
    areaServed: 'Las Vegas, NV'
  },
  HOME_VALUATION: {
    name: 'Home Valuation Service',
    description: 'Accurate home valuation using 30+ years of Las Vegas market data. Get a professional assessment of your home\'s value to help price it right the first time.',
    serviceType: 'Property Valuation Service',
    areaServed: 'Las Vegas, NV'
  },
  REAL_ESTATE_MARKETING: {
    name: 'Real Estate Marketing Service',
    description: 'Professional marketing services including photography, virtual tours, digital advertising, and institutional marketing power through Berkshire Hathaway HomeServices.',
    serviceType: 'Real Estate Marketing Service',
    areaServed: 'Las Vegas, NV'
  },
  BUYER_REPRESENTATION: {
    name: 'Buyer Representation',
    description: 'Expert representation for home buyers in the Las Vegas market. Access to exclusive listings, market insights, and negotiation expertise.',
    serviceType: 'Real Estate Buyer Agent Service',
    areaServed: 'Las Vegas, NV'
  },
  SELLER_REPRESENTATION: {
    name: 'Seller Representation',
    description: 'Full-service seller representation including pricing strategy, staging recommendations, marketing, and negotiation to get top dollar for your home.',
    serviceType: 'Real Estate Listing Service',
    areaServed: 'Las Vegas, NV'
  },
  PROPERTY_SEARCH_ASSISTANCE: {
    name: 'Property Search Assistance',
    description: 'Personalized property search assistance to help you find your ideal home in Las Vegas. Access to MLS listings and expert market guidance.',
    serviceType: 'Real Estate Search Service',
    areaServed: 'Las Vegas, NV'
  }
}

export function getServiceSchemaForPage(serviceKey: keyof typeof SERVICES) {
  const service = SERVICES[serviceKey]
  return getServiceSchema({
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    areaServed: service.areaServed
  })
}

