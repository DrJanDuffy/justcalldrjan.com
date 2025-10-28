'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Proactive Communication: Why 68% of Expired Listings Had Radio Silence
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl">
            Your home didn't sell because your agent disappeared. Dr. Jan delivers weekly updates, 24/7 accessibility, and strategic pivots that keep your listing moving toward sale.
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
            The Communication Problem: 68% Had Radio Silence
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Research shows that 68% of expired listing sellers reported "radio silence" from their agent for weeks at a time. No showing feedback, no strategy adjustments, no proactive communication about what was working and what wasn't.
          </p>
          <div className="bg-red-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What Poor Communication Looks Like</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Weeks without hearing from agent after listing went live</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No showing feedback or buyer interest updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No strategy adjustments when initial approach wasn't working</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>Agent unreachable when you had questions or concerns</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">✗</span>
                <span>No transparency on what was working, what wasn't, and what needed to change</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Dr. Jan's Proactive Communication System
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When your previous agent went radio silent, your home stopped moving. Dr. Jan maintains weekly communication with detailed updates and strategic adjustments that keep your listing competitive.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Market Updates</h3>
              <p className="text-gray-700 mb-4">
                You'll receive weekly reports with detailed information: showing frequency, buyer feedback themes, competitor listings that sold, and specific recommendations for price or marketing adjustments.
              </p>
              <p className="text-gray-700 mb-4">
                These updates show exactly what's happening with your listing: how many showings, what buyers are saying, which competing properties sold and why, and what adjustments need to be made.
              </p>
              <p className="text-gray-700">
                No more guessing - you know exactly how your listing is performing and what's happening in your market every single week.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Accessibility</h3>
              <p className="text-gray-700 mb-4">
                You have direct access to Dr. Jan at 702-222-1964 anytime. Questions about a showing? Call. Concerned about market conditions? Call. Need clarification on strategy? Call.
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Jan treats your listing like it's her own investment - because her reputation depends on results, not excuses. She's available when you need answers, not just during scheduled appointment times.
              </p>
              <p className="text-gray-700">
                This accessibility means issues get addressed immediately, not after days of trying to reach an unresponsive agent.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Pivots Within 14-21 Days</h3>
            <p className="text-gray-700 mb-3">
              If your initial strategy isn't working, Dr. Jan pivots within 14-21 days rather than waiting weeks. This proactive approach means your home adapts to market conditions immediately, not after months of silence and stagnation.
            </p>
            <p className="text-gray-700 mb-3">
              She analyzes showing feedback patterns, buyer interest levels, and competitor activity. Based on this data, she makes strategic adjustments: pricing changes if needed, marketing enhancements if required, or positioning shifts if necessary.
            </p>
            <p className="text-gray-700">
              The goal: Keep your listing competitive and moving toward sale, not sitting stagnant hoping something changes. With weekly updates and real-time adjustments, your home stays active and responsive to market conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Full Transparency on Performance
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Jan provides complete transparency on what's working, what's not, and exactly what needs to change. No sugar-coating, no excuses - just honest communication about your listing's performance.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What's Working</h3>
              <p className="text-gray-700">Clear identification of marketing channels, pricing strategies, and positioning that are attracting buyer interest and generating showings.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What's Not Working</h3>
              <p className="text-gray-700">Honest assessment of marketing approaches, pricing levels, or positioning that aren't generating desired buyer response.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What Needs to Change</h3>
              <p className="text-gray-700">Specific recommendations for adjustments: price reductions, marketing enhancements, staging improvements, or positioning shifts needed to improve results.</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Reality Check</h3>
            <p className="text-gray-700 mb-3">
              Dr. Jan treats every listing like her own investment property - because reputation matters more than any single commission. She won't let your listing sit with excuses or promises that never materialize.
            </p>
            <p className="text-gray-700">
              When communication breaks down, listings fail. With Dr. Jan's weekly updates, 24/7 accessibility, and strategic pivots, your listing stays active and responsive. No radio silence, no excuses - just consistent communication that drives results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Other Firms Have Communication Issues
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Realty ONE Group</h3>
              <p className="text-gray-700">1,200 agents means diluted broker support and inconsistent communication standards. Your listing may get lost in volume with limited individual attention.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simply Vegas</h3>
              <p className="text-gray-700">Smaller firm means better than mega-brokerages, but lacks BHHS systematic accountability and communication protocols that ensure consistent updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">eXp Realty</h3>
              <p className="text-gray-700">Virtual structure makes it harder to get face-time. Relationship feels transactional rather than consultative partnership, leading to communication gaps.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Urban Nest/Real</h3>
              <p className="text-gray-700">Merger chaos means agents distracted by transition, uncertain communication protocols during integration period. May lack consistency during merger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Proactive Communication?</h2>
          <p className="text-xl mb-8 text-purple-100">If your home didn't sell due to poor communication, get weekly updates and 24/7 accessibility that keeps your listing moving.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-purple-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-purple-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-950 transition-colors">Get Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

