'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function MarketingPowerPage() {
  const articleSchema = getArticleSchema({
    headline: 'Institutional Marketing Power: Why 87% of Expired Listings Failed',
    description: 'Your home didn\'t sell because it never reached qualified buyers. Dr. Jan + Berkshire Hathaway HomeServices delivers global marketing reach that regional firms simply can\'t match.',
    datePublished: '2024-06-05',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Institutional Marketing Power: Why 87% of Expired Listings Failed
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Your home didn't sell because it never reached qualified buyers. Dr. Jan + Berkshire Hathaway HomeServices delivers global marketing reach that regional firms simply can't match.
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
            The Marketing Problem: 87% Failed Due to Insufficient Exposure
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Research shows that 87% of expired listings failed because they received only basic MLS exposure. Your home never reached the qualified buyers actively searching through luxury networks, national advertising, and international channels. Regional firms and boutique agencies simply don't have access to the marketing channels that serious buyers use.
          </p>
          <div className="bg-red-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What Failed Marketing Looks Like</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Basic MLS listing only - no additional exposure</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No national advertising to reach out-of-state buyers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Limited luxury network connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No premium portal syndication (Wall Street Journal, NYT Real Estate)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No international referral partner network</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Berkshire Hathaway HomeServices: Institutional Marketing Power
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Jan leverages Berkshire Hathaway HomeServices' Fortune 100 marketing power to ensure your home reaches qualified buyers through channels that regional firms can't access.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Brand Recognition</h3>
              <p className="text-gray-700 mb-4">
                Berkshire Hathaway is a Fortune 100 company with instant recognition among luxury buyers. When your home carries the BHHS brand, it signals quality and institutional backing that attracts serious buyers.
              </p>
              <p className="text-gray-700 mb-4">
                International buyers, out-of-state investors, and luxury shoppers recognize Berkshire Hathaway as a trusted brand. This brand power opens doors that regional firms simply can't match.
              </p>
              <p className="text-gray-700">
                Your home isn't just another listing - it's a Berkshire Hathaway HomeServices property with institutional marketing behind it.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">National & International Advertising</h3>
              <p className="text-gray-700 mb-4">
                BHHS properties receive exposure through TV, radio, and print advertising that reaches buyers across the country. Simply Vegas, Realty ONE, and boutique firms don't have budgets for national advertising.
              </p>
              <p className="text-gray-700 mb-4">
                Your home appears in Wall Street Journal Real Estate, NYT Real Estate sections, and elite luxury portals where serious buyers search. Regional firms can't access these premium channels.
              </p>
              <p className="text-gray-700">
                This isn't just better photos - it's your home appearing where wealthy buyers actually look for properties, not just on local MLS.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Luxury Network Connections</h3>
            <p className="text-gray-700 mb-3">
              BHHS has 900+ agents in Nevada alone, plus luxury network connections across all 50 states and international offices. When you list with Dr. Jan, your home is promoted to this entire network.
            </p>
            <p className="text-gray-700 mb-3">
              Luxury buyers work with luxury agents who search through BHHS networks. Your home appears in searches by agents who specialize in high-end properties, not just local agents browsing MLS.
            </p>
            <p className="text-gray-700">
              Result: Your home gets seen by 10X more qualified buyers with institutional backing. If a buyer in New York wants a Las Vegas property, their BHHS agent finds your listing through the network - something that doesn't happen with regional firms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Regional Firms Can't Match BHHS Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Realty ONE Group: Regional Only</h3>
              <p className="text-gray-700 mb-3">Strong local presence in Las Vegas, but purely regional marketing footprint. No national advertising, limited luxury network connections beyond Nevada.</p>
              <p className="text-gray-700">Can't reach out-of-state buyers through national channels that BHHS accesses.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simply Vegas: Boutique Limitations</h3>
              <p className="text-gray-700 mb-3">Boutique luxury focus limits exposure to their 600-agent network only. No TV/radio/print advertising budgets, no national reach.</p>
              <p className="text-gray-700">Great for local luxury, but can't match BHHS global brand recognition and international buyer reach.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">eXp Realty: Virtual Limitations</h3>
              <p className="text-gray-700 mb-3">Cloud-based model with weak local luxury connections. No print/broadcast advertising to reach serious buyers.</p>
              <p className="text-gray-700">Virtual structure doesn't provide institutional marketing power or premium portal access that BHHS delivers.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Urban Nest/Real: Merger Uncertainty</h3>
              <p className="text-gray-700 mb-3">Recently merged into Real - uncertain marketing infrastructure during transition. No proven track record post-merger.</p>
              <p className="text-gray-700">Can't guarantee marketing continuity or access to networks during merger transition period.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Institutional Marketing Power?</h2>
          <p className="text-xl mb-8 text-blue-100">If your home didn't sell due to weak marketing, BHHS delivers the exposure it deserves.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-950 transition-colors">Get Marketing Analysis</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

