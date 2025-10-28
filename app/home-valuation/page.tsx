'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import FAQSection from '@/components/faq-section'
import Breadcrumbs from '@/components/breadcrumbs'
import { getServiceSchemaForPage } from '@/lib/services'
import { BASE_URL } from '@/lib/schema'

export default function HomeValuationPage() {
  const serviceSchema = getServiceSchemaForPage('HOME_VALUATION')
  
  const faqs = [
    {
      question: 'How accurate is Dr. Jan\'s home valuation?',
      answer: 'Dr. Jan\'s valuations use comprehensive market analysis including recent comparable sales in your exact neighborhood, current competition, property-specific features, and market conditions. This analysis provides accurate pricing reflecting actual market value, not automated estimates.'
    },
    {
      question: 'How long does it take to get a home valuation?',
      answer: 'After you submit your property information, Dr. Jan conducts thorough research and typically provides your valuation analysis within 24-48 hours. The process includes comparable sales review, competition analysis, and strategic pricing recommendations.'
    },
    {
      question: 'What information do I need for a home valuation?',
      answer: 'Basic property information helps: address, square footage, bedrooms, bathrooms, year built, condition, and any unique features. The more details provided, the more accurate the valuation. Dr. Jan conducts additional research including comparable sales and market analysis.'
    },
    {
      question: 'Is the home valuation really free with no obligation?',
      answer: 'Yes, your free home valuation includes no obligation to list your property. Dr. Jan provides honest, accurate valuations because she believes informed sellers make better decisions, whether you\'re ready to sell now or planning for the future.'
    },
    {
      question: 'How is this different from online automated estimates?',
      answer: 'Automated estimates use algorithms that can\'t account for property condition, unique features, neighborhood nuances, or current market dynamics. Dr. Jan\'s professional valuation examines your specific property, recent comps, competition, and provides personalized pricing recommendations.'
    },
    {
      question: 'What does the valuation include?',
      answer: 'Your valuation includes comprehensive market analysis, comparable sales research, competition evaluation, and strategic price range recommendations based on different selling goals. This detailed information helps you make informed pricing and timing decisions.'
    }
  ]

  const [formData, setFormData] = useState({
    address: '',
    name: '',
    email: '',
    phone: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  return (
    <>
      <StructuredDataScript data={serviceSchema} id="service-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Free Home Value Analysis - Dr. Janet Duffy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Get accurate home value analysis for Las Vegas properties. Expert valuation insights to help you price competitively and sell successfully.</p>
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding Your Home's Current Market Value</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Accurate home valuation is essential for successful selling. Understanding your property's market value helps you price competitively, attract buyers, and sell efficiently. Get expert analysis of what your home is worth in today's Las Vegas market.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Market Analysis</h3><p className="text-gray-700 mb-3">Professional home valuation reviews recent comparable sales in your neighborhood, considers current market conditions, analyzes active competition, and evaluates your property's specific features and condition versus comparable properties.</p><p className="text-gray-700 mb-3">This comprehensive analysis goes beyond automated estimates to provide accurate pricing reflecting your specific home, neighborhood, condition, and current market dynamics in Las Vegas. Understanding accurate value informs smart selling decisions.</p><p className="text-gray-700">Dr. Jan's valuation approach examines recent sales of similar homes in your exact area, considers unique features affecting value, analyzes current competition you'll face, and provides price range reflecting multiple pricing strategies for successful sale.</p></div>
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Why Accurate Valuation Matters</h3><p className="text-gray-700 mb-3">Overpricing prevents sales while underpricing costs money. Accurate valuation positions your home competitively to attract buyers quickly while maximizing return. Understanding true market value enables informed pricing decisions.</p><p className="text-gray-700 mb-3">Properties priced too high sit unsold while correctly valued homes sell quickly. Properties priced too low attract quick offers but sacrifice thousands of dollars in lost equity. Professional valuation helps you find the pricing sweet spot.</p><p className="text-gray-700">Dr. Jan's valuation provides specific price range reflecting market reality, buyer psychology, competition analysis, and multiple pricing strategies. This informed approach helps you price competitively to sell efficiently at maximum value.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">What Your Free Home Valuation Includes</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Your free home valuation analysis includes comprehensive market review, comparable sales research, competition analysis, and strategic pricing recommendations for your Las Vegas property.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Comparable Sales Analysis</h3><p className="text-gray-700">Review of recent sales of similar homes in your neighborhood including size, condition, features, and final sale prices. This comparables research informs accurate pricing reflecting current market value.</p></div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Competition Evaluation</h3><p className="text-gray-700">Analysis of currently active listings competing with your home including pricing, features, condition, and marketing positioning. Understanding competition helps price your property advantageously.</p></div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200"><h3 className="text-xl font-bold mb-4 text-gray-900">Price Range Recommendation</h3><p className="text-gray-700">Professional recommendation for pricing range reflecting multiple strategies: quick sale pricing, competitive pricing, or premium positioning. This range helps you make informed pricing decisions.</p></div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200"><h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Pricing for Your Goals</h3><p className="text-gray-700 mb-3">Your home valuation includes strategic pricing recommendations based on your specific goals: timeline, market conditions, competition, and desired outcome. This strategic approach maximizes results whether you need quick sale or maximum price.</p><p className="text-gray-700 mb-3">Dr. Jan's valuation considers your timeline: need to sell quickly for relocation, job change, or life circumstances? Premium pricing strategy works for flexible timelines. Understanding your goals informs recommended pricing strategy.</p><p className="text-gray-700">Her valuation analysis provides specific price recommendations with expected outcomes: timeline to sale, likely buyer interest, and anticipated sale price range. This informed approach helps you make pricing decisions aligned with your specific selling goals.</p></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Get Your Free Home Value Analysis</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Professional home valuation helps you understand your property's true market value, price competitively, and make informed selling decisions. Get your free Las Vegas home value analysis from Dr. Janet Duffy today.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">Quick and Easy Process</h3><p className="text-gray-700 mb-3">Getting your free home valuation is simple: provide basic property information including address, square footage, bedrooms, bathrooms, condition, and any unique features. This information enables comprehensive market analysis for accurate valuation.</p><p className="text-gray-700 mb-3">Dr. Jan conducts thorough research including comparable sales, market trends, competition analysis, and neighborhood dynamics affecting your property value. This comprehensive approach provides accurate valuation reflecting current Las Vegas market.</p><p className="text-gray-700">Your valuation report includes specific price recommendations, comparable sales data, competition analysis, and strategic pricing strategies. This detailed information helps you make informed decisions about pricing, timing, and selling strategy for your home.</p></div>
            <div><h3 className="text-2xl font-bold mb-4 text-gray-900">No Obligation Analysis</h3><p className="text-gray-700 mb-3">Your free home valuation comes with no obligation to list your property. This professional analysis helps you understand market value whether you're ready to sell now, planning to sell soon, or just curious about your property's worth.</p><p className="text-gray-700 mb-3">Many homeowners use free valuations to time their sale, plan improvements that add value, or simply understand equity for financial planning. This valuable information comes at no cost and with no pressure to hire services.</p><p className="text-gray-700">Dr. Jan provides honest, accurate valuations without obligation because she believes informed sellers make better decisions. Whether you're ready to list today or months away, understanding your property's true market value is valuable information worth having.</p></div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg"><h3 className="text-2xl font-bold mb-4 text-gray-900">Why Professional Valuation Matters</h3><p className="text-gray-700 mb-3">Automated home value estimates use algorithms that can't account for property condition, unique features, neighborhood nuances, or current market dynamics affecting your specific home. Professional valuation provides accurate pricing reflecting actual market value.</p><p className="text-gray-700 mb-3">Dr. Jan's valuation examines your property specifically: condition, updates, unique features, lot characteristics, and location advantages that affect value. This personalized analysis provides accurate pricing unavailable from automated estimates.</p><p className="text-gray-700">Her comprehensive approach reviews comparable sales in your specific area, analyzes current competition you'll face, and provides pricing recommendations based on market reality rather than generic algorithms. This accuracy helps you price competitively for successful sale.</p></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Get Your Free Home Value Today</h2>
          <p className="text-xl mb-8 text-gray-700 text-center">Provide your property details for an accurate Las Vegas market analysis.</p>
          
          <form onSubmit={async (e) => {
            e.preventDefault()
            setIsSubmitting(true)
            setSubmitStatus('idle')

            try {
              const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  ...formData,
                  message: `Home Valuation Request: ${formData.bedrooms}BR/${formData.bathrooms}BA, ${formData.squareFeet} sq ft, Built ${formData.yearBuilt}`,
                  source: 'Home Valuation Page'
                })
              })

              if (response.ok) {
                setSubmitStatus('success')
                setFormData({ address: '', name: '', email: '', phone: '', bedrooms: '', bathrooms: '', squareFeet: '', yearBuilt: '' })
              } else {
                setSubmitStatus('error')
              }
            } catch (error) {
              setSubmitStatus('error')
            } finally {
              setIsSubmitting(false)
            }
          }} className="space-y-6 bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="val-address" className="block text-sm font-semibold mb-2 text-gray-900">Property Address *</label>
                <input id="val-address" type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="val-name" className="block text-sm font-semibold mb-2 text-gray-900">Your Name *</label>
                <input id="val-name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="val-email" className="block text-sm font-semibold mb-2 text-gray-900">Email *</label>
                <input id="val-email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="val-phone" className="block text-sm font-semibold mb-2 text-gray-900">Phone *</label>
                <input id="val-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="val-bedrooms" className="block text-sm font-semibold mb-2 text-gray-900">Bedrooms</label>
                <input id="val-bedrooms" type="number" min="1" max="10" value={formData.bedrooms} onChange={(e) => setFormData({...formData, bedrooms: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="val-bathrooms" className="block text-sm font-semibold mb-2 text-gray-900">Bathrooms</label>
                <input id="val-bathrooms" type="number" min="1" max="10" step="0.5" value={formData.bathrooms} onChange={(e) => setFormData({...formData, bathrooms: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="val-sqft" className="block text-sm font-semibold mb-2 text-gray-900">Square Feet</label>
                <input id="val-sqft" type="number" min="100" value={formData.squareFeet} onChange={(e) => setFormData({...formData, squareFeet: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="val-year" className="block text-sm font-semibold mb-2 text-gray-900">Year Built</label>
                <input id="val-year" type="number" min="1900" max={new Date().getFullYear()} value={formData.yearBuilt} onChange={(e) => setFormData({...formData, yearBuilt: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                <p className="font-semibold">Thank you! Dr. Jan will analyze your property and contact you with your home value estimate.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                <p className="font-semibold">Error submitting request. Please call (702) 222-1964.</p>
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-colors">
              {isSubmitting ? 'Submitting...' : 'Get My Free Home Valuation'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8 text-blue-100">Or call directly for immediate assistance</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-blue-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors">Contact Form</Link>
          </div>
        </div>
      </section>
      
      <FAQSection faqs={faqs} />
      </div>
    </>
  )
}

