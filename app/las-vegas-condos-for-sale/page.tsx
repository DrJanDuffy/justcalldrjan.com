'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function LasVegasCondosForSalePage() {
  const articleSchema = getArticleSchema({
    headline: 'Las Vegas Condos for Sale: Expert Guide to Condominium Living',
    description: 'Expert guidance on Las Vegas condos for sale in Downtown, high-rise buildings, and luxury communities. Specialized help for condos that didn\'t sell.',
    datePublished: '2024-07-10',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Las Vegas Condos for Sale: Expert Guide to Condominium Living
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl">
            Expert guidance on Las Vegas condos for sale in Downtown, high-rise buildings, and luxury communities. Specialized help for condos that didn't sell.
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
            Las Vegas Condos: Diverse Options for Different Lifestyles
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas condos for sale offer diverse options: high-rise buildings with Strip views, Downtown urban living, luxury community condos, and affordable complexes. Each category serves different buyers and requires specific marketing approaches.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">High-Rise Strip Condos</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas high-rise condos offer Strip views, resort amenities, and urban lifestyle. Buildings like Palms Place, Turnberry Place, and luxury high-rises provide concierge services, pools, spas, and premium Las Vegas Strip proximity.
              </p>
              <p className="text-gray-700 mb-3">
                High-rise Las Vegas condos for sale require specialized positioning: emphasizing views, resort amenities, Strip access, and luxury lifestyle. These condos appeal to buyers seeking urban living with premium amenities.
              </p>
              <p className="text-gray-700">
                Dr. Jan understands high-rise Las Vegas condo market dynamics: view premium pricing, resort amenities value, and positioning that attracts buyers seeking luxury urban living with Strip access.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Downtown Las Vegas Condos</h3>
              <p className="text-gray-700 mb-3">
                Downtown Las Vegas condos offer urban living near Arts District, Fremont Street, and growing entertainment scene. Historic district condos, new developments, and converted buildings provide diverse Downtown options.
              </p>
              <p className="text-gray-700 mb-3">
                Downtown Las Vegas condos for sale require urban positioning: emphasizing Arts District proximity, Fremont Street access, entertainment scene, walkability, and Downtown revitalization benefits.
              </p>
              <p className="text-gray-700">
                Dr. Jan specializes in Downtown Las Vegas real estate, understanding urban lifestyle buyers, Arts District positioning, and Downtown condo market dynamics that differ from suburban single-family homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Las Vegas Condos Don't Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas condos for sale face specific challenges: limited buyer pool, HOA considerations, view positioning, resort amenities emphasis, or wrong pricing relative to condo market comparables.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Pricing Issues</h3>
              <p className="text-gray-700">
                Las Vegas condos priced above market comparables sit unsold. Condo pricing requires understanding building-specific comps, view premiums, floor level value, and HOA fee impact on buyer affordability.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Presentation Problems</h3>
              <p className="text-gray-700">
                Poor photography, lack of virtual tours, or missing resort amenity highlights prevent Las Vegas condo sales. High-rise condos need view photography and resort amenity documentation to attract buyers.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Marketing Limitations</h3>
              <p className="text-gray-700">
                Insufficient marketing reach to Las Vegas condo buyers - second-home buyers, investors, urban lifestyle seekers - prevents sales. Condos require targeted marketing beyond general real estate channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Condo Market Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Condo-Specific Knowledge</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan understands Las Vegas condo market dynamics: high-rise view premiums, resort amenities value, HOA fee impact, building-specific comps, and condo buyer demographics that differ from single-family home buyers.
              </p>
              <p className="text-gray-700 mb-3">
                This specialized knowledge ensures Las Vegas condos for sale are positioned effectively: emphasizing views, resort amenities, Strip proximity, or Downtown urban benefits based on specific building and location advantages.
              </p>
              <p className="text-gray-700">
                For condos that didn't sell, this expertise identifies condo-specific issues: view positioning, resort amenity emphasis, HOA disclosure, or pricing relative to building comps rather than general market comparables.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Targeted Condo Marketing</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan markets Las Vegas condos for sale to specific buyer pools: second-home buyers, investors, urban lifestyle seekers, and luxury buyers. Targeted marketing reaches qualified condo buyers effectively.
              </p>
              <p className="text-gray-700 mb-3">
                Her condo marketing emphasizes unique advantages: high-rise views, resort amenities, Downtown proximity, or luxury community benefits. This targeted approach attracts buyers seeking specific condo lifestyle features.
              </p>
              <p className="text-gray-700">
                Berkshire Hathaway HomeServices provides luxury condo marketing channels: Wall Street Journal Real Estate, NYT Real Estate sections, luxury portals, and international exposure that reaches second-home and luxury buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sell Your Las Vegas Condo</h2>
          <p className="text-xl mb-8 text-cyan-100">Expert guidance for Las Vegas condos for sale and condos that didn't sell.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-cyan-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-cyan-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-cyan-900 transition-colors">Condo Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

