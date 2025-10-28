'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function RealEstateScriptsLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Real Estate Agent Scripts for Las Vegas: Effective Cold Calling for Expired Listings',
    description: 'Expert real estate scripts tailored for Las Vegas market, specifically for reaching out about expired listings and homes that didn\'t sell. Proven templates for successful lead conversations.',
    datePublished: '2024-06-01',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Estate Agent Scripts for Las Vegas: Effective Cold Calling for Expired Listings
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Expert real estate scripts tailored for Las Vegas market, specifically for reaching out about expired listings and homes that didn't sell. Proven templates for successful lead conversations.
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
            Why Las Vegas Real Estate Scripts Matter
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Effective real estate scripts are essential for Las Vegas agents specializing in expired listings. The Las Vegas market requires specific approaches: understanding local neighborhoods, pricing strategies, and buyer psychology unique to Southern Nevada. Generic scripts fail - Las Vegas-specific scripts succeed.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Market Specificity</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas real estate scripts must account for unique market characteristics: master-planned communities like Summerlin, competitive pricing dynamics, diverse buyer pools including investors and relocating families, and specific neighborhood positioning within the valley.
              </p>
              <p className="text-gray-700 mb-3">
                Generic scripts don't address Las Vegas-specific challenges: competing against new construction, understanding Summerlin versus Henderson positioning, pricing relative to local comps, or marketing to Las Vegas buyer demographics.
              </p>
              <p className="text-gray-700">
                Dr. Jan's Las Vegas real estate scripts are tailored to local market conditions, neighborhood specifics, and buyer psychology unique to Southern Nevada. This Las Vegas-specific approach creates better conversations and higher conversion rates.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expired Listing Scripts</h3>
              <p className="text-gray-700 mb-3">
                Scripts for expired listings require different approach than general prospecting. Homeowners whose listings expired are often frustrated, skeptical, or considering options. Scripts must acknowledge their situation, demonstrate understanding, and offer hope without making empty promises.
              </p>
              <p className="text-gray-700 mb-3">
                Effective expired listing scripts: acknowledge their frustration, identify what went wrong without blame, demonstrate expertise with specific data, and offer genuine solutions rather than generic promises. Las Vegas homeowners need agents who understand local market dynamics.
              </p>
              <p className="text-gray-700">
                Dr. Jan's expired listing scripts for Las Vegas focus on diagnostic approach: understanding what prevented their sale, analyzing Las Vegas market conditions, and creating strategic plan addressing specific issues. These scripts convert because they offer real solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Proven Las Vegas Real Estate Script Templates
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Here are proven script templates specifically designed for Las Vegas real estate agents working with expired listings. These scripts work because they address Las Vegas market realities and homeowner concerns.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Script 1: Initial Expired Listing Contact</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 italic mb-3">
                  "Hi [Name], this is Dr. Janet Duffy with Berkshire Hathaway HomeServices. I noticed your home at [Address] in [Neighborhood] came off the market. I specialize in helping Las Vegas homes that didn't sell get sold successfully."
                </p>
                <p className="text-gray-700 italic mb-3">
                  "I'd like to offer you free analysis of what happened with your listing - no obligation, just honest assessment. I've helped dozens of Las Vegas homeowners in [Neighborhood] successfully relist and sell after expiration."
                </p>
                <p className="text-gray-700 italic">
                  "Would you be open to quick conversation this week? I can show you exactly what prevented your sale and how to fix it."
                </p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold mb-2">Why This Works:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Immediately identifies as specialist, not generic agent</li>
                  <li>References specific neighborhood (Las Vegas local knowledge)</li>
                  <li>Offers value upfront (free analysis)</li>
                  <li>Mentions local success (social proof)</li>
                  <li>No pressure, just conversation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Script 2: Addressing Pricing Concerns</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 italic mb-3">
                  "I understand pricing is sensitive. Here's what I see in [Neighborhood] right now: recent sales show [specific data]. Your home was priced at [amount] which may have been above current market."
                </p>
                <p className="text-gray-700 italic mb-3">
                  "The good news: Las Vegas market data shows homes in [Neighborhood] priced correctly are selling in 30-45 days. I'd like to show you exactly where to price based on current comps - not guesswork, but actual data."
                </p>
                <p className="text-gray-700 italic">
                  "Can we schedule 30 minutes for me to present specific analysis? Then you decide if the numbers make sense."
                </p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold mb-2">Why This Works:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Acknowledges pricing concern without confrontation</li>
                  <li>Uses specific Las Vegas neighborhood data</li>
                  <li>Offers data-driven approach (not opinion)</li>
                  <li>Sets realistic timeline expectation (30-45 days)</li>
                  <li>Low-pressure ask (just analysis, no commitment)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Script 3: Overcoming "Tried Everything" Objection</h3>
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 italic mb-3">
                  "I completely understand. When I work with expired listings, I find most agents 'tried everything' - but they tried everything generically, not specifically for your situation."
                </p>
                <p className="text-gray-700 italic mb-3">
                  "The difference: I diagnose what specifically prevented YOUR sale - was it pricing in [Neighborhood], marketing reach, or presentation? Then I fix those specific issues, not just throw more generic marketing at it."
                </p>
                <p className="text-gray-700 italic">
                  "Can I show you three homes in [Neighborhood] that didn't sell initially, what was wrong, and how I sold them? It's not about trying more - it's about fixing the right things."
                </p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold mb-2">Why This Works:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Validates their experience (acknowledges frustration)</li>
                  <li>Differentiates approach (specific vs. generic)</li>
                  <li>Uses diagnostic language (not sales language)</li>
                  <li>Local examples (same neighborhood)</li>
                  <li>Focuses on problem-solving, not selling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Las Vegas-Specific Script Adaptations
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas market requires specific script adaptations based on neighborhood, buyer type, and market conditions. Here's how to customize scripts for different Las Vegas scenarios.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Summerlin Scripts</h3>
              <p className="text-gray-700 mb-3">
                Summerlin scripts emphasize master-planned benefits, luxury positioning, and Red Rock proximity. Market positioning focuses on premium value and established community advantages.
              </p>
              <p className="text-gray-700">
                Key phrases: "master-planned community," "Red Rock views," "established Summerlin neighborhoods," "proven quality."
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Henderson Scripts</h3>
              <p className="text-gray-700 mb-3">
                Henderson scripts emphasize value, family-friendly communities, and growing amenities. Focus on affordability with quality positioning versus newer areas.
              </p>
              <p className="text-gray-700">
                Key phrases: "exceptional value," "established Henderson neighborhoods," "family-friendly communities," "proven quality."
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">North Las Vegas Scripts</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas scripts emphasize new construction advantages, growth potential, and family amenities. Positioning focuses on value and future appreciation.
              </p>
              <p className="text-gray-700">
                Key phrases: "growing communities," "new construction value," "family amenities," "affordable quality."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help with Las Vegas Expired Listings?</h2>
          <p className="text-xl mb-8 text-blue-100">Dr. Janet Duffy specializes in helping Las Vegas homes that didn't sell get sold successfully.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

