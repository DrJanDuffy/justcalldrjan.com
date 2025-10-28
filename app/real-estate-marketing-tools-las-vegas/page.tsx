'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function RealEstateMarketingToolsLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'Best Real Estate Marketing Tools for Las Vegas Agents: Technology That Gets Results',
    description: 'Discover the top real estate marketing tools and platforms used by successful Las Vegas agents. From photography to lead generation, learn what technology drives results in the Las Vegas market.',
    datePublished: '2024-06-05',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Best Real Estate Marketing Tools for Las Vegas Agents
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl">
            Technology and tools used by successful Las Vegas agents to market properties effectively. From professional photography to lead generation platforms, discover what works in the Las Vegas real estate market.
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
            Why Marketing Tools Matter for Las Vegas Real Estate Marketing
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Las Vegas real estate market demands sophisticated marketing tools to compete effectively. With thousands of listings, multiple master-planned communities, and diverse buyer demographics, agents need technology that positions properties strategically and reaches the right buyers efficiently.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Market Competition</h3>
              <p className="text-gray-700 mb-3">
                Las Vegas real estate is highly competitive with thousands of active listings and new construction constantly entering the market. Effective marketing tools help agents differentiate listings, reach qualified buyers, and demonstrate professionalism that attracts serious offers.
              </p>
              <p className="text-gray-700 mb-3">
                Marketing tools specifically matter for expired listings: properties that didn't sell need superior presentation, broader reach, and strategic positioning to overcome previous failures. Generic tools don't suffice - professional platforms create results.
              </p>
              <p className="text-gray-700">
                Dr. Jan invests in professional marketing tools because she knows Las Vegas buyers expect quality presentation and multiple touchpoints. Her tool selection focuses on platforms that reach Las Vegas buyers effectively.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Technology for Expired Listings</h3>
              <p className="text-gray-700 mb-3">
                Expired listings require enhanced marketing tools: professional photography to replace poor images, virtual tour technology to showcase homes remotely, targeted digital advertising to reach new buyer pools, and marketing platforms that provide comprehensive exposure.
              </p>
              <p className="text-gray-700 mb-3">
                Standard MLS marketing failed once - relisting requires tools that provide superior presentation, broader reach, and strategic buyer targeting. Professional marketing platforms make the difference between relisting failure and successful sale.
              </p>
              <p className="text-gray-700">
                Dr. Jan's marketing approach combines Berkshire Hathaway HomeServices institutional tools with cutting-edge platforms designed for luxury real estate marketing. This combination reaches buyers who saw previous marketing and didn't respond, plus new buyer pools entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Essential Marketing Tools for Las Vegas Agents
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            These are the marketing tools and platforms that successful Las Vegas agents use to market properties effectively, especially for expired listings that need superior presentation and reach.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Photography & Virtual Tours</h3>
              <p className="text-gray-700 mb-4">
                Professional photography services specializing in real estate create stunning images that showcase Las Vegas properties effectively. High-quality photos appear in premium marketing channels, MLS, social media, and luxury portals that reach qualified Las Vegas buyers.
              </p>
              <p className="text-gray-700 mb-4">
                Virtual tour technology allows remote buyers to experience Las Vegas properties fully, essential for out-of-state buyers relocating to Las Vegas and investors seeking Southern Nevada opportunities. Professional virtual tours increase engagement and serious buyer interest.
              </p>
              <p className="text-gray-700">
                For expired listings, professional photography replaces poor images that may have contributed to previous failure. Quality presentation demonstrates commitment to selling and attracts buyers who passed on previous marketing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lead Generation & CRM Platforms</h3>
              <p className="text-gray-700 mb-4">
                Customer relationship management (CRM) platforms track leads, manage follow-up, and ensure no potential buyer falls through cracks. For Las Vegas agents handling expired listings, CRM systems manage multiple lead sources: website inquiries, social media, referrals, and direct contacts.
              </p>
              <p className="text-gray-700 mb-4">
                Lead generation platforms provide automated systems for capturing and nurturing leads through sales funnel. Effective platforms integrate website forms, email marketing, follow-up sequences, and lead scoring to prioritize best opportunities.
              </p>
              <p className="text-gray-700">
                Dr. Jan uses CRM systems ensuring every lead receives proper follow-up and no opportunity is missed. For expired listings requiring quick turnaround, organized lead management makes the difference between success and repeat failure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Advertising & Social Media</h3>
              <p className="text-gray-700 mb-4">
                Targeted digital advertising reaches Las Vegas buyers actively searching for homes through Google, Facebook, Instagram, and real estate portals. Advertising platforms allow precise targeting: neighborhoods, price ranges, buyer characteristics, and geographic areas.
              </p>
              <p className="text-gray-700 mb-4">
                Social media marketing showcases Las Vegas properties to engaged audiences, builds brand recognition, and creates shareable content that expands reach organically. For expired listings, social media introduces properties to new buyer pools beyond those who saw previous marketing.
              </p>
              <p className="text-gray-700">
                Dr. Jan's marketing includes targeted digital advertising reaching Las Vegas buyers specifically seeking properties like hers. This strategic advertising complements MLS exposure and reaches buyers through channels previous agents may not have utilized.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Berkshire Hathaway HomeServices Marketing Platform</h3>
              <p className="text-gray-700 mb-4">
                Berkshire Hathaway HomeServices provides institutional marketing platform unmatched by regional firms: access to Wall Street Journal Real Estate, New York Times Real Estate sections, luxury portals, and national exposure that positions Las Vegas properties to qualified buyers nationwide.
              </p>
              <p className="text-gray-700 mb-4">
                This institutional marketing power creates competitive advantage: properties receive exposure through channels regional firms cannot access. For expired listings needing maximum visibility, BHHS platform provides comprehensive reach that basic marketing cannot match.
              </p>
              <p className="text-gray-700">
                Dr. Jan leverages BHHS marketing platform because she knows expired listings need superior exposure. Institutional marketing tools make the difference between relisting with same approach and strategic marketing that reaches qualified buyers effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Choose Dr. Jan's Marketing Approach
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Janet Duffy combines professional marketing tools with Las Vegas market expertise to create results where generic approaches failed.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Professional Tool Investment</h3>
              <p className="text-gray-700">
                Dr. Jan invests in professional marketing tools because she knows expired listings require superior presentation and reach. Tool costs are investments in success, not expenses.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Las Vegas Market Knowledge</h3>
              <p className="text-gray-700">
                Her 30+ years of Las Vegas real estate experience informs tool selection and usage. She knows which platforms reach Las Vegas buyers effectively and how to position properties strategically.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Marketing Approach</h3>
              <p className="text-gray-700">
                Marketing tool usage is strategic, not generic. Each expired listing receives marketing approach tailored to property, neighborhood, and buyer demographics specific to Las Vegas market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Las Vegas Home?</h2>
          <p className="text-xl mb-8 text-teal-100">Professional marketing tools and Las Vegas expertise make the difference.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17022221964" className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 222-1964</a>
            <Link href="/contact" className="bg-teal-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-teal-900 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

