'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brokerage Comparison: Why BHHS + Dr. Jan Beats the Competition
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl">
            Side-by-side comparison of what each major Las Vegas brokerage delivers - and why Berkshire Hathaway HomeServices with Dr. Jan Duffy is the clear choice for expired listings.
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
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Complete Brokerage Comparison
          </h2>
          <div className="mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Factor</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-gray-900 bg-blue-50">BHHS + Dr. Jan</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-gray-900">Realty ONE</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-gray-900">Simply Vegas</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-gray-900">eXp Realty</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-gray-900">Urban Nest/Real</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">National Marketing</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">✅ Fortune 100</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ Regional only</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ Boutique local</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Virtual only</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Transition unclear</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Pricing Expertise</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">✅ PhD + 30 yrs</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Varies by agent</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Luxury inflated</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Inconsistent</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅ Good luxury pricing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Communication</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">✅ 24/7 + weekly</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Agent-dependent</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅ Better than big firms</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ Virtual barriers</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Merger uncertainty</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Agent Count</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">900+ (resources)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">1,200+ (diluted)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">600 (selective)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">400-600 (transactional)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">400 (newly merged)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Track Record</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">#1 Luxury share</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">#1 Overall volume</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">#3 Volume, growing</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">#4 Volume</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Recently merged</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Luxury Network</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">✅ 50 states + intl</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ Regional focus</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ Local network only</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Weak luxury connections</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Merger transition</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Premium Portals</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">✅ WSJ, NYT access</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ No premium access</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ No premium access</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌ No premium access</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">⚠️ Uncertain access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Each Firm Falls Short for Expired Listings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Realty ONE Group</h3>
              <p className="text-gray-700 mb-3"><strong>Strength:</strong> #1 overall volume, strong local presence</p>
              <p className="text-gray-700 mb-3"><strong>Weakness for Expired:</strong> 1,200 agents = diluted support, inconsistent standards, purely regional marketing. May overprice to win listings.</p>
              <p className="text-gray-700">Not ideal for expired listings needing focused attention and institutional marketing power.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simply Vegas</h3>
              <p className="text-gray-700 mb-3"><strong>Strength:</strong> Boutique luxury focus, better communication than big firms</p>
              <p className="text-gray-700 mb-3"><strong>Weakness for Expired:</strong> No national marketing, limited to 600-agent network, luxury pricing often inflated. Can't match BHHS institutional reach.</p>
              <p className="text-gray-700">Good for local luxury, but lacks national/international marketing that turns expired listings around.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">eXp Realty</h3>
              <p className="text-gray-700 mb-3"><strong>Strength:</strong> Virtual model, lower overhead</p>
              <p className="text-gray-700 mb-3"><strong>Weakness for Expired:</strong> Virtual barriers limit face-time for tough conversations, weak luxury connections, no print/broadcast advertising. Transactional feel.</p>
              <p className="text-gray-700">Not ideal for expired listings needing proactive communication and premium marketing channels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Urban Nest/Real</h3>
              <p className="text-gray-700 mb-3"><strong>Strength:</strong> Good luxury pricing track record</p>
              <p className="text-gray-700 mb-3"><strong>Weakness for Expired:</strong> Recently merged = uncertainty, agents distracted by transition, unclear communication protocols. Merger chaos means inconsistent service.</p>
              <p className="text-gray-700">Too much uncertainty during merger transition - not ideal for expired listings needing immediate attention.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why BHHS + Dr. Jan Wins for Expired Listings
          </h2>
          <div className="bg-indigo-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Complete Package</h3>
            <p className="text-gray-700 mb-4">
              Berkshire Hathaway HomeServices with Dr. Jan Duffy delivers what expired listings need most: institutional marketing power, pricing mastery, and proactive communication that no single competitor can match.
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 font-bold">✓</span>
                <span><strong>National marketing:</strong> Fortune 100 brand recognition reaches buyers other firms can't access</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 font-bold">✓</span>
                <span><strong>Pricing expertise:</strong> PhD-level analysis + 30 years Vegas experience ensures accurate pricing from day one</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 font-bold">✓</span>
                <span><strong>Proactive communication:</strong> Weekly updates, 24/7 accessibility, strategic pivots keep listing moving</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 font-bold">✓</span>
                <span><strong>Luxury network:</strong> 900+ agents, 50-state network, international referrals</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 font-bold">✓</span>
                <span><strong>Premium portals:</strong> Wall Street Journal, NYT Real Estate access that regional firms can't match</span>
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">
              While competitors excel in one area, BHHS + Dr. Jan delivers all three critical advantages that expired listings need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Choose the Winning Team?</h2>
          <p className="text-xl mb-8 text-indigo-100">If your home didn't sell, choose the brokerage with institutional power, pricing mastery, and proactive communication.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-indigo-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-950 transition-colors">Compare Your Options</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

