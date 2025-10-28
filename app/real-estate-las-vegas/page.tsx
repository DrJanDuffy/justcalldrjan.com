'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function RealEstateLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Real Estate Las Vegas: Comprehensive Market Guide',
    description: 'Comprehensive guide to Las Vegas real estate market: neighborhoods, buying and selling, market trends, and expert insights. Specialized help for Las Vegas real estate that didn\'t sell.',
    datePublished: '2024-08-05',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-600 to-gray-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Estate Las Vegas: Comprehensive Market Guide
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-3xl">
            Comprehensive guide to Las Vegas real estate market: neighborhoods, buying and selling, market trends, and expert insights. Specialized help for Las Vegas real estate that didn't sell.
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
            Las Vegas Real Estate Market Overview
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas real estate market offers diverse opportunities: master-planned communities, new construction, established neighborhoods, luxury properties, and value-focused areas. Understanding Las Vegas real estate market dynamics helps buyers and sellers make informed decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diverse Market Segments</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas real estate spans wide range of market segments: Summerlin master-planned excellence, Henderson value communities, North Las Vegas new construction, Downtown urban living, luxury estates, and affordable housing options across the valley.
              </p>
              <p className="text-gray-700 mb-3">
                Each Las Vegas real estate segment serves different buyers and requires specific marketing approaches: master-planned benefits, value positioning, new construction advantages, urban lifestyle, luxury premium pricing, or affordability emphasis.
              </p>
              <p className="text-gray-700">
                Dr. Jan understands Las Vegas real estate market diversity and positions properties effectively based on segment, neighborhood, and buyer demographics. Her comprehensive market knowledge ensures successful Las Vegas real estate transactions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Trends and Dynamics</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas real estate market experiences dynamic trends: growth in specific neighborhoods, new construction developments, luxury market movements, and value opportunities. Staying informed about market trends helps buyers and sellers navigate Las Vegas real estate effectively.
              </p>
              <p className="text-gray-700 mb-3">
                Understanding Las Vegas real estate market dynamics requires local expertise: neighborhood-specific trends, development impacts, buyer preferences, and pricing movements that affect successful transactions.
              </p>
              <p className="text-gray-700">
                Dr. Jan provides comprehensive Las Vegas real estate market insights: neighborhood trends, pricing dynamics, buyer demographics, and strategic recommendations based on current market conditions and long-term market knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Real Estate Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Buyer Representation</h3>
              <p className="text-gray-700 mb-3">
                Expert buyer representation for Las Vegas real estate: neighborhood guidance, market analysis, property evaluation, negotiation expertise, and transaction management ensuring successful purchases.
              </p>
              <Link href="/neighborhoods" className="text-slate-600 hover:text-slate-800 font-semibold">Explore Neighborhoods →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Seller Representation</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive seller representation for Las Vegas real estate: pricing strategy, professional marketing, buyer negotiations, expired listing specialization, and proven methods for successful sales.
              </p>
              <Link href="/how-it-works" className="text-gray-600 hover:text-gray-800 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expired Listing Help</h3>
              <p className="text-gray-700 mb-3">
                Specialized assistance for Las Vegas real estate that didn't sell: diagnostic analysis, strategic relisting, comprehensive marketing, and proven approach addressing issues that prevented initial sales.
              </p>
              <Link href="/didnt-sell" className="text-zinc-600 hover:text-zinc-800 font-semibold">Get Help →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Real Estate Neighborhoods
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas real estate spans diverse neighborhoods, each with unique characteristics, amenities, and market dynamics. Understanding neighborhood differences helps buyers and sellers make informed Las Vegas real estate decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Major Las Vegas Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">•</span>
                  <span><strong>Summerlin:</strong> Master-planned communities, golf courses, Red Rock views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">•</span>
                  <span><strong>Henderson:</strong> Value communities, family-friendly neighborhoods, growing amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">•</span>
                  <span><strong>North Las Vegas:</strong> New construction, affordable options, family amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">•</span>
                  <span><strong>Downtown Las Vegas:</strong> Urban living, condos, entertainment district proximity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Neighborhood Expertise</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan provides comprehensive Las Vegas real estate neighborhood expertise: understanding Summerlin master-planned benefits, Henderson value positioning, North Las Vegas growth areas, Downtown urban living, and specialized community dynamics.
              </p>
              <p className="text-gray-700 mb-3">
                This neighborhood expertise ensures Las Vegas real estate properties are positioned effectively within local market contexts. Understanding comps, competition, buyer demographics, and neighborhood-specific advantages creates successful transactions.
              </p>
              <Link href="/neighborhoods" className="text-slate-600 hover:text-slate-800 font-semibold">Explore All Neighborhoods →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Las Vegas Real Estate Expertise</h2>
          <p className="text-xl mb-8 text-slate-100">Comprehensive real estate services for Las Vegas buyers and sellers.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-slate-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-slate-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-900 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

