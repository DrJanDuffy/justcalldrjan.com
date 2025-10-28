'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import FAQSection from '@/components/faq-section'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'
import { getServiceSchemaForPage } from '@/lib/services'

export default function HowItWorksPage() {
  const articleSchema = getArticleSchema({
    headline: 'How Dr. Jan Helps Homes That Didn\'t Sell Get Sold',
    description: 'A step-by-step look at Dr. Janet Duffy\'s proven process for turning expired listings into sold properties. From initial consultation to successful closing.',
    datePublished: '2024-02-01',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  const serviceSchema = getServiceSchemaForPage('SELLER_REPRESENTATION')

  const faqs = [
    {
      question: 'How long does Dr. Jan\'s process typically take?',
      answer: 'Results vary by property and issues, but Dr. Jan\'s average is 32 days from relisting to sale for homes that didn\'t sell initially. Her systematic approach identifies problems quickly and implements targeted solutions efficiently.'
    },
    {
      question: 'What happens in the initial consultation?',
      answer: 'Dr. Jan reviews your expired listing comprehensively: showing activity, buyer feedback, market conditions, and competition. She identifies specific issues preventing sale and outlines a strategic plan with timeline, costs, and expected results.'
    },
    {
      question: 'What if my home needs improvements?',
      answer: 'Dr. Jan identifies which improvements add the most value for cost. Not every home needs major updates - strategic improvements, pricing adjustments, or marketing enhancements may be sufficient. Her plan outlines necessary improvements with expected impact.'
    },
    {
      question: 'How is this different from my previous listing agent?',
      answer: 'Dr. Jan specializes in expired listings and uses a diagnostic approach to identify specific issues. She provides comprehensive marketing, proactive communication, and data-driven pricing strategy. Her systematic process addresses problems rather than hoping they resolve themselves.'
    },
    {
      question: 'What kind of communication can I expect?',
      answer: 'Dr. Jan provides weekly updates via email and phone, instant access at 702-222-1964 for questions or concerns, proactive communication about showings and feedback, and strategic pivots when market conditions change. Your listing receives personal attention.'
    },
    {
      question: 'What results can I realistically expect?',
      answer: 'Typical results: 30-45 days on market for expired listings, competitive pricing attracting serious buyers, multiple offers when possible, and successful sales at fair market value. Dr. Jan\'s systematic approach creates consistent results for homes that didn\'t sell initially.'
    }
  ]

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <StructuredDataScript data={serviceSchema} id="service-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Dr. Jan Helps Homes That Didn't Sell Get Sold
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            A step-by-step look at Dr. Janet Duffy's proven process for turning expired listings into sold properties. From initial consultation to successful closing.
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
            Step 1: Initial Consultation & Listing Audit
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Your journey begins with a comprehensive consultation where Dr. Jan analyzes exactly what went wrong with your previous listing. This honest assessment identifies specific failures that can be corrected.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What We Review</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Previous listing price vs. current market comparables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Photo quality and presentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Marketing channels used and exposure received</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Agent communication and showing feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Competitor analysis and market positioning</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Honest Conversation</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan will tell you exactly what went wrong: Was pricing too high? Were photos poor? Was marketing insufficient? This isn't about blaming - it's about identifying specific failures so they can be fixed.
              </p>
              <p className="text-gray-700 mb-4">
                You'll receive a clear assessment of: what failed, why it failed, and exactly how to fix it. No sugar-coating, no promises without plans - just honest diagnosis leading to actionable solutions.
              </p>
              <p className="text-gray-700">
                By the end of this consultation, you'll have a complete understanding of what needs to change and confidence in a plan that will work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Step 2: Strategic Repricing & Market Analysis
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Jan conducts fresh market analysis using current data and proprietary Berkshire Hathaway HomeServices valuation tools to determine optimal pricing strategy that attracts buyers while protecting your equity.
          </p>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Data-Driven Pricing Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-gray-900">Comparable Sales</h4>
                <p className="text-gray-700">Recent sales of similar homes in your exact neighborhood and price range analyzed for accurate comparison.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-900">Active Competition</h4>
                <p className="text-gray-700">Current listings competing for same buyers, their pricing, days on market, and showing activity patterns.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-900">Absorption Rates</h4>
                <p className="text-gray-700">How quickly homes are selling at current price points in your area determines pricing strategy effectiveness.</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Pricing isn't guesswork - it's science. Dr. Jan combines her PhD-level analytical approach with 30 years of Vegas market experience and proprietary BHHS tools to determine pricing that works.
          </p>
          <p className="text-lg text-gray-700">
            Result: Strategic pricing that positions your home competitively from day one, attracting buyers while maximizing your return. No more chasing the market down after initial overpricing.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Step 3: Professional Presentation & Marketing
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Your home receives professional presentation that showcases its best features: professional photography, staging consultation, and marketing materials with Berkshire Hathaway HomeServices luxury branding.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Photography</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan invests in professional photography with proper lighting, wide-angle shots, and staging that makes your home look its absolute best. These photos appear in premium marketing channels, not just basic MLS.
              </p>
              <p className="text-gray-700">
                First impressions matter. Professional photos ensure buyers see your home at its best from the moment they view listings online.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Staging Consultation</h3>
              <p className="text-gray-700 mb-4">
                Staging consultation helps present your home at its best: decluttering, depersonalizing, strategic furniture placement. Simple improvements that dramatically improve buyer response.
              </p>
              <p className="text-gray-700">
                Dr. Jan identifies which improvements provide best return on investment, ensuring staging investments pay off in faster sales and better offers.
              </p>
            </div>
          </div>
          <div className="bg-cyan-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">BHHS Luxury Marketing</h3>
            <p className="text-gray-700 mb-3">
              Marketing materials carry Berkshire Hathaway HomeServices luxury branding that signals quality and institutional backing. Your home appears in premium channels: Wall Street Journal Real Estate, NYT Real Estate sections, and elite luxury portals.
            </p>
            <p className="text-gray-700">
              This isn't just better MLS photos - it's your home reaching qualified buyers through channels that regional firms can't access. Institutional marketing power gets results that basic listing exposure can't match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Step 4: Network Activation & Buyer Outreach
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Your listing is actively promoted to Berkshire Hathaway HomeServices agent networks, luxury buyer databases, and international referral partners - reaching buyers that previous agents couldn't access.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">BHHS Agent Network</h3>
              <p className="text-gray-700">900+ Berkshire Hathaway agents in Nevada receive your listing through internal network with buyers actively searching.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Luxury Buyer Database</h3>
              <p className="text-gray-700">Qualified buyers who have purchased high-end properties receive direct promotion of your listing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">International Referrals</h3>
              <p className="text-gray-700">BHHS international offices and referral partners in all 50 states promote your listing to their clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Step 5: Ongoing Management & Strategic Pivots
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Jan maintains weekly communication with detailed updates and strategic adjustments that keep your listing competitive until it's sold. This proactive management is what turns expired listings into sold properties.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Reporting System</h3>
            <p className="text-gray-700 mb-4">
              Every week you'll receive detailed reports: showing frequency, buyer feedback themes, competitor activity, and strategic recommendations. No more radio silence - you know exactly what's happening.
            </p>
            <p className="text-gray-700 mb-4">
              These reports identify patterns and trigger strategic adjustments: price changes if needed, marketing enhancements if required, or positioning shifts if necessary - all within 14-21 days, not after weeks of stagnation.
            </p>
            <p className="text-gray-700">
              You have 24/7 access at 702-222-1964. Questions? Call. Concerns? Call. Dr. Jan treats your listing like her own investment - because reputation matters more than any single commission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">See how Dr. Jan's proven process turns expired listings into sold properties.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
      
      <FAQSection faqs={faqs} />
      </div>
    </>
  )
}

