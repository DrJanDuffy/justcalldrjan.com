'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'

export default function PricingMasteryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pricing Mastery: Why 73% of Expired Listings Were Overpriced
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Your home didn't sell because it was priced 5-15% too high. Dr. Jan's PhD-level pricing approach backed by 30 years of Vegas market data ensures accurate pricing that attracts buyers.
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
            The Pricing Problem: 73% Overpriced by 5-15%
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Research shows that 73% of expired listings were overpriced by 5-15% - the number one reason homes don't sell. Most agents overprice to win the listing, knowing they'll have to reduce later. This approach wastes your time and money while your home sits on the market.
          </p>
          <div className="bg-red-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What Wrong Pricing Looks Like</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Agent told you what you wanted to hear about price, not market reality</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Price based on emotion, not comparable sales and absorption rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No real-time adjustments based on showing feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Chasing market down after initial overpricing reduces net proceeds</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No tough conversation upfront - agent avoided honest pricing discussion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Dr. Jan's PhD-Level Pricing Approach
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Jan combines her PhD-level analytical approach with proprietary Berkshire Hathaway HomeServices valuation tools and 30 years of Las Vegas market experience to determine accurate pricing from day one.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proprietary BHHS Valuation Tools</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan has access to proprietary Berkshire Hathaway HomeServices valuation tools that analyze market data, absorption rates, and buyer behavior patterns that generic CMAs miss.
              </p>
              <p className="text-gray-700 mb-4">
                These tools combine recent comparable sales, current competition, days on market trends, and buyer feedback data to determine optimal pricing strategy.
              </p>
              <p className="text-gray-700">
                Result: Pricing based on data, not emotion or what you want to hear.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">30 Years of Vegas Market Cycles</h3>
              <p className="text-gray-700 mb-4">
                Dr. Jan survived the 2008 crash and understands how Las Vegas markets cycle. She knows the difference between true market value and emotional pricing that doesn't work.
              </p>
              <p className="text-gray-700 mb-4">
                Her experience includes every market condition: boom markets, crash markets, recovery markets, and balanced markets. This experience prevents pricing mistakes that inexperienced agents make.
              </p>
              <p className="text-gray-700">
                When you price with Dr. Jan, you're pricing with someone who's seen it all and knows what actually sells.
              </p>
            </div>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Tough Conversation Upfront</h3>
            <p className="text-gray-700 mb-3">
              Most agents overprice to get your signature, knowing they'll reduce later. Dr. Jan will have the tough conversation upfront: price your home correctly to sell quickly, or price high and watch it sit.
            </p>
            <p className="text-gray-700 mb-3">
              She'll show you the data: comparable sales, absorption rates, buyer feedback patterns, and market trends. If the data says your price is too high, she'll tell you directly - because she prices to get your home SOLD, not to win the listing.
            </p>
            <p className="text-gray-700">
              The truth: Most agents overprice to get your signature. Dr. Jan prices to get your home SOLD - even if it means a tough conversation upfront.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Real-Time Adjustment Strategy
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Even with perfect initial pricing, markets shift. Dr. Jan monitors showing feedback, buyer interest, and competitor activity to adjust strategy in real-time.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">14-21 Day Pivot Strategy</h3>
              <p className="text-gray-700 mb-4">
                If your initial pricing isn't attracting buyers, Dr. Jan pivots within 14-21 days rather than waiting weeks for the market to catch up. This proactive approach means your home adapts to market conditions immediately.
              </p>
              <p className="text-gray-700 mb-4">
                She analyzes showing feedback patterns: Are buyers saying price? Are showings happening but no offers? Is competition affecting interest? Based on this data, she adjusts price or marketing strategy quickly.
              </p>
              <p className="text-gray-700">
                The goal: Keep your listing competitive and moving toward sale, not sitting stagnant while hoping something changes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Feedback Analysis</h3>
              <p className="text-gray-700 mb-4">
                You'll receive weekly reports showing buyer feedback themes, showing frequency patterns, and competitor activity. If patterns suggest pricing adjustment needed, it happens immediately.
              </p>
              <p className="text-gray-700 mb-4">
                This data-driven approach means your pricing strategy evolves based on actual buyer behavior, not guesswork. If buyers consistently say price, adjustment happens. If showings are strong but no offers, different adjustments are made.
              </p>
              <p className="text-gray-700">
                Result: Homes priced correctly from start sell faster and for better net proceeds than homes that chase market downward after overpricing initially.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Other Agents Get Pricing Wrong
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Realty ONE Group</h3>
              <p className="text-gray-700">Agents may overprice to win listing, then chase market down - the classic mistake that kills expired listings. Volume focus can lead to pricing errors.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simply Vegas</h3>
              <p className="text-gray-700">Boutique "luxury" pricing often inflated to justify premium positioning, scaring away buyers who know real market value. Luxury branding doesn't equal higher prices.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">eXp Realty</h3>
              <p className="text-gray-700">Virtual model means less face-time for tough pricing conversations. Agents may avoid honest discussions to keep listing rather than having difficult pricing talk.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Urban Nest/Real</h3>
              <p className="text-gray-700">Good luxury pricing track record, but recent merger into Real means pricing strategy uncertain during transition period. May lack consistency during merger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Pricing Mastery?</h2>
          <p className="text-xl mb-8 text-green-100">If your home didn't sell due to overpricing, get accurate pricing that attracts buyers from day one.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-green-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-950 transition-colors">Get Pricing Analysis</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

