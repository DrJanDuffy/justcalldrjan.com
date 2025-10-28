'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function LasVegasMansionsPage() {
  const articleSchema = getArticleSchema({
    headline: 'Las Vegas Mansions: Expert Guide to Luxury Estate Properties',
    description: 'Expert guidance on Las Vegas mansions and luxury estate properties. Specialized expertise in high-end luxury homes in Summerlin, Henderson, and Las Vegas\'s most prestigious communities.',
    datePublished: '2024-07-25',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-800 to-yellow-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Las Vegas Mansions: Expert Guide to Luxury Estate Properties
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl">
            Expert guidance on Las Vegas mansions and luxury estate properties. Specialized expertise in high-end luxury homes in Summerlin, Henderson, and Las Vegas's most prestigious communities.
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
            Las Vegas Mansion Market Overview
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas mansions represent the pinnacle of luxury real estate in Southern Nevada: custom-built estates, gated community luxury homes, properties with resort-style amenities, and exclusive enclaves with privacy and prestige. For Las Vegas mansions that didn't sell, specialized luxury expertise makes the critical difference.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Mansion Communities</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas mansions are located in exclusive communities: The Summit Club with championship golf, MacDonald Highlands with mountain views, Ascaya with modern architecture, Seven Hills with custom estates, and luxury Summerlin developments with Red Rock Canyon proximity.
              </p>
              <p className="text-gray-700 mb-3">
                Each luxury community offers distinct advantages for Las Vegas mansions: gated security, resort-style amenities, championship golf, mountain or Strip views, custom architecture, and exclusive privacy. Mansion buyers seek these premium community benefits.
              </p>
              <p className="text-gray-700">
                Dr. Jan specializes in Las Vegas mansion market, understanding luxury community positioning, custom estate value propositions, and strategic marketing that reaches qualified luxury buyers seeking exclusive Las Vegas properties.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Las Vegas Mansions Don't Sell</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas mansions face unique challenges: extremely small buyer pool, specific positioning requirements, premium pricing expectations exceeding standard luxury markets, and marketing channels that reach qualified ultra-luxury buyers globally.
              </p>
              <p className="text-gray-700 mb-3">
                Common issues with Las Vegas mansions that didn't sell: pricing above luxury mansion comparables, insufficient marketing reach to qualified buyers worldwide, poor positioning relative to luxury competition, or missing unique value propositions that define ultra-luxury properties.
              </p>
              <p className="text-gray-700">
                Dr. Jan's Las Vegas mansion approach addresses these specific challenges: comprehensive luxury mansion market analysis, strategic ultra-premium positioning, Berkshire Hathaway HomeServices luxury marketing channels reaching global buyers, and expertise in Las Vegas luxury mansion communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Mansion Positioning and Marketing
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas mansions require specialized positioning and marketing approaches: emphasizing exclusive community benefits, custom architectural features, resort-style amenities, views, privacy, and luxury lifestyle features that define ultra-premium properties.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ultra-Luxury Positioning</h3>
              <p className="text-gray-700">
                Strategic positioning emphasizing Las Vegas mansion advantages: exclusive gated community, championship golf, mountain or Strip views, custom architecture, resort-style amenities, and privacy that defines ultra-luxury living.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Global Marketing Reach</h3>
              <p className="text-gray-700">
                Berkshire Hathaway HomeServices luxury marketing reaches qualified Las Vegas mansion buyers globally: Wall Street Journal Real Estate, NYT Real Estate sections, luxury portals, international exposure, and premium channels accessing ultra-luxury buyer market.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Presentation</h3>
              <p className="text-gray-700">
                Professional photography, virtual tours, drone footage, and luxury marketing materials showcasing Las Vegas mansion features effectively. Ultra-luxury properties require presentation quality matching property sophistication and buyer expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas Mansion Communities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Summit Club & MacDonald Highlands</h3>
              <p className="text-gray-700 mb-3">
                The Summit Club offers championship golf course and exclusive gated community with custom Las Vegas mansions. MacDonald Highlands provides mountain views, custom estates, and Henderson luxury positioning. Both communities represent pinnacle of Las Vegas luxury mansion living.
              </p>
              <p className="text-gray-700 mb-3">
                Las Vegas mansions in these communities command premium prices for exclusive positioning, gated security, championship golf access, mountain views, and custom architectural features. These communities attract ultra-luxury buyers seeking exclusive Las Vegas lifestyle.
              </p>
              <p className="text-gray-700">
                Dr. Jan understands Las Vegas mansion positioning in these exclusive communities: emphasizing championship golf benefits, mountain view premiums, gated community privacy, and custom estate value that attracts ultra-luxury buyers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ascaya & Seven Hills</h3>
              <p className="text-gray-700 mb-3">
                Ascaya offers modern architectural Las Vegas mansions with Strip views and contemporary design. Seven Hills features custom estates, established luxury community, and Henderson positioning. Both provide exclusive luxury living with distinct architectural styles.
              </p>
              <p className="text-gray-700 mb-3">
                Las Vegas mansions in Ascaya and Seven Hills require positioning that emphasizes modern architecture, Strip views, custom design, or established luxury community benefits depending on specific community and property advantages.
              </p>
              <p className="text-gray-700">
                Dr. Jan's Las Vegas mansion expertise includes understanding Ascaya modern positioning, Seven Hills established luxury value, and strategic marketing that reaches buyers seeking specific architectural styles and luxury community features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-800 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Las Vegas Mansion Expertise</h2>
          <p className="text-xl mb-8 text-amber-100">Specialized help for Las Vegas mansions and ultra-luxury estate properties.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-amber-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-amber-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-amber-950 transition-colors">Luxury Mansion Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

