'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'

export default function TurnaroundPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Expired Listing Turnaround Plan: From Failed to Sold in 30 Days
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl">
            When you switch to Dr. Jan after an expired listing, here's exactly what changes immediately - a systematic 4-week plan that addresses every failure from your previous listing.
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
            Week 1: Full Listing Audit & Honest Assessment
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The first week with Dr. Jan begins with a complete audit of what went wrong with your previous listing. No sugar-coating, no excuses - just honest assessment of pricing, photos, marketing, and agent effort.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Audit Components</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span><strong>Pricing analysis:</strong> Was your home priced correctly against comparable sales and absorption rates?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span><strong>Photo quality:</strong> Professional photography or amateur shots that didn't showcase your home?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span><strong>Marketing reach:</strong> Basic MLS only, or actual marketing through multiple channels?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span><strong>Agent effort:</strong> Did your agent provide showing feedback, strategy adjustments, and proactive communication?</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Honest Conversation</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan will tell you exactly what went wrong: Was pricing too high? Were photos poor quality? Was marketing insufficient? Did agent communication break down? She'll provide the honest assessment you need to fix issues.
              </p>
              <p className="text-gray-700 mb-4">
                This audit isn't about blaming - it's about identifying specific failures so they can be corrected. Every expired listing has specific problems that can be fixed with the right approach.
              </p>
              <p className="text-gray-700">
                By the end of Week 1, you'll know exactly what failed and have a clear plan to address each issue systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Week 2: Professional Presentation & Marketing Materials
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Week 2 focuses on professional presentation that showcases your home at its best. New photography, staging consultation, and updated marketing materials with Berkshire Hathaway HomeServices luxury branding.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Photography</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan invests in professional photography that showcases your home's best features. No more dark, amateur shots - your home will be presented professionally from day one.
              </p>
              <p className="text-gray-700 mb-4">
                Professional photos include proper lighting, wide-angle shots that show space accurately, and staging that makes rooms look inviting. These photos go beyond MLS - they appear in BHHS luxury marketing materials.
              </p>
              <p className="text-gray-700">
                First impressions matter. Buyers form opinions in seconds when viewing photos. Professional photography ensures those first impressions are positive.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Staging Consultation</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan provides staging consultation to help you present your home at its best. Whether using your existing furniture or bringing in professional staging, the goal is making your home show beautifully.
              </p>
              <p className="text-gray-700 mb-4">
                Staging isn't about hiding problems - it's about showcasing potential. Buyers need to see how spaces function and how beautiful your home can look when properly presented.
              </p>
              <p className="text-gray-700">
                Simple improvements like decluttering, depersonalizing, and strategic furniture placement can dramatically improve buyer response. Dr. Jan identifies which improvements provide best return on investment.
              </p>
            </div>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">BHHS Luxury Branding</h3>
            <p className="text-gray-700 mb-3">
              Marketing materials are updated with Berkshire Hathaway HomeServices luxury branding that signals quality and institutional backing. Your home isn't just another listing - it's a BHHS property.
            </p>
            <p className="text-gray-700">
              These branded materials appear in premium channels: Wall Street Journal Real Estate, NYT Real Estate sections, and elite luxury portals where serious buyers search. Regional firms can't access these channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Week 3: Strategic Repricing Based on Current Market
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Week 3 focuses on strategic repricing based on current absorption rates and fresh comparative market analysis. No guessing - pricing based on real market data and current conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fresh CMA Analysis</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan conducts fresh comparative market analysis using current data: recent comparable sales, active competition, days on market trends, and absorption rates for your specific area.
              </p>
              <p className="text-gray-700 mb-4">
                Markets change constantly. What was appropriate pricing three months ago may not be correct today. Fresh CMAs ensure pricing reflects current market conditions, not outdated data.
              </p>
              <p className="text-gray-700">
                This analysis uses proprietary BHHS valuation tools combined with Dr. Jan's 30 years of Vegas market experience to determine optimal pricing strategy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Absorption Rate Analysis</h3>
              <p className="text-gray-700 mb-4">
                Understanding absorption rates tells you how quickly homes are selling in your area at current price points. If absorption is slow, pricing may need adjustment. If absorption is strong, pricing may be on target.
              </p>
              <p className="text-gray-700 mb-4">
                This data-driven approach means pricing decisions aren't based on hope or emotion - they're based on actual market performance data that shows what prices buyers are accepting.
              </p>
              <p className="text-gray-700">
                Result: Strategic repricing that positions your home competitively in current market conditions, not based on what worked months ago when your first listing failed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Week 4: Aggressive Outreach & Network Activation
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Week 4 activates Berkshire Hathaway HomeServices networks to ensure your home reaches qualified buyers through channels that previous agents couldn't access.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">BHHS Agent Network</h3>
              <p className="text-gray-700">900+ Berkshire Hathaway agents in Nevada receive your listing through internal network. These agents have buyers actively searching for properties like yours.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Luxury Buyer Database</h3>
              <p className="text-gray-700">BHHS maintains luxury buyer databases with clients who have purchased high-end properties. Your home is promoted to these qualified buyers directly.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">International Referrals</h3>
              <p className="text-gray-700">BHHS international offices and referral partners receive your listing. If buyers in New York, California, or international markets are looking for Las Vegas properties, they see your home.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Network Advantage</h3>
            <p className="text-gray-700 mb-3">
              When your previous listing failed, it likely wasn't promoted to agent networks, luxury buyer databases, or international referral partners. Dr. Jan activates all of these channels in Week 4.
            </p>
            <p className="text-gray-700">
              Your home isn't just on MLS - it's actively promoted to 900+ BHHS agents, luxury buyer databases, and international referral partners who have clients actively searching. This network reach is what turns expired listings into sold properties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ongoing: Weekly Feedback & Strategic Adjustments
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            After Week 4, the turnaround plan continues with weekly feedback reports, showing analysis, and strategic adjustments until your home is sold. This ongoing management is what keeps expired listings moving toward sale.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Reporting System</h3>
            <p className="text-gray-700 mb-4">
              Every week you'll receive detailed reports showing: showing frequency, buyer feedback themes, competitor activity, and strategic recommendations. No more radio silence - you know exactly what's happening with your listing.
            </p>
            <p className="text-gray-700 mb-4">
              These reports identify patterns: Are buyers consistently saying price? Are showings happening but no offers? Is competition affecting interest? Based on this data, Dr. Jan makes strategic adjustments.
            </p>
            <p className="text-gray-700">
              If price needs adjustment, it happens. If marketing needs enhancement, it happens. If strategy needs pivot, it happens - immediately, not after weeks of stagnation. This proactive management is what turns expired listings into sold properties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Turnaround Plan?</h2>
          <p className="text-xl mb-8 text-orange-100">If your home didn't sell, get a systematic 4-week plan that fixes every failure and gets your home sold.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-orange-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-950 transition-colors">Start Turnaround Plan</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

