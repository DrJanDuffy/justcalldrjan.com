'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'

export default function WhyBerkshireHathawayPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why Berkshire Hathaway HomeServices + Dr. Jan Duffy Wins When Your Home Doesn't Sell
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Three critical advantages that turn expired listings into sold properties. Institutional marketing power, pricing mastery, and proactive communication that boutique firms simply can't match.
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
            The Truth About Why Your Home Didn't Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            After analyzing hundreds of expired listings, three critical failures emerge: insufficient marketing exposure beyond basic MLS, overpricing by 5-15%, and poor agent communication. Dr. Janet Duffy with Berkshire Hathaway HomeServices addresses all three with institutional power that boutique firms simply can't match.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">87% Failed Due to Weak Marketing</h3>
              <p className="text-gray-700">
                Most expired listings received only basic MLS exposure. Your home never reached the qualified buyers actively searching through luxury networks, national advertising, and international channels.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">73% Were Overpriced 5-15%</h3>
              <p className="text-gray-700">
                The number one killer: agents told you what you wanted to hear about price rather than market reality. Wrong pricing prevented offers even when buyers were interested.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">68% Had Poor Communication</h3>
              <p className="text-gray-700">
                Radio silence from agents for weeks at a time. No showing feedback, no strategy adjustments, no proactive communication about what was working and what wasn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Advantage #1: Institutional Marketing Power & National Exposure
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When your home didn't sell due to insufficient exposure, Dr. Jan + Berkshire Hathaway HomeServices delivers marketing power that regional and boutique firms simply cannot match.
          </p>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. Jan + BHHS Marketing Advantages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <span><strong>Global Berkshire Hathaway brand</strong> with Fortune 100 recognition reaches international luxury buyers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <span><strong>TV, radio, print advertising</strong> that Simply Vegas, Realty ONE, and boutique firms can't match</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <span><strong>Luxury network connections</strong> across all 50 states + international offices</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <span><strong>Premium syndication</strong> to Wall Street Journal, NYT Real Estate, and elite luxury portals</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-gray-900">Result: Your home gets seen by 10X more qualified buyers with institutional backing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Comparison</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Realty ONE Group</h4>
                  <p className="text-gray-700">Strong local presence, but purely regional marketing footprint. Can't match BHHS national and international reach.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Simply Vegas</h4>
                  <p className="text-gray-700">Boutique luxury focus limits exposure to their 600-agent network only. No national advertising or institutional backing.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">eXp Realty</h4>
                  <p className="text-gray-700">Cloud-based with weak local luxury connections; no print/broadcast advertising to reach serious buyers.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Urban Nest (now Real)</h4>
                  <p className="text-gray-700">Recently merged - uncertain marketing infrastructure during transition. No proven track record post-merger.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Marketing Reality</h3>
              <p className="text-gray-700 mb-4">
                When your home expired with limited marketing, it wasn't seen by the buyers who were actively looking. Regional firms and boutique agencies simply don't have access to the national advertising, luxury networks, and international channels that Berkshire Hathaway HomeServices provides.
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Jan leverages BHHS institutional marketing power to ensure your home reaches qualified buyers through multiple channels: luxury agent networks, national advertising, premium real estate portals, and international referral partners that regional firms can't access.
              </p>
              <p className="text-gray-700">
                This isn't just better MLS photos - it's institutional marketing power that gets your home in front of 10X more qualified buyers. When buyers are searching through Wall Street Journal Real Estate or BHHS luxury networks, your home appears where competitors' listings don't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Advantage #2: Pricing Mastery Backed by 30+ Years of Data
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When your home didn't sell due to overpricing, Dr. Jan's PhD-level analytical approach combined with proprietary BHHS valuation tools ensures accurate pricing that attracts buyers while protecting your equity.
          </p>
          <div className="bg-green-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. Jan + BHHS Pricing Advantages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span><strong>PhD-level analytical approach</strong> to CMAs using proprietary BHHS valuation tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span><strong>30 years of Vegas market cycles</strong> - survived 2008 crash, understands true value vs. emotion</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span><strong>Direct, honest pricing conversations</strong> that protect your equity while attracting buyers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span><strong>Real-time adjustment strategy</strong> based on showing feedback and market shifts</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-gray-900">The Truth: Most agents overprice to get your signature. Dr. Jan prices to get your home SOLD - even if it means a tough conversation upfront.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Other Agents Get Pricing Wrong</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Realty ONE Group</h4>
                  <p className="text-gray-700">Agents may overprice to win listing, then chase market down - the classic mistake that kills expired listings.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Simply Vegas</h4>
                  <p className="text-gray-700">Boutique "luxury" pricing often inflated to justify premium positioning, scaring away buyers who know real market value.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">eXp Realty</h4>
                  <p className="text-gray-700">Virtual model means less face-time for tough pricing conversations. Agents may avoid honest discussions to keep listing.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Urban Nest/Real</h4>
                  <p className="text-gray-700">Good luxury pricing track record, but recent merger into Real means pricing strategy uncertain during transition period.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. Jan's Pricing Philosophy</h3>
              <p className="text-gray-700 mb-4">
                After 30 years in Las Vegas real estate, Dr. Jan has seen every market cycle. She understands that most agents overprice to win the listing, knowing they'll have to reduce later. This approach wastes your time and money while your home sits on the market.
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Jan uses proprietary BHHS valuation tools combined with her PhD-level analytical approach to determine accurate pricing from day one. She'll have the tough conversation upfront: price your home correctly to sell quickly, or price high and watch it sit.
              </p>
              <p className="text-gray-700 mb-4">
                Her pricing strategy includes real-time adjustments based on showing feedback and market shifts. If initial pricing isn't attracting buyers, she pivots within 14-21 days rather than waiting weeks for the market to catch up.
              </p>
              <p className="text-gray-700">
                The result: homes priced correctly from the start sell faster and for better net proceeds than homes that chase the market downward after being overpriced initially.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Advantage #3: Proactive Communication & Strategic Pivots
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When your home didn't sell due to poor agent communication, Dr. Jan delivers weekly updates, 24/7 accessibility, and strategic pivots that keep your listing moving toward sale.
          </p>
          <div className="bg-purple-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. Jan + BHHS Communication Advantages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span><strong>Weekly market updates</strong> with showing feedback, competitor analysis, and strategy adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span><strong>24/7 accessibility</strong> at 702-222-1964 for questions, concerns, or market shifts</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span><strong>Strategic price/marketing pivots</strong> within 14-21 days if initial strategy isn't working</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span>
                <span><strong>Full transparency</strong> on what's working, what's not, and exactly what needs to change</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-gray-900">Reality Check: Dr. Jan treats every listing like her own investment property - because reputation matters more than any single commission.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Communication Failures at Other Firms</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Realty ONE Group</h4>
                  <p className="text-gray-700">1,200 agents = diluted broker support and inconsistent communication standards. Your listing may get lost in volume.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Simply Vegas</h4>
                  <p className="text-gray-700">Smaller firm means better than mega-brokerages, but lacks BHHS systematic accountability and communication protocols.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">eXp Realty</h4>
                  <p className="text-gray-700">Virtual structure makes it harder to get face-time. Relationship feels transactional rather than consultative partnership.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Urban Nest/Real</h4>
                  <p className="text-gray-700">Merger chaos means agents distracted by transition, uncertain communication protocols during integration period.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">How Dr. Jan's Communication Works</h3>
              <p className="text-gray-700 mb-4">
                When your previous agent went radio silent, your home stopped moving. Dr. Jan maintains weekly communication with detailed updates: showing feedback, competitor analysis, market shifts, and strategic adjustments needed to keep your listing competitive.
              </p>
              <p className="text-gray-700 mb-4">
                You'll receive weekly reports showing exactly what's happening: how many showings, buyer feedback themes, competitor listings that sold, and specific recommendations for price or marketing adjustments.
              </p>
              <p className="text-gray-700 mb-4">
                If your initial strategy isn't working, Dr. Jan pivots within 14-21 days rather than waiting weeks. This proactive approach means your home adapts to market conditions immediately, not after months of silence and stagnation.
              </p>
              <p className="text-gray-700">
                You have 24/7 access at 702-222-1964. Questions about a showing? Call. Concerned about market conditions? Call. Need clarification on strategy? Call. Dr. Jan treats your listing like it's her own investment - because her reputation depends on results, not excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Expired Listing Turnaround Plan
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When you switch to Dr. Jan after an expired listing, here's what changes immediately - a systematic approach that addresses every failure from your previous listing.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Week 1</h3>
              <p className="text-gray-700">Full listing audit - honest assessment of what went wrong (price, photos, marketing, agent effort)</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Week 2</h3>
              <p className="text-gray-700">New professional photography, staging consultation, updated marketing materials with BHHS luxury branding</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Week 3</h3>
              <p className="text-gray-700">Strategic repricing based on current absorption rates and fresh CMAs - no guessing</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Week 4</h3>
              <p className="text-gray-700">Aggressive outreach to BHHS agent network (900+ agents), luxury buyer database, and international referral partners</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing: Weekly Feedback & Strategy</h3>
            <p className="text-gray-700 mb-3">
              After Week 4, you'll receive weekly feedback reports with showing analysis, buyer feedback themes, competitor activity, and strategic adjustments. Dr. Jan doesn't "set it and forget it" - she actively manages your listing until it's sold.
            </p>
            <p className="text-gray-700">
              Every week brings new data: what's working, what's not, and exactly what needs to change. If price needs adjustment, it happens. If marketing needs enhancement, it happens. If strategy needs pivot, it happens - immediately, not after months of silence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Institutional Power?</h2>
          <p className="text-xl mb-8 text-blue-100">Your home deserves a second chance with a first-class strategy. Let's analyze exactly what went wrong and build the winning plan.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <a href="tel:+17022221964" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-950 transition-colors">Schedule Consultation</Link>
          </div>
          <p className="text-lg text-blue-200">No-pressure expired listing consultation. Your equity is too important to trust to hope and luck.</p>
        </div>
      </section>
    </div>
  )
}

