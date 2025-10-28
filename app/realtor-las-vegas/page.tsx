'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function RealtorLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Realtor Las Vegas: Expert Real Estate Agent for Homes That Didn\'t Sell',
    description: 'Las Vegas realtor specializing in expired listings and homes that didn\'t sell. Licensed real estate professional with Berkshire Hathaway HomeServices. Expert guidance for successful Las Vegas home sales.',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Realtor Las Vegas: Expert Real Estate Agent for Homes That Didn't Sell
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Las Vegas realtor specializing in expired listings and homes that didn't sell. Licensed real estate professional with Berkshire Hathaway HomeServices. Expert guidance for successful Las Vegas home sales.
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
            Why Choose Dr. Janet Duffy as Your Las Vegas Realtor
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            As a licensed Las Vegas realtor with Berkshire Hathaway HomeServices, Dr. Janet Duffy brings specialized expertise in expired listings, comprehensive Las Vegas market knowledge, and proven strategies for homes that didn't sell initially.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expired Listing Specialist</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan specializes specifically in helping Las Vegas homes that didn't sell get sold successfully. Her diagnostic approach identifies what prevented initial sale and creates targeted solutions addressing specific issues rather than generic marketing.
              </p>
              <p className="text-gray-700 mb-3">
                Unlike general Las Vegas realtors handling all types of listings, Dr. Jan focuses on expired listings where systematic diagnosis and strategic fixes create results. Her track record: 32-day average from relisting to sale for homes that didn't sell initially.
              </p>
              <p className="text-gray-700">
                Her Las Vegas realtor expertise combines expired listing specialization with comprehensive market knowledge: understanding neighborhoods, pricing dynamics, buyer psychology, and strategic marketing that reaches qualified Las Vegas buyers effectively.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Berkshire Hathaway HomeServices Advantage</h3>
              <p className="text-gray-700 mb-3">
                As Las Vegas realtor with Berkshire Hathaway HomeServices, Dr. Jan provides institutional marketing power unavailable to independent agents: access to Wall Street Journal Real Estate, NYT Real Estate sections, luxury portals, and national exposure.
              </p>
              <p className="text-gray-700 mb-3">
                This institutional advantage matters for expired listings needing superior marketing reach. BHHS platform provides comprehensive exposure through channels regional firms cannot access, positioning properties to qualified buyers effectively.
              </p>
              <p className="text-gray-700">
                Her Las Vegas realtor services combine BHHS institutional resources with specialized expired listing expertise. This combination creates competitive advantage: premium marketing channels plus diagnostic approach that addresses specific issues preventing sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Realtor Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expired Listing Analysis</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive diagnostic analysis of why Las Vegas homes didn't sell: pricing review, marketing audit, presentation evaluation, and competitive positioning assessment.
              </p>
              <Link href="/didnt-sell" className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Home Valuation</h3>
              <p className="text-gray-700 mb-3">
                Professional Las Vegas home valuation using current market data, comparable sales, and strategic pricing recommendations based on neighborhood and property specifics.
              </p>
              <Link href="/home-valuation" className="text-indigo-600 hover:text-indigo-800 font-semibold">Get Valuation →</Link>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Seller Representation</h3>
              <p className="text-gray-700 mb-3">
                Full-service Las Vegas realtor representation: pricing strategy, professional marketing, buyer negotiations, transaction management, and proven approach for successful sales.
              </p>
              <Link href="/how-it-works" className="text-purple-600 hover:text-purple-800 font-semibold">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Neighborhood Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            As Las Vegas realtor serving all major areas, Dr. Jan provides neighborhood-specific expertise: Summerlin master-planned benefits, Henderson value positioning, North Las Vegas growth areas, and Downtown Las Vegas urban living.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Las Vegas Coverage</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span><strong>Summerlin:</strong> Master-planned communities, golf courses, Red Rock views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span><strong>Henderson:</strong> Value communities, family-friendly neighborhoods, growing amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span><strong>North Las Vegas:</strong> New construction, affordable options, family amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span><strong>Downtown Las Vegas:</strong> Urban living, condos, entertainment district proximity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Zip Code Specialization</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan provides Las Vegas realtor services across major zip codes: 89117 (Summerlin), 89074 (Green Valley), 89131 (North Las Vegas), 89103 (Summerlin West), and more. Her hyperlocal expertise ensures accurate market understanding and effective positioning.
              </p>
              <p className="text-gray-700 mb-3">
                Zip code-specific knowledge matters for expired listings: understanding comps, competition, buyer demographics, and pricing dynamics unique to each area ensures strategic relisting that addresses previous failures.
              </p>
              <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Neighborhoods →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Work with Expert Las Vegas Realtor</h2>
          <p className="text-xl mb-8 text-blue-100">Licensed real estate professional specializing in homes that didn't sell.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

