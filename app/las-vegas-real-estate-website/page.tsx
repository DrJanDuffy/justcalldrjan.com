'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function LasVegasRealEstateWebsitePage() {
  const articleSchema = getArticleSchema({
    headline: 'Las Vegas Real Estate Website: Your Gateway to Expert Home Selling Services',
    description: 'Professional Las Vegas real estate website offering expert help for homes that didn\'t sell. Comprehensive resources, market insights, and proven strategies for successful home sales in Las Vegas.',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Las Vegas Real Estate Website</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">Your comprehensive resource for Las Vegas real estate expertise, market insights, and proven strategies for homes that didn't sell.</p>
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
            Comprehensive Las Vegas Real Estate Resources
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            This Las Vegas real estate website provides comprehensive resources for homeowners whose properties didn't sell and those seeking expert guidance in the Las Vegas market. From neighborhood insights to selling strategies, find everything you need for successful real estate transactions in Southern Nevada.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Neighborhood Guides</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive guides for major Las Vegas neighborhoods: Summerlin, Henderson, North Las Vegas, and more. Each guide includes market insights, amenities, schools, and real estate trends specific to each area.
              </p>
              <Link href="/neighborhoods" className="text-purple-600 hover:text-purple-800 font-semibold">Explore Neighborhoods →</Link>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expired Listing Help</h3>
              <p className="text-gray-700 mb-3">
                Specialized resources for homes that didn't sell: diagnostic tools, success stories, pricing strategies, and proven methods for successful relisting in Las Vegas market.
              </p>
              <Link href="/didnt-sell" className="text-pink-600 hover:text-pink-800 font-semibold">Get Help →</Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Market Analysis</h3>
              <p className="text-gray-700 mb-3">
                Free home valuations, market trend analysis, and strategic pricing guidance based on current Las Vegas real estate data and neighborhood-specific insights.
              </p>
              <Link href="/home-valuation" className="text-blue-600 hover:text-blue-800 font-semibold">Get Valuation →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why This Las Vegas Real Estate Website
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            This website focuses specifically on Las Vegas real estate expertise, expired listings, and proven strategies that work in Southern Nevada market. Unlike generic real estate sites, this platform provides Las Vegas-specific insights and solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Market Expertise</h3>
              <p className="text-gray-700 mb-3">
                All content, strategies, and insights are specifically tailored for Las Vegas real estate market. From Summerlin master-planned communities to Henderson value positioning, every resource addresses Las Vegas market dynamics.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Janet Duffy's 30+ years of Las Vegas real estate experience informs all content and strategies. This isn't generic real estate advice - it's Las Vegas-specific expertise based on actual market knowledge and successful transactions.
              </p>
              <p className="text-gray-700">
                Whether you're selling in Summerlin, Henderson, North Las Vegas, or any Las Vegas area, this website provides market insights, neighborhood data, and selling strategies specifically relevant to your location.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expired Listing Specialization</h3>
              <p className="text-gray-700 mb-3">
                This Las Vegas real estate website specializes in helping homes that didn't sell get sold successfully. Comprehensive resources address expired listing challenges: diagnostic tools, pricing strategies, marketing solutions, and success stories.
              </p>
              <p className="text-gray-700 mb-3">
                Unlike generic real estate sites covering all scenarios, this platform focuses specifically on expired listings and homes that didn't sell initially. Specialized content addresses specific challenges Las Vegas homeowners face with expired listings.
              </p>
              <p className="text-gray-700">
                Dr. Jan's proven track record with Las Vegas expired listings informs all content and strategies. This website provides actionable solutions for homeowners whose properties didn't sell, not generic advice that may not apply to expired listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What You'll Find on This Las Vegas Real Estate Website
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Neighborhood Resources</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Detailed guides for Summerlin, Henderson, North Las Vegas, and more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Sub-neighborhood insights (The Trails, Green Valley, Skye Canyon, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Zip code-specific resources for hyperlocal market insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Market trends and pricing data for each Las Vegas area</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Selling Resources</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">•</span>
                  <span>Expired listing diagnostic tools and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">•</span>
                  <span>Success stories from Las Vegas homes that didn't sell initially</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">•</span>
                  <span>Free home valuation and market analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">•</span>
                  <span>Consultation booking and expert guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Explore This Las Vegas Real Estate Website</h2>
          <p className="text-xl mb-8 text-purple-100">Comprehensive resources for Las Vegas homeowners and real estate investors.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/didnt-sell" className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Expired Listing Help</Link>
            <Link href="/neighborhoods" className="bg-purple-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-900 transition-colors">Neighborhood Guides</Link>
            <Link href="/contact" className="bg-pink-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-pink-900 transition-colors">Contact Dr. Jan</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

