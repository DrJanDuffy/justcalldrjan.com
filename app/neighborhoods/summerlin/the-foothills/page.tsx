'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function TheFoothillsPage() {
  const articleSchema = getArticleSchema({
    headline: 'The Foothills Summerlin: Mountain View Homes Expert Help',
    description: 'Specialized help for The Foothills homes that didn\'t sell. Expert guidance for successful home sales in Summerlin\'s elevated mountain view community.',
    datePublished: '2024-05-05',
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
            The Foothills Summerlin: Mountain View Homes Expert Help
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Specialized help for The Foothills homes that didn't sell. Expert guidance for successful home sales in Summerlin's elevated mountain view community.
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
            Understanding The Foothills Summerlin Real Estate Market
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Foothills represents Summerlin's elevated communities with stunning mountain views and proximity to Red Rock Canyon. For homeowners whose properties didn't sell, understanding The Foothills' premium positioning is essential for successful relisting.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mountain View Premium</h3>
              <p className="text-gray-700 mb-3">
                The Foothills community offers premium mountain views and elevation that command higher pricing within Summerlin. Properties with Red Rock Canyon views sell at significant premium to comparable homes without views.
              </p>
              <p className="text-gray-700 mb-3">
                Many expired listings in The Foothills failed to showcase view advantages effectively. Properties positioned without highlighting mountain views miss the view premium that defines The Foothills market value.
              </p>
              <p className="text-gray-700">
                Dr. Jan helps you showcase The Foothills view advantages: Red Rock Canyon vistas, elevation benefits, and premium pricing that mountain view homes command within Summerlin specifically.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Upscale Community Positioning</h3>
              <p className="text-gray-700 mb-3">
                The Foothills features larger homes, premium amenities, and elevated positioning within Summerlin that attracts luxury buyers seeking mountain view properties with Red Rock proximity.
              </p>
              <p className="text-gray-700 mb-3">
                Your expired listing likely positioned The Foothills homes generically without highlighting upscale community benefits, mountain views, or elevation advantages that define The Foothills market.
              </p>
              <p className="text-gray-700">
                Her marketing strategy emphasizes The Foothills upscale benefits: mountain views, Red Rock proximity, elevation advantages, and luxury positioning that buyers seeking premium Summerlin properties specifically value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why The Foothills Homes Don't Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Foothills real estate has specific characteristics that can challenge sellers who don't understand this premium sub-community's unique market dynamics.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Missing View Premium</h3>
              <p className="text-gray-700">
                The Foothills' biggest value driver is mountain views. Listings that don't showcase Red Rock Canyon vistas and elevation advantages miss the view premium that The Foothills commands.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Generic Luxury Positioning</h3>
              <p className="text-gray-700">
                Marketing The Foothills as generic upscale Summerlin misses unique selling points. Buyers specifically choosing The Foothills want mountain views and elevation - generic luxury marketing doesn't communicate this.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Wrong Buyer Targeting</h3>
              <p className="text-gray-700">
                The Foothills attracts mountain view buyers, nature enthusiasts, and luxury seekers wanting Red Rock proximity. Marketing to generic Summerlin buyers wastes advertising while missing interested buyers.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Foothills Positioning Challenge</h3>
            <p className="text-gray-700 mb-3">
              The Foothills homes that didn't sell often failed to communicate mountain view advantages and upscale community benefits that define this sub-community's premium value within Summerlin.
            </p>
            <p className="text-gray-700 mb-3">
              Dr. Jan specializes in The Foothills Summerlin real estate and understands how to position mountain view homes to highlight Red Rock vistas and elevation advantages that The Foothills buyers specifically seek.
            </p>
            <p className="text-gray-700">
              Her marketing targets The Foothills buyers specifically: mountain view enthusiasts, luxury buyers seeking elevation, and those valuing Red Rock proximity that The Foothills uniquely offers within Summerlin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How Dr. Jan Helps The Foothills Homes Sell
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Foothills real estate requires understanding of mountain view premium and upscale buyer positioning. Dr. Janet Duffy brings specialized The Foothills knowledge to help your home achieve successful sale on relisting.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Foothills View Expertise</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan understands The Foothills unique value: mountain views, elevation benefits, and premium pricing that view properties command. She creates marketing emphasizing these The Foothills advantages buyers specifically seek.
              </p>
              <p className="text-gray-700 mb-3">
                She tracks The Foothills comps specifically, watching how view properties, elevation homes, and luxury positioning perform against generic Summerlin listings. This The Foothills-specific expertise ensures accurate pricing.
              </p>
              <p className="text-gray-700">
                Her marketing strategy targets The Foothills buyers specifically: mountain view enthusiasts, luxury seekers, and those wanting Red Rock proximity that The Foothills uniquely offers within Summerlin.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Highlighting The Foothills Advantages</h3>
              <p className="text-gray-700 mb-3">
                Your The Foothills home offers advantages other Summerlin areas can't replicate: mountain views, elevation benefits, and upscale community positioning. Generic listings don't communicate these The Foothills-specific benefits effectively.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan's marketing showcases The Foothills advantages with professional photography highlighting Red Rock views, elevation benefits, and luxury amenities that The Foothills buyers specifically appreciate.
              </p>
              <p className="text-gray-700">
                Her approach positions your property against other Summerlin areas by emphasizing benefits only The Foothills offers: mountain views, Red Rock proximity, and elevation advantages that luxury buyers value in The Foothills specifically.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Success with The Foothills Homes That Didn't Sell</h3>
            <p className="text-gray-700 mb-3">
              Dr. Jan's The Foothills focus means she's sold multiple The Foothills properties that previous agents couldn't move. Her understanding of view premium, elevation positioning, and luxury community marketing creates results where generic approaches failed.
            </p>
            <p className="text-gray-700 mb-3">
              Typical turnaround for The Foothills expired listings working with Dr. Jan is 30-45 days with strategic pricing and view-focused marketing. Her The Foothills expertise identifies issues generic agents miss.
            </p>
            <p className="text-gray-700">
              If your The Foothills home didn't sell initially, likely issues included marketing that didn't showcase views, positioning that didn't target luxury buyers, or pricing that didn't reflect The Foothills view premium. Dr. Jan addresses each systematically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Your The Foothills Home?</h2>
          <p className="text-xl mb-8 text-blue-100">Expert help for The Foothills homes that didn't sell. Get your free analysis today.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-purple-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-900 transition-colors">Get Free The Foothills Analysis</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

