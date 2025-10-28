'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function BestNeighborhoodsLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Best Neighborhoods in Las Vegas: Comprehensive Guide to Top Communities',
    description: 'Discover the best neighborhoods in Las Vegas for luxury homes, family living, and value. Expert insights on Summerlin, Henderson, North Las Vegas, and Las Vegas\'s most desirable communities.',
    datePublished: '2024-07-05',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Best Neighborhoods in Las Vegas: Comprehensive Guide to Top Communities
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl">
            Discover the best neighborhoods in Las Vegas for luxury homes, family living, and value. Expert insights on Summerlin, Henderson, North Las Vegas, and Las Vegas's most desirable communities.
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
            Top Las Vegas Neighborhoods for Different Lifestyles
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas offers diverse neighborhoods catering to different lifestyles: master-planned communities for families, luxury enclaves for upscale living, value-focused areas for affordability, and urban centers for city living. Here are the best neighborhoods in Las Vegas based on lifestyle preferences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Summerlin</h3>
              <p className="text-gray-700 mb-3">
                <strong>Best for:</strong> Master-planned living, golf, upscale families
              </p>
              <p className="text-gray-700 mb-3">
                Summerlin represents Las Vegas's premier master-planned community: golf courses, top-rated schools, Red Rock Canyon proximity, and cohesive neighborhood design. Premium positioning with established quality.
              </p>
              <Link href="/neighborhoods/summerlin" className="text-purple-600 hover:text-purple-800 font-semibold">Explore Summerlin →</Link>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Henderson</h3>
              <p className="text-gray-700 mb-3">
                <strong>Best for:</strong> Value, family-friendly, growing communities
              </p>
              <p className="text-gray-700 mb-3">
                Henderson offers exceptional value with quality schools, family-friendly communities, and diverse housing options. Fast-growing city with great amenities and affordable pricing compared to premium areas.
              </p>
              <Link href="/neighborhoods/henderson" className="text-green-600 hover:text-green-800 font-semibold">Explore Henderson →</Link>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">North Las Vegas</h3>
              <p className="text-gray-700 mb-3">
                <strong>Best for:</strong> New construction, affordability, growth potential
              </p>
              <p className="text-gray-700 mb-3">
                North Las Vegas features new construction, master-planned communities, and affordable housing options. Growing area with family amenities and excellent value for first-time buyers and families.
              </p>
              <Link href="/neighborhoods/north-las-vegas" className="text-pink-600 hover:text-pink-800 font-semibold">Explore North Las Vegas →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Best Neighborhoods for Luxury Homes
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas luxury neighborhoods offer exclusive amenities, premium positioning, and upscale living: master-planned benefits, golf courses, mountain views, gated communities, and luxury lifestyle features.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Summerlin Luxury Communities</h3>
              <p className="text-gray-700 mb-3">
                Summerlin offers luxury master-planned living: The Trails with trail access, The Foothills with mountain views, Sun City for active adults, and premium communities with golf courses and Red Rock Canyon proximity.
              </p>
              <p className="text-gray-700 mb-3">
                Luxury Summerlin homes command premium prices for master-planned benefits, established quality, mountain views, and upscale amenities. Summerlin positioning emphasizes luxury lifestyle and community excellence.
              </p>
              <Link href="/las-vegas-luxury-homes" className="text-rose-600 hover:text-rose-800 font-semibold">Luxury Homes Guide →</Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Henderson Luxury Enclaves</h3>
              <p className="text-gray-700 mb-3">
                Henderson features exclusive luxury communities: MacDonald Highlands, Ascaya, Seven Hills, Lake Las Vegas waterfront properties, and Green Valley premium neighborhoods. Gated communities with custom luxury homes.
              </p>
              <p className="text-gray-700 mb-3">
                Henderson luxury positioning emphasizes exclusivity, privacy, custom architecture, and premium amenities. These communities offer luxury lifestyle with Henderson value advantages and growing amenities.
              </p>
              <Link href="/neighborhoods/henderson/lake-las-vegas" className="text-rose-600 hover:text-rose-800 font-semibold">Lake Las Vegas →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Best Neighborhoods for Value and Affordability
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas offers excellent value in established neighborhoods and growing communities with new construction. These areas provide quality living at affordable prices compared to premium Las Vegas neighborhoods.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Value-Focused Neighborhoods</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>North Las Vegas:</strong> New construction, affordable pricing, family amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Henderson:</strong> Established quality with value pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Spring Valley:</strong> Central location, established neighborhoods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Enterprise:</strong> West side value with new construction</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why These Neighborhoods Offer Value</h3>
              <p className="text-gray-700 mb-3">
                Value-focused Las Vegas neighborhoods provide quality living at affordable prices: new construction with modern features, established neighborhoods with proven quality, family-friendly amenities, and growing communities with future appreciation potential.
              </p>
              <p className="text-gray-700 mb-3">
                These areas offer Las Vegas lifestyle without premium pricing: good schools, family amenities, convenient location, and quality housing options that provide excellent value for first-time buyers and families.
              </p>
              <Link href="/neighborhoods" className="text-rose-600 hover:text-rose-800 font-semibold">Explore All Neighborhoods →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Best Las Vegas Neighborhood</h2>
          <p className="text-xl mb-8 text-rose-100">Expert guidance on Las Vegas neighborhoods and home buying.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-rose-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-rose-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-rose-900 transition-colors">Neighborhood Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

