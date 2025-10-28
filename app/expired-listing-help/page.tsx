'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import FAQSection from '@/components/faq-section'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'
import { getServiceSchemaForPage } from '@/lib/services'

export default function ExpiredListingHelpPage() {
  const articleSchema = getArticleSchema({
    headline: 'Free Help for Expired Listings - Dr. Janet Duffy',
    description: 'Your listing expired. What happens next? Get expert guidance and a proven plan to sell your home successfully.',
    datePublished: '2024-01-25',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  const serviceSchema = getServiceSchemaForPage('EXPIRED_LISTING_ASSISTANCE')

  const faqs = [
    {
      question: 'Why did my listing expire?',
      answer: 'Most expired listings fail for specific reasons: pricing above market value, insufficient marketing reach, poor presentation, or lack of buyer interest. Dr. Jan\'s diagnostic analysis reviews showing activity, buyer feedback, and market conditions to identify what specifically prevented your sale.'
    },
    {
      question: 'What should I do now that my listing expired?',
      answer: 'Start with honest analysis of what didn\'t work. Dr. Jan offers free expired listing analysis to review what happened and create a strategic plan for successful relisting. Avoid relisting with the same approach or making random changes - diagnosis first, then targeted improvements.'
    },
    {
      question: 'How long does it take to sell after relisting?',
      answer: 'With targeted improvements addressing identified issues, expired listings typically sell in 30-45 days. Dr. Jan\'s systematic approach addresses specific problems rather than hoping market conditions changed, which creates faster results.'
    },
    {
      question: 'What if my home needs improvements before relisting?',
      answer: 'Dr. Jan\'s analysis identifies which improvements add the most value for cost. Not every expired listing needs major updates - sometimes pricing adjustments, better marketing, or presentation improvements are sufficient. Her strategic plan outlines necessary improvements with expected impact.'
    },
    {
      question: 'How is relisting different from the first listing attempt?',
      answer: 'Successful relisting starts with understanding what didn\'t work, then making targeted improvements. Dr. Jan reviews fresh market data, analyzes what prevented the first sale, and creates a strategic plan addressing specific issues rather than repeating the same approach.'
    },
    {
      question: 'Is there really free help for expired listings?',
      answer: 'Yes, Dr. Jan offers free expired listing analysis with no obligation. Her consultation reviews what happened, identifies issues, and outlines a strategic plan for successful relisting. This diagnostic approach helps you make informed decisions about next steps.'
    }
  ]

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <StructuredDataScript data={serviceSchema} id="service-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-800 to-pink-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Free Help for Expired Listings - Dr. Janet Duffy</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">Your listing expired. What happens next? Get expert guidance and a proven plan to sell your home successfully.</p>
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding What Happens When Your Listing Expires</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Your listing agreement ended, and your home didn't sell. This doesn't mean your home is unmarketable - it means the previous approach didn't work. Understanding what happened and what to do next is essential for successful relisting.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Why Most Listings Expire</h3><p className="text-gray-700 mb-3">Most expired listings fail for specific reasons: pricing above market value, insufficient marketing reach, poor presentation, or lack of buyer interest at listing price. Understanding which issue affected your listing helps create targeted solutions.</p><p className="text-gray-700 mb-3">Your expired listing represents data points: showing activity, buyer feedback, days on market, and price reductions tell a story about what prevented sale. This diagnostic information guides strategic improvements for successful relisting.</p><p className="text-gray-700">Dr. Jan analyzes what happened with your expired listing specifically: showing activity patterns, buyer feedback received, competitive positioning, and market conditions during listing period. This analysis identifies issues creating targeted fixes.</p></div>
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">What Changed Since Your Listing Expired</h3><p className="text-gray-700 mb-3">Market conditions, comparable sales, competition, and buyer sentiment shift continuously. Your expired listing represents a specific point in time. Understanding market changes since expiration informs pricing and marketing for relisting.</p><p className="text-gray-700 mb-3">Recent comparable sales, current competition, and buyer activity patterns provide fresh market intelligence your expired listing lacked. This updated market understanding enables accurate pricing and effective marketing.</p><p className="text-gray-700">Dr. Jan reviews current market conditions, recent comps, active competition, and buyer sentiment to inform your relisting strategy. Her approach uses fresh market data that your expired listing didn't have access to.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Options After Listing Expiration</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">When your listing expires, you have decisions to make. Understanding your options and choosing the right path forward determines whether your relisting succeeds or faces the same outcome.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Relist With Same Approach</h3><p className="text-gray-700">Some sellers relist using identical approach hoping market conditions changed. Without fixing issues that caused expiration, this usually results in repeated failure and frustration. Diagnosis and improvement are essential.</p></div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Change Everything</h3><p className="text-gray-700">Some sellers panic and change everything without understanding what caused expiration. This shotgun approach wastes money on unnecessary fixes while potentially missing actual issues that prevented sale.</p></div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Relisting</h3><p className="text-gray-700">Successful relisting starts with honest analysis of what didn't work, then systematic fixes targeting specific issues. This diagnostic approach creates targeted improvements with clear expectations for results.</p></div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200"><h3 className="text-2xl font-bold mb-4 text-gray-900">The Diagnostic Approach</h3><p className="text-gray-700 mb-3">Expired listings that successfully sell begin with understanding what caused expiration: pricing issues, marketing gaps, presentation problems, or buyer targeting mistakes. This diagnostic analysis guides strategic improvements.</p><p className="text-gray-700 mb-3">Dr. Jan specializes in expired listings and uses diagnostic approach to identify specific issues that prevented your sale. Her analysis reviews showing activity, buyer feedback, competitive positioning, and market conditions to create targeted improvement strategy.</p><p className="text-gray-700">Her relisting strategy addresses identified issues with targeted fixes rather than generic changes. This precision approach creates results while conserving budget on unnecessary improvements that wouldn't have impacted sale.</p></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">How Dr. Jan Helps Expired Listings Sell Successfully</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Successful expired listing relisting requires systematic approach: diagnostic analysis, targeted improvements, and strategic marketing. Dr. Janet Duffy brings proven expertise to help your expired listing achieve successful sale.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Diagnostic Analysis Process</h3><p className="text-gray-700 mb-3">Dr. Jan reviews your expired listing comprehensively: showing activity patterns, buyer feedback received, price adjustments attempted, competitive analysis, and market conditions during listing period. This diagnostic analysis identifies specific issues.</p><p className="text-gray-700 mb-3">Her analysis looks at data that generic agents miss: showing activity quality versus quantity, buyer feedback themes, competition performance comparison, and market timing issues that affected your listing specifically.</p><p className="text-gray-700">This diagnostic approach creates targeted improvement plan addressing actual issues rather than guessing what went wrong. Understanding what prevented sale enables systematic fixes with clear expected results.</p></div>
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Relisting Plan</h3><p className="text-gray-700 mb-3">Based on diagnostic analysis, Dr. Jan creates strategic relisting plan addressing identified issues: pricing strategy based on current market data, marketing improvements targeting right buyers, and presentation enhancements creating competitive advantage.</p><p className="text-gray-700 mb-3">Her relisting strategy includes timeline, costs, expected improvements, and anticipated results. This transparency helps you make informed decisions about investing in staging, photography, or marketing to maximize both sale price and speed to closing.</p><p className="text-gray-700">The strategic plan targets specific improvements with expected impact rather than generic changes hoping something works. This precision approach creates results while managing costs effectively.</p></div>
          </div>
          <div className="bg-red-50 p-8 rounded-lg"><h3 className="text-2xl font-bold mb-4 text-gray-900">Success with Expired Listings</h3><p className="text-gray-700 mb-3">Dr. Jan's expired listing specialty means she's helped dozens of homeowners successfully relist and sell after initial expiration. Her diagnostic approach and strategic relisting strategies create results where generic approaches failed.</p><p className="text-gray-700 mb-3">Typical results for expired listings working with Dr. Jan: 30-45 days on market with strategic improvements, successful sales at competitive prices, and satisfied sellers who wished they'd started with her approach initially.</p><p className="text-gray-700">If your listing expired, likely reasons included pricing, marketing, presentation, or buyer targeting issues. Dr. Jan's diagnostic analysis identifies these issues specifically, then creates targeted solutions proven to work for expired listings seeking successful relisting.</p></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-red-800 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Free Expired Listing Analysis</h2>
          <p className="text-xl mb-8 text-red-100">Get expert analysis of what happened with your expired listing and a proven plan to sell successfully.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-red-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-red-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-900 transition-colors">Get Free Expired Listing Analysis</Link>
          </div>
        </div>
      </section>
      
      <FAQSection faqs={faqs} />
      </div>
    </>
  )
}

