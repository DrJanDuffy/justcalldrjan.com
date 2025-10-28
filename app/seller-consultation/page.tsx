'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import FAQSection from '@/components/faq-section'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'
import { getServiceSchemaForPage } from '@/lib/services'

export default function SellerConsultationPage() {
  const articleSchema = getArticleSchema({
    headline: 'Free Seller Consultation - Expert Help for Homes That Didn\'t Sell',
    description: 'Schedule your free consultation with Dr. Janet Duffy to analyze why your home didn\'t sell and create a proven strategy for successful relisting.',
    datePublished: '2024-03-01',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  const serviceSchema = getServiceSchemaForPage('SELLER_REPRESENTATION')

  const faqs = [
    {
      question: 'What is included in the free consultation?',
      answer: 'Your free consultation includes comprehensive analysis of why your home didn\'t sell, review of showing activity and buyer feedback, market analysis and competitive positioning, strategic relisting plan with timeline and costs, and pricing recommendations based on current market data.'
    },
    {
      question: 'How long does the consultation take?',
      answer: 'The consultation typically takes 60-90 minutes. Dr. Jan reviews your property, analyzes market conditions, and creates a detailed strategic plan. She ensures you understand what went wrong and exactly how to fix it.'
    },
    {
      question: 'Is there really no obligation after the consultation?',
      answer: 'Yes, the consultation is completely free with no obligation. Dr. Jan believes informed sellers make better decisions, whether you\'re ready to list now or planning for the future. Many homeowners use the consultation to understand market conditions and plan improvements.'
    },
    {
      question: 'Can the consultation be done virtually or by phone?',
      answer: 'Yes, Dr. Jan offers in-person, virtual, or phone consultations based on your preference. Virtual consultations include screen sharing of market data and competitive analysis. Phone consultations work well for initial discussions and can be followed by in-person property visits.'
    },
    {
      question: 'What should I bring to the consultation?',
      answer: 'Bring information about your previous listing: showing activity, buyer feedback received, any price reductions attempted, and your agent\'s communication. Dr. Jan will review your property details, neighborhood, and market position during the consultation.'
    },
    {
      question: 'What happens after the consultation?',
      answer: 'After the consultation, Dr. Jan provides a written strategic plan outlining identified issues, recommended improvements, pricing strategy, marketing approach, timeline, and expected results. You decide next steps with full information about how to successfully relist your property.'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredTime: '',
    consultationType: 'virtual'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `Consultation Request: ${formData.consultationType}, Preferred Time: ${formData.preferredTime}`,
          source: 'Seller Consultation Page'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', address: '', preferredTime: '', consultationType: 'virtual' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <StructuredDataScript data={serviceSchema} id="service-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Free Seller Consultation - Expert Help for Homes That Didn't Sell</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Schedule your free consultation with Dr. Janet Duffy to analyze why your home didn't sell and create a proven strategy for successful relisting.</p>
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">What Your Free Consultation Includes</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Your free consultation with Dr. Janet Duffy provides comprehensive analysis of why your home didn't sell and a proven strategy for successful relisting. This diagnostic approach identifies specific issues and creates targeted solutions.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Diagnostic Analysis</h3>
              <p className="text-gray-700">Comprehensive review of your expired listing: showing activity patterns, buyer feedback themes, pricing strategy analysis, and competitive positioning that prevented successful sale.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Market Analysis</h3>
              <p className="text-gray-700">Current market conditions review, recent comparable sales research, active competition evaluation, and strategic pricing recommendations based on fresh market data.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Plan</h3>
              <p className="text-gray-700">Detailed relisting strategy outlining identified issues, recommended improvements, marketing approach, timeline expectations, and expected results for successful sale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Schedule a Consultation Before Relisting</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">Understanding why your home didn't sell is essential before relisting. A consultation identifies specific issues and creates a strategic plan rather than repeating the same approach or making random changes.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diagnostic Approach</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan's consultation uses diagnostic analysis to identify specific issues that prevented your sale: pricing problems, marketing gaps, presentation issues, or buyer targeting mistakes. This precision approach ensures the right problems get addressed.
              </p>
              <p className="text-gray-700 mb-3">
                Rather than guessing what went wrong or trying everything hoping something works, the consultation reviews data: showing activity, buyer feedback, competitive positioning, and market conditions to identify root causes.
              </p>
              <p className="text-gray-700">
                This diagnostic approach creates targeted solutions with clear expectations. You understand exactly what needs fixing and why, enabling informed decisions about improvements, pricing, and marketing strategy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Planning</h3>
              <p className="text-gray-700 mb-3">
                The consultation creates a comprehensive strategic plan outlining identified issues, recommended fixes, timeline, costs, and expected results. This transparent approach helps you make informed decisions about investing in improvements or marketing.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan's strategic plan targets specific improvements with expected impact rather than generic changes. This precision approach creates results while managing costs effectively and ensuring smart investment decisions.
              </p>
              <p className="text-gray-700">
                The strategic plan provides roadmap for success: what gets fixed, how it gets fixed, when improvements happen, what costs are involved, and what results to expect. This clarity enables confident relisting decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Schedule Your Free Consultation</h2>
          <p className="text-xl mb-8 text-gray-700 text-center">Get expert analysis of why your home didn't sell and a proven strategy for successful relisting.</p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="consult-name" className="block text-sm font-semibold mb-2 text-gray-900">Your Name *</label>
                <input id="consult-name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="consult-email" className="block text-sm font-semibold mb-2 text-gray-900">Email *</label>
                <input id="consult-email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="consult-phone" className="block text-sm font-semibold mb-2 text-gray-900">Phone *</label>
                <input id="consult-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="consult-type" className="block text-sm font-semibold mb-2 text-gray-900">Consultation Type</label>
                <select id="consult-type" value={formData.consultationType} onChange={(e) => setFormData({...formData, consultationType: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="virtual">Virtual (Video Call)</option>
                  <option value="phone">Phone Consultation</option>
                  <option value="in-person">In-Person</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="consult-address" className="block text-sm font-semibold mb-2 text-gray-900">Property Address</label>
                <input id="consult-address" type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="123 Main St, Las Vegas, NV" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="consult-time" className="block text-sm font-semibold mb-2 text-gray-900">Preferred Time</label>
                <input id="consult-time" type="text" value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g., Weekday mornings, Evening after 6pm" />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                <p className="font-semibold">Thank you! Dr. Jan will contact you soon to schedule your consultation.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                <p className="font-semibold">Error submitting request. Please call (702) 222-1964.</p>
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-colors">
              {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8 text-blue-100">Or call directly for immediate scheduling</p>
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

