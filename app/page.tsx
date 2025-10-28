'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Homepage() {
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with follow up boss API
    console.log('Form submitted:', { address, name, email, phone })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Didn't Sell? Let's Sell It in 30 Days
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Las Vegas Real Estate Expert | Turning Expired Listings Into Sold Properties
          </p>
          
          {/* Quick Lead Capture Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Home Analysis</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Property Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Your Free Analysis
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              By submitting, you agree to be contacted about your property analysis
            </p>
          </form>
        </div>
      </section>

      {/* Why Listings Expire Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Homes Don't Sell
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="text-red-600 text-5xl mb-4">🚫</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Wrong Price</h3>
              <p className="text-gray-700">
                Listings priced above market value sit unsold while correctly priced homes sell quickly. We'll show you exactly where to price your home.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="text-yellow-600 text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Poor Marketing</h3>
              <p className="text-gray-700">
                Professional photography, staging, and targeted marketing make all the difference. We bring buyers to YOUR home, not just to the market.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-blue-600 text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Bad Timing</h3>
              <p className="text-gray-700">
                Market timing matters. We'll help you understand when to list, when to adjust, and when to wait for better conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Proof */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Proven Results for Homes That Didn't Sell
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">47</div>
              <p className="text-xl text-gray-700">Expired Listings Sold in 2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">32</div>
              <p className="text-xl text-gray-700">Average Days to Sale</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">96%</div>
              <p className="text-xl text-gray-700">Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Las Vegas Specialists
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/neighborhoods/summerlin" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-64 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold text-white">Summerlin</h3>
              </div>
            </Link>
            <Link href="/neighborhoods/henderson" className="group">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 h-64 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold text-white">Henderson</h3>
              </div>
            </Link>
            <Link href="/neighborhoods/downtown" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 h-64 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold text-white">Downtown</h3>
              </div>
            </Link>
            <Link href="/neighborhoods/north-las-vegas" className="group">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 h-64 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <h3 className="text-2xl font-bold text-white">North Las Vegas</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <p className="text-2xl italic text-gray-700 mb-6">
              "My listing had been on the market for 6 months with zero offers. Dr. Jan came in, adjusted the pricing strategy, got professional staging, and my home sold in 21 days - at asking price! I wish I had called her first."
            </p>
            <div className="flex items-center justify-center">
              <div className="text-left">
                <p className="font-bold text-gray-900">Mary Thompson</p>
                <p className="text-gray-600">Summerlin Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Sell? Let's Talk Today
          </h2>
          <p className="text-xl mb-8">
            Free consultation. No pressure. Just results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17022221964"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Janet Duffy</h3>
            <p>Your trusted Las Vegas real estate expert</p>
            <p className="mt-4">Office: Las Vegas, NV</p>
            <p>Phone: (702) 222-1964</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/neighborhoods" className="hover:underline">Neighborhoods</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/buy" className="hover:underline">Buy a Home</Link></li>
              <li><Link href="/sell" className="hover:underline">Sell Your Home</Link></li>
              <li><Link href="/expired-listings" className="hover:underline">Expired Listings</Link></li>
              <li><Link href="/contact" className="hover:underline">Get Home Value</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dr. Janet Duffy - Las Vegas Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

