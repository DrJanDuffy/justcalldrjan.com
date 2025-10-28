'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with Follow Up Boss API
    console.log('Form submitted:', formData)
    alert('Thank you! Dr. Jan will contact you soon.')
    setFormData({ name: '', email: '', phone: '', address: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Dr. Janet Duffy: Let's Talk About Selling Your Home
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Your home didn't sell? Let's change that. Reach out today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Get In Touch Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form or call directly. Dr. Janet Duffy responds quickly to help homeowners whose properties didn't sell successfully.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Property Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="123 Main St, Las Vegas, NV"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your situation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+17025667890" className="text-blue-600 hover:text-blue-800">
                    (702) 566-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:janet@justcalldrjan.com" className="text-blue-600 hover:text-blue-800">
                    janet@justcalldrjan.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">Las Vegas, NV</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Prefer to Text?</h3>
              <p className="text-gray-700 mb-4">
                Send a quick text to (702) 566-7890 and we'll respond right away.
              </p>
              <a
                href="sms:+17025667890"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Text Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

