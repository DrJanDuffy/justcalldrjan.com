'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function LasVegasLuxuryHomesPage() {
  const articleSchema = getArticleSchema({
    headline: 'Las Vegas Luxury Homes for Sale: Expert Guidance for High-End Properties',
    description: 'Specialized expertise in Las Vegas luxury homes for sale. Expert guidance for buying and selling luxury properties in Summerlin, Henderson, and Las Vegas\'s most prestigious communities.',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Las Vegas Luxury Homes for Sale: Expert Guidance for High-End Properties
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl">
            Specialized expertise in Las Vegas luxury homes for sale. Expert guidance for buying and selling luxury properties in Summerlin, Henderson, and Las Vegas's most prestigious communities.
          </p>
        </div>
      </section>

      {/* Author Badge */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AuthorBadge />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Understanding Las Vegas Luxury Real Estate Market
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas luxury homes represent some of the most desirable properties in Southern Nevada: master-planned communities like Summerlin, exclusive neighborhoods like The Summit Club and Ascaya, custom estates, and high-rise condominiums with Strip views. For luxury homeowners whose properties didn't sell, specialized expertise makes the difference.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Luxury Communities</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas luxury homes span prestigious communities: Summerlin's master-planned excellence with golf courses and Red Rock views, exclusive Henderson enclaves like MacDonald Highlands and Ascaya, high-rise condominiums with Strip panoramas, and custom estates in gated communities.
              </p>
              <p className="text-gray-700 mb-3">
                Each luxury community offers distinct advantages: master-planned amenities, gated security, golf course access, mountain views, or Strip proximity. Luxury home buyers and sellers need agents who understand these community distinctions and can position properties effectively.
              </p>
              <p className="text-gray-700">
                Dr. Jan specializes in Las Vegas luxury real estate, understanding Summerlin master-planned benefits, Henderson exclusive communities, and high-rise luxury positioning. Her expertise helps luxury homeowners whose properties didn't sell achieve successful sales through strategic positioning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Luxury Homes Don't Sell</h3>
              <p className="text-gray-700 mb-3">
                Luxury homes in Las Vegas face unique challenges: smaller buyer pool, specific positioning requirements, premium pricing expectations, and marketing channels that reach qualified luxury buyers. Generic agents don't understand luxury market dynamics.
              </p>
              <p className="text-gray-700 mb-3">
                Common issues with Las Vegas luxury homes that didn't sell: pricing above luxury market comparables, insufficient marketing reach to qualified buyers, poor positioning relative to luxury competition, or missing unique value propositions that define luxury properties.
              </p>
              <p className="text-gray-700">
                Dr. Jan's luxury real estate approach addresses these specific challenges: comprehensive luxury market analysis, strategic premium positioning, Berkshire Hathaway HomeServices luxury marketing channels, and expertise in Las Vegas luxury communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Luxury Real Estate Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Luxury home selling requires specialized expertise: understanding luxury buyer psychology, premium market positioning, exclusive marketing channels, and strategic pricing that reflects luxury property value without overpricing that prevents sales.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Luxury Market Analysis</h3>
              <p className="text-gray-700">
                Comprehensive analysis of Las Vegas luxury market: recent luxury sales, active luxury competition, luxury buyer trends, and strategic pricing recommendations specific to luxury properties rather than general market data.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Positioning</h3>
              <p className="text-gray-700">
                Strategic positioning emphasizing luxury property advantages: exclusive location, premium amenities, custom features, views, or architectural significance. Luxury homes require positioning that reflects premium value.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Luxury Marketing Channels</h3>
              <p className="text-gray-700">
                Berkshire Hathaway HomeServices luxury marketing: Wall Street Journal Real Estate, NYT Real Estate sections, luxury portals, international exposure, and premium channels that reach qualified luxury buyers effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Luxury Communities Served
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Summerlin Luxury Properties</h3>
              <p className="text-gray-700 mb-3">
                Summerlin offers luxury master-planned living with golf courses, Red Rock Canyon views, top-rated schools, and premium amenities. Luxury Summerlin homes command premium prices for master-planned benefits and established community quality.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan specializes in Summerlin luxury real estate, understanding master-planned positioning, golf course premiums, mountain view value, and upscale community marketing that reaches qualified Summerlin luxury buyers.
              </p>
              <Link href="/neighborhoods/summerlin" className="text-amber-600 hover:text-amber-800 font-semibold">Learn More About Summerlin →</Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Henderson Luxury Enclaves</h3>
              <p className="text-gray-700 mb-3">
                Henderson features exclusive luxury communities: MacDonald Highlands, Ascaya, Seven Hills, and Lake Las Vegas waterfront properties. These gated communities offer privacy, exclusivity, and custom luxury homes.
              </p>
              <p className="text-gray-700 mb-3">
                Henderson luxury homes require specialized positioning emphasizing exclusivity, gated community benefits, custom architecture, and premium amenities. Dr. Jan understands Henderson luxury market dynamics and buyer expectations.
              </p>
              <Link href="/neighborhoods/henderson" className="text-amber-600 hover:text-amber-800 font-semibold">Learn More About Henderson →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Luxury Home Selling Expertise</h2>
          <p className="text-xl mb-8 text-amber-100">Specialized help for Las Vegas luxury homes that didn't sell. Premium positioning and luxury marketing channels.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-amber-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-amber-900 transition-colors">Luxury Home Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

