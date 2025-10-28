'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function LasVegasHomesPage() {
  const articleSchema = getArticleSchema({
    headline: 'Las Vegas Homes: Comprehensive Real Estate Guide',
    description: 'Expert guidance on Las Vegas homes for sale across all neighborhoods. Specialized help for Las Vegas homes that didn\'t sell and comprehensive market insights.',
    datePublished: '2024-07-15',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Las Vegas Homes: Comprehensive Real Estate Guide
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl">
            Expert guidance on Las Vegas homes for sale across all neighborhoods. Specialized help for Las Vegas homes that didn't sell and comprehensive market insights.
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
            Las Vegas Homes Market Overview
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas homes offer diverse options: master-planned communities, new construction, established neighborhoods, luxury properties, and value-focused areas. For Las Vegas homes that didn't sell, understanding market dynamics and neighborhood positioning is essential for successful sales.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diverse Las Vegas Housing Market</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas homes span wide range of options: Summerlin master-planned excellence with golf courses and Red Rock views, Henderson value communities with family-friendly features, North Las Vegas new construction and affordability, Downtown urban living, and luxury estates across the valley.
              </p>
              <p className="text-gray-700 mb-3">
                Each category of Las Vegas homes serves different buyers and requires specific marketing approaches: master-planned benefits, value positioning, new construction advantages, urban lifestyle, or luxury premium pricing.
              </p>
              <p className="text-gray-700">
                For Las Vegas homes that didn't sell, category-specific positioning addresses issues that generic marketing missed. Dr. Jan understands Las Vegas housing diversity and positions homes effectively based on category, neighborhood, and buyer demographics.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Neighborhood-Specific Expertise</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas homes exist in distinct neighborhood markets: Summerlin emphasizes master-planned benefits, Henderson highlights value and family features, North Las Vegas focuses on growth and affordability, Downtown targets urban lifestyle, and luxury areas require premium positioning.
              </p>
              <p className="text-gray-700 mb-3">
                Neighborhood-specific expertise ensures Las Vegas homes are positioned effectively within local market contexts. Understanding comps, competition, buyer demographics, and neighborhood-specific advantages creates successful sales.
              </p>
              <p className="text-gray-700">
                Dr. Jan provides comprehensive Las Vegas neighborhood coverage: understanding Summerlin master-planned benefits, Henderson value positioning, North Las Vegas growth areas, Downtown urban living, and specialized community dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Resources for Las Vegas Homes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Neighborhood Guides</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive guides covering major Las Vegas neighborhoods: market insights, amenities, schools, real estate trends, and neighborhood-specific advantages for Summerlin, Henderson, North Las Vegas, and more.
              </p>
              <Link href="/neighborhoods" className="text-orange-600 hover:text-orange-800 font-semibold">Explore Neighborhoods →</Link>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Home Valuation</h3>
              <p className="text-gray-700 mb-3">
                Professional Las Vegas home valuation service: comprehensive market analysis, comparable sales review, neighborhood-specific pricing, and strategic recommendations based on current Las Vegas market data.
              </p>
              <Link href="/home-valuation" className="text-red-600 hover:text-red-800 font-semibold">Get Free Valuation →</Link>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expired Listing Help</h3>
              <p className="text-gray-700 mb-3">
                Specialized assistance for Las Vegas homes that didn't sell: diagnostic analysis identifying specific issues, strategic relisting plans addressing root causes, and proven methods for successful sales after initial failures.
              </p>
              <Link href="/didnt-sell" className="text-amber-600 hover:text-amber-800 font-semibold">Get Help →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Las Vegas Homes Don't Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas homes for sale face specific challenges that can prevent successful sales: pricing above market comparables, insufficient marketing reach, poor presentation, wrong positioning relative to neighborhood competition, or missing unique value propositions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pricing Problems</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas homes priced above market comparables sit unsold while correctly priced homes sell quickly. Pricing must reflect neighborhood comps, current market conditions, property-specific features, and buyer psychology accurately.
              </p>
              <p className="text-gray-700 mb-3">
                For Las Vegas homes that didn't sell, pricing analysis identifies overpricing issues and recommends strategic adjustments based on current market data, neighborhood comps, and buyer affordability considerations.
              </p>
              <p className="text-gray-700">
                Dr. Jan provides comprehensive Las Vegas pricing analysis using recent sales, active competition, neighborhood-specific data, and strategic pricing recommendations that position homes competitively while protecting seller equity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Marketing & Presentation</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas homes require professional marketing and presentation: quality photography showcasing property advantages, virtual tours enabling buyer engagement, strategic exposure through multiple channels, and positioning that reaches qualified buyers effectively.
              </p>
              <p className="text-gray-700 mb-3">
                For Las Vegas homes that didn't sell, marketing improvements often make critical difference: replacing poor photos with professional images, adding virtual tours, expanding reach through Berkshire Hathaway HomeServices channels, and positioning that highlights unique advantages.
              </p>
              <p className="text-gray-700">
                Dr. Jan invests in professional marketing because she knows Las Vegas homes need superior presentation to compete effectively. Her comprehensive marketing approach reaches buyers through channels previous agents may not have utilized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sell Your Las Vegas Home</h2>
          <p className="text-xl mb-8 text-orange-100">Expert guidance for Las Vegas homes for sale and homes that didn't sell.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-orange-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-900 transition-colors">Get Started</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

