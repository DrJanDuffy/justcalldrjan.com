'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function HousesForSaleLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Houses for Sale Las Vegas: Expert Guidance for Buyers and Sellers',
    description: 'Expert guidance for houses for sale in Las Vegas. Specialized help for homes that didn\'t sell and comprehensive resources for Las Vegas real estate buyers and sellers.',
    datePublished: '2024-06-25',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Houses for Sale Las Vegas: Expert Guidance for Buyers and Sellers
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl">
            Expert guidance for houses for sale in Las Vegas. Specialized help for homes that didn't sell and comprehensive resources for Las Vegas real estate buyers and sellers.
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
            Las Vegas offers diverse housing options: master-planned communities in Summerlin, value-focused neighborhoods in Henderson, new construction in North Las Vegas, urban condos Downtown, and luxury properties across the valley. For houses that didn't sell, understanding market dynamics is essential.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diverse Las Vegas Housing Options</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas houses for sale span wide range: single-family homes in master-planned communities, new construction developments, established neighborhoods, luxury estates, townhomes, and high-rise condominiums. Each category serves different buyers and requires specific marketing approaches.
              </p>
              <p className="text-gray-700 mb-3">
                For houses that didn't sell, understanding category positioning matters: master-planned community benefits, new construction advantages, established neighborhood value, or luxury premium positioning. Generic marketing fails - category-specific strategies succeed.
              </p>
              <p className="text-gray-700">
                Dr. Jan understands Las Vegas housing market diversity and positions houses for sale effectively based on category, neighborhood, and buyer demographics. Her specialized approach helps houses that didn't sell achieve successful sales through strategic positioning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Neighborhood-Specific Markets</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas houses for sale exist in distinct neighborhood markets: Summerlin master-planned excellence, Henderson value positioning, North Las Vegas growth areas, Downtown urban living, and specialized communities each with unique buyer pools and pricing dynamics.
              </p>
              <p className="text-gray-700 mb-3">
                Each neighborhood requires specific marketing approaches: Summerlin emphasizes master-planned benefits, Henderson highlights value and family-friendly features, North Las Vegas focuses on new construction and growth, Downtown targets urban lifestyle buyers.
              </p>
              <p className="text-gray-700">
                Dr. Jan's neighborhood expertise ensures houses for sale are positioned effectively within specific market contexts. For houses that didn't sell, neighborhood-specific positioning addresses issues that generic marketing missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Resources for Las Vegas Houses for Sale
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Neighborhood Guides</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive guides for major Las Vegas neighborhoods: market insights, amenities, schools, and real estate trends for Summerlin, Henderson, North Las Vegas, and more.
              </p>
              <Link href="/neighborhoods" className="text-emerald-600 hover:text-emerald-800 font-semibold">Explore Neighborhoods →</Link>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Home Valuation</h3>
              <p className="text-gray-700 mb-3">
                Free professional home valuation for Las Vegas houses: market analysis, comparable sales review, and strategic pricing recommendations based on current market data.
              </p>
              <Link href="/home-valuation" className="text-teal-600 hover:text-teal-800 font-semibold">Get Free Valuation →</Link>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expired Listing Help</h3>
              <p className="text-gray-700 mb-3">
                Specialized help for Las Vegas houses that didn't sell: diagnostic analysis, strategic relisting plans, and proven methods for successful sales after initial failures.
              </p>
              <Link href="/didnt-sell" className="text-green-600 hover:text-green-800 font-semibold">Get Help →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Houses Don't Sell in Las Vegas
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas houses for sale face specific challenges that can prevent successful sales: pricing above market, insufficient marketing reach, poor presentation, or wrong positioning relative to neighborhood competition.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pricing Issues</h3>
              <p className="text-gray-700 mb-3">
                Houses priced above Las Vegas market comparables sit unsold while correctly priced homes sell quickly. Pricing must reflect neighborhood comps, current market conditions, and property-specific features accurately.
              </p>
              <p className="text-gray-700 mb-3">
                For houses that didn't sell, pricing analysis identifies overpricing issues and recommends strategic adjustments based on current Las Vegas market data. Accurate pricing attracts buyers and enables competitive offers.
              </p>
              <p className="text-gray-700">
                Dr. Jan provides comprehensive pricing analysis using recent Las Vegas sales, active competition, and neighborhood-specific data. Her pricing strategy positions houses for sale competitively while protecting seller equity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Marketing & Presentation</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas houses for sale require professional marketing and presentation: quality photography, virtual tours, strategic exposure through multiple channels, and positioning that reaches qualified buyers effectively.
              </p>
              <p className="text-gray-700 mb-3">
                For houses that didn't sell, marketing improvements often make critical difference: replacing poor photos, adding virtual tours, expanding reach through Berkshire Hathaway HomeServices channels, and positioning that highlights property advantages.
              </p>
              <p className="text-gray-700">
                Dr. Jan invests in professional marketing because she knows Las Vegas houses for sale need superior presentation to compete effectively. Her marketing approach reaches buyers through channels previous agents may not have utilized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sell Your Las Vegas House</h2>
          <p className="text-xl mb-8 text-emerald-100">Expert guidance for Las Vegas houses for sale and homes that didn't sell.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-emerald-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-emerald-900 transition-colors">Get Started</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

