'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function SunCityPage() {
  const articleSchema = getArticleSchema({
    headline: 'Sun City Summerlin: Active Adult Homes Expert Help',
    description: 'Specialized help for Sun City Summerlin homes that didn\'t sell. Expert guidance for successful home sales in Summerlin\'s premier active adult community.',
    datePublished: '2024-05-10',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sun City Summerlin: Active Adult Homes Expert Help
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Specialized help for Sun City Summerlin homes that didn't sell. Expert guidance for successful home sales in Summerlin's premier active adult community.
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
            Understanding Sun City Summerlin Real Estate Market
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Sun City Summerlin represents Summerlin's premier active adult community, designed specifically for residents 55 and older with golf courses, recreational facilities, and age-restricted lifestyle amenities. For homeowners whose properties didn't sell, understanding Sun City's active adult positioning is essential for successful relisting.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Active Adult Community Benefits</h3>
              <p className="text-gray-700 mb-3">
                Sun City offers age-restricted community benefits: golf courses, fitness centers, clubhouses, and recreational programs designed specifically for active adults seeking maintenance-free living with lifestyle amenities.
              </p>
              <p className="text-gray-700 mb-3">
                Many expired listings in Sun City failed to communicate active adult advantages effectively. Properties positioned generically miss community benefits that define Sun City market value within Summerlin.
              </p>
              <p className="text-gray-700">
                Dr. Jan helps you showcase Sun City active adult benefits: golf access, recreational facilities, and age-restricted lifestyle that Sun City buyers specifically value within Summerlin.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Maintenance-Free Living Positioning</h3>
              <p className="text-gray-700 mb-3">
                Sun City attracts active adults seeking low-maintenance lifestyles with HOA-managed landscaping and exterior maintenance. This positioning requires emphasizing maintenance-free benefits over property details.
              </p>
              <p className="text-gray-700 mb-3">
                Your expired listing likely used generic Summerlin marketing that didn't specifically target active adult buyers seeking maintenance-free living. Dr. Jan's approach targets active adults specifically with Sun City messaging.
              </p>
              <p className="text-gray-700">
                Her marketing strategy emphasizes Sun City active adult benefits: maintenance-free living, recreational amenities, and age-restricted community that active adults seeking Summerlin specifically want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Sun City Homes Don't Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Sun City real estate has specific characteristics that can challenge sellers who don't understand this active adult community's unique market dynamics.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Missing Active Adult Benefits</h3>
              <p className="text-gray-700">
                Sun City's biggest advantage is active adult community benefits. Listings that don't highlight golf access, recreational facilities, and maintenance-free living miss value that defines Sun City appeal.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Generic Summerlin Positioning</h3>
              <p className="text-gray-700">
                Marketing Sun City as generic Summerlin misses unique selling points. Buyers specifically choosing Sun City want active adult benefits - generic Summerlin marketing doesn't communicate this effectively.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Wrong Buyer Targeting</h3>
              <p className="text-gray-700">
                Sun City attracts active adults 55+ seeking maintenance-free living. Marketing to generic Summerlin buyers who don't qualify or want active adult benefits wastes advertising while missing interested buyers.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Sun City Positioning Challenge</h3>
            <p className="text-gray-700 mb-3">
              Sun City homes that didn't sell often failed to communicate active adult community benefits and maintenance-free lifestyle advantages that define this sub-community's value within Summerlin.
            </p>
            <p className="text-gray-700 mb-3">
              Dr. Jan specializes in Sun City Summerlin real estate and understands how to position active adult homes to highlight community benefits and lifestyle amenities that Sun City buyers specifically seek.
            </p>
            <p className="text-gray-700">
              Her marketing targets Sun City buyers specifically: active adults 55+ seeking maintenance-free living, golf enthusiasts wanting course access, and those valuing recreational facilities that Sun City uniquely offers within Summerlin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How Dr. Jan Helps Sun City Homes Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Sun City real estate requires understanding of active adult positioning and maintenance-free lifestyle benefits. Dr. Janet Duffy brings specialized Sun City knowledge to help your home achieve successful sale on relisting.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sun City Active Adult Expertise</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan understands Sun City unique value: active adult benefits, golf access, and maintenance-free positioning that community properties command. She creates marketing emphasizing these Sun City advantages buyers specifically seek.
              </p>
              <p className="text-gray-700 mb-3">
                She tracks Sun City comps specifically, watching how active adult properties, golf course homes, and maintenance-free positioning perform against generic Summerlin listings. This Sun City-specific expertise ensures accurate pricing.
              </p>
              <p className="text-gray-700">
                Her marketing strategy targets Sun City buyers specifically: active adults 55+ seeking maintenance-free living, golf enthusiasts, and those valuing recreational amenities that Sun City uniquely offers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Highlighting Sun City Advantages</h3>
              <p className="text-gray-700 mb-3">
                Your Sun City home offers advantages other Summerlin areas can't replicate: active adult community benefits, golf access, and maintenance-free positioning. Generic listings don't communicate these Sun City-specific benefits effectively.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan's marketing showcases Sun City advantages with professional photography highlighting golf courses, recreational facilities, and community amenities that Sun City buyers specifically appreciate.
              </p>
              <p className="text-gray-700">
                Her approach positions your property against other Summerlin areas by emphasizing benefits only Sun City offers: active adult community, golf access, and maintenance-free lifestyle that active adult buyers value in Sun City specifically.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Success with Sun City Homes That Didn't Sell</h3>
            <p className="text-gray-700 mb-3">
              Dr. Jan's Sun City focus means she's sold multiple Sun City properties that previous agents couldn't move. Her understanding of active adult positioning, maintenance-free benefits, and community marketing creates results where generic approaches failed.
            </p>
            <p className="text-gray-700 mb-3">
              Typical turnaround for Sun City expired listings working with Dr. Jan is 30-45 days with strategic pricing and active adult-focused marketing. Her Sun City expertise identifies issues generic agents miss.
            </p>
            <p className="text-gray-700">
              If your Sun City home didn't sell initially, likely issues included marketing that didn't highlight active adult benefits, positioning that didn't target 55+ buyers, or pricing that didn't reflect Sun City active adult premium. Dr. Jan addresses each systematically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Sun City Home?</h2>
          <p className="text-xl mb-8 text-blue-100">Expert help for Sun City homes that didn't sell. Get your free analysis today.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-purple-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-900 transition-colors">Get Free Sun City Analysis</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

