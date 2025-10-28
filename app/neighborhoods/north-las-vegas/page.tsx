'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function NorthLasVegasPage() {
  const articleSchema = getArticleSchema({
    headline: 'North Las Vegas: Growth, Affordability, and Opportunity',
    description: 'North Las Vegas combines affordability with growth, making it an attractive option for first-time homebuyers and families seeking value in the Las Vegas Valley.',
    datePublished: '2024-03-10',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            North Las Vegas: Affordable New Construction and Growing Communities
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl">
            North Las Vegas offers exceptional value with new construction, affordable housing, and rapidly developing master-planned communities ideal for families and first-time buyers.
          </p>
        </div>
      </section>

      {/* Author Badge */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AuthorBadge />
        </div>
      </section>

      {/* H2 #1 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why North Las Vegas is One of Las Vegas's Fastest-Growing Areas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                North Las Vegas represents one of Las Vegas Valley's most dynamic growth areas, attracting buyers seeking new construction, affordability, and modern amenities. As Las Vegas expands northward, North Las Vegas provides excellent value with newer homes, updated infrastructure, and master-planned communities designed for contemporary lifestyles.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The city has invested heavily in infrastructure improvements, new parks, schools, and commercial development. These investments create an attractive environment for families, especially first-time buyers seeking modern floor plans, energy-efficient features, and turn-key new construction without premium pricing.
              </p>
              <p className="text-lg text-gray-700">
                Major master-planned communities like Skye Canyon, Tule Springs, and Aliante continue building, offering new-home buyers choices across various price points. These developments feature modern amenities, planned commercial centers, parks, and schools - providing complete lifestyle packages that appeal to today's buyers.
              </p>
            </div>
            
            <div className="bg-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">North Las Vegas Quick Facts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Population:</span>
                  <span>Over 260,000 and growing rapidly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Median Home Price:</span>
                  <span>$385,000 - Excellent value</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• New Construction:</span>
                  <span>Extensive new-home developments</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Master-Planned:</span>
                  <span>Skye Canyon, Tule Springs, Aliante</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Active Listings:</span>
                  <span>212 homes currently available</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Growth Rate:</span>
                  <span>One of fastest-growing in Nevada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            North Las Vegas Real Estate: Value and Opportunity
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            North Las Vegas real estate offers Las Vegas Valley's best affordability for new construction and master-planned community living. Properties here typically cost significantly less than Summerlin while still offering quality schools, amenities, and modern home features that buyers seek.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Median Home Prices</h3>
              <p className="text-4xl font-bold text-pink-600 mb-2">$385,000</p>
              <p className="text-gray-600">Median sale price, exceptional value for new construction</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Days on Market</h3>
              <p className="text-4xl font-bold text-pink-600 mb-2">35</p>
              <p className="text-gray-600">Average days to sale for properly priced homes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Active Listings</h3>
              <p className="text-4xl font-bold text-pink-600 mb-2">212</p>
              <p className="text-gray-600">Homes available across North Las Vegas</p>
            </div>
          </div>

          <div className="bg-pink-600 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Why North Las Vegas Properties Deliver Value</h3>
            <p className="mb-4 text-pink-100">
              North Las Vegas real estate represents exceptional value due to new construction inventory, modern home features, and affordable pricing compared to older Las Vegas areas. New homes often include energy-efficient systems, modern floor plans, smart home features, and builder warranties.
            </p>
            <p className="mb-4 text-pink-100">
              Master-planned communities provide amenities typically found only in higher-priced areas: community centers, pools, parks, trails, and planned commercial areas. These amenities create lifestyle value that supports property values over time while offering immediate quality of life benefits.
            </p>
            <p className="text-pink-100">
              For buyers, North Las Vegas means accessing modern home features and community amenities at prices 30-40% below comparable homes in areas like Summerlin. For sellers, it means competing in a market where value-conscious buyers actively seek properties, creating steady demand for well-priced homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Buying in North Las Vegas</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas buyers enjoy choices ranging from new construction to established neighborhoods. Skye Canyon offers mountain views and resort-style amenities. Tule Springs features new homes near planned commercial development. Aliante provides established community with mature amenities.
              </p>
              <p className="text-gray-700 mb-3">
                Property types include single-family homes, townhomes, and condos across various price points from $250k to $600k. The abundance of new construction means buyers can choose move-in ready homes or customize during the building process with new communities regularly adding phases.
              </p>
              <p className="text-gray-700">
                Working with a North Las Vegas specialist helps navigate new construction contracts, understand builder reputations, identify established neighborhoods with value, and ensure you're getting maximum value for your budget. Dr. Janet Duffy provides this expertise.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Selling in North Las Vegas</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas sellers compete with new construction inventory, requiring strategic positioning. Well-maintained homes in established communities near new developments can offer better value than brand-new homes while providing mature landscaping and proven neighborhood character.
              </p>
              <p className="text-gray-700 mb-3">
                Understanding buyer motivations in North Las Vegas - seeking value, new construction alternatives, family-friendly neighborhoods - helps sellers position properties effectively. Pricing competitively relative to new homes, highlighting improvements, and emphasizing neighborhood maturity all matter.
              </p>
              <p className="text-gray-700">
                Dr. Janet Duffy's expertise with expired listings includes understanding why North Las Vegas homes don't sell initially and how to reposition them for success. Her systematic approach addresses pricing relative to new construction, professional presentation, and targeted marketing to value-seeking buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #3 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Living in North Las Vegas: Modern Amenities and Growth
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Living in North Las Vegas means enjoying newly developed infrastructure, modern amenities, and community focus on families. The area combines affordability with quality schools, parks, shopping, and easy access to entire Las Vegas Valley employment centers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Amenities</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas master-planned communities offer resort-style amenities: community pools with cabanas, fitness centers, parks with play structures, basketball courts, and walking trails. These amenities rival premium areas at fraction of cost, creating strong value proposition.
              </p>
              <p className="text-gray-700 mb-3">
                Aliante Casino and Resort provides entertainment, dining, and events. New commercial centers including shopping and dining continue developing, bringing more convenience to residents. Craig Ranch Regional Park offers 170 acres of sports fields, pools, and recreational facilities.
              </p>
              <p className="text-gray-700">
                The planned Aviators baseball stadium development will add Major League Baseball Triple-A facilities and additional commercial development. This ongoing infrastructure investment ensures North Las Vegas remains desirable long-term investment area.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Schools and Education</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas schools include newer facilities with modern technology and programs. Clark County School District serves the area with new schools being built to support population growth. Many families choosing North Las Vegas specifically appreciate newer school facilities.
              </p>
              <p className="text-gray-700 mb-3">
                Existing schools include Shadow Ridge High School receiving good ratings, while new schools in master-planned communities continue opening with latest educational infrastructure. School choice options and magnet programs provide additional educational opportunities.
              </p>
              <p className="text-gray-700">
                Higher education access includes College of Southern Nevada North Las Vegas campus and proximity to University of Nevada Las Vegas. This educational infrastructure supports professional development while creating employment opportunities in the area.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Convenience and Location</h3>
            <p className="text-gray-700 mb-3">
              North Las Vegas location provides convenient access to entire Las Vegas Valley via major highways. The area sits near Interstate 15 for quick access to Strip and downtown, Highway 215 connects to Summerlin and Henderson, and US 95 provides valley-wide connectivity.
            </p>
            <p className="text-gray-700 mb-3">
              Proximity to Nellis Air Force Base creates stable employment anchor and steady demand from military families. The new Veterans Affairs hospital development further supports the area's growth and provides additional employment base.
            </p>
            <p className="text-gray-700">
              Shopping options continue expanding with new commercial centers in master-planned communities plus access to major Las Vegas shopping destinations. Dining ranges from casual to upscale while entertainment options include Aliante Casino and multiple movie theaters throughout area.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4 */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Expert North Las Vegas Real Estate Service
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            North Las Vegas real estate requires understanding new construction dynamics, value-conscious buyer profiles, and positioning properties competitively in a market with abundant new-home options. Dr. Janet Duffy provides specialized North Las Vegas expertise.
          </p>

          <div className="bg-white p-8 rounded-lg mb-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why North Las Vegas Properties Need Strategic Approach</h3>
            <p className="text-gray-700 mb-3">
              When North Las Vegas homes don't sell, it's often because they're competing against new construction without highlighting comparative advantages. Pricing must reflect value relative to new homes while showcasing what existing homes offer that new construction can't.
            </p>
            <p className="text-gray-700 mb-3">
              Presentation becomes crucial since new construction has inherent appeal. Existing homes need professional staging and photography demonstrating move-in ready quality, modern updates, or potential for customization. Marketing must reach buyers actively comparing new vs existing options.
            </p>
            <p className="text-gray-700">
              Dr. Janet Duffy's approach understands these dynamics. She positions North Las Vegas properties to compete effectively by emphasizing value advantages: established neighborhoods, mature landscaping, proven construction quality, and often lower purchase prices with potential for improvements that add equity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Finding Your North Las Vegas Home</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas buyers face decisions between new construction and existing homes, different master-planned communities, and various price ranges. Understanding trade-offs between new construction customization vs immediate move-in, and between established vs developing areas, requires expertise.
              </p>
              <p className="text-gray-700">
                Dr. Jan helps North Las Vegas buyers navigate these decisions by understanding specific priorities: timing needs, budget constraints, desired amenities, school requirements, and long-term goals. This personalized guidance ensures buyers make optimal choices in dynamic North Las Vegas market.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Selling Your North Las Vegas Property</h3>
              <p className="text-gray-700 mb-3">
                North Las Vegas sellers need strategies that compete with new construction while highlighting unique value propositions. Whether selling newer or existing homes, understanding target buyer motivations and positioning accordingly determines success.
              </p>
              <p className="text-gray-700">
                Dr. Jan's North Las Vegas specialization includes knowing which improvements add value, how to price relative to new construction, and what marketing approach attracts value-conscious buyers seeking quality homes. Her expired listing expertise specifically addresses North Las Vegas market challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Buy or Sell in North Las Vegas?
          </h2>
          <p className="text-lg mb-8 text-pink-100">
            Let Dr. Janet Duffy help you navigate North Las Vegas real estate with expertise and proven results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17025667890"
              className="bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-pink-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-pink-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/neighborhoods" className="text-pink-600 hover:text-pink-800 font-semibold">
            ← Back to All Las Vegas Neighborhoods
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

