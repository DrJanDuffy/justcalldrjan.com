'use client'

import Link from 'next/link'

export default function HendersonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Henderson Las Vegas: Affordability, Amenities, and Great Value
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl">
            Henderson offers Las Vegas residents exceptional value with quality schools, family-friendly communities, and more affordable housing than many other Vegas areas.
          </p>
        </div>
      </section>

      {/* H2 #1 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Henderson is One of Las Vegas's Most Desirable Areas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Henderson stands as Nevada's second-largest city and one of the fastest-growing communities in the Las Vegas Valley. Unlike Las Vegas proper, Henderson offers a more suburban feel with strong emphasis on families, safety, and community. This combination of affordability, amenities, and quality of life makes Henderson highly attractive to buyers.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The city consistently ranks among America's safest cities, a major draw for families. This reputation for safety, combined with A-rated schools, parks, and family amenities, creates strong demand for Henderson real estate. Properties here typically appreciate well while offering better affordability than Summerlin.
              </p>
              <p className="text-lg text-gray-700">
                Henderson's diverse housing inventory means something for everyone: entry-level homes, luxury estates, master-planned communities, and new construction. Whether you're a first-time buyer seeking value or looking to upgrade to more space, Henderson delivers options that fit various budgets and lifestyles.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Henderson Quick Facts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Population:</span>
                  <span>Over 320,000 residents</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Schools:</span>
                  <span>Clark County (many A-rated schools)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Golf Courses:</span>
                  <span>Multiple championship courses</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Median Home Price:</span>
                  <span>$450,000</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Active Listings:</span>
                  <span>189 homes available</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">• Safety:</span>
                  <span>Consistently ranked among safest US cities</span>
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
            Henderson Real Estate Market: Strong Value and Growth
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Henderson's real estate market appeals to buyers seeking value without sacrificing quality. Properties typically cost less than Summerlin while offering similar amenities, schools, and lifestyle benefits. This value proposition drives steady demand from first-time buyers, families, and retirees.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Median Home Prices</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">$450,000</p>
              <p className="text-gray-600">Median sale price, approximately 20% below Summerlin average</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Average Days on Market</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">38</p>
              <p className="text-gray-600">Days, competitive with premium areas</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Active Listings</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">189</p>
              <p className="text-gray-600">Homes currently available across Henderson</p>
            </div>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">H3: Why Henderson Properties Hold Their Value</h3>
            <p className="mb-4 text-green-100">
              Henderson real estate maintains strong value due to consistent population growth, excellent school system, and reputation for safety. The city's ongoing development and infrastructure improvements support continued appreciation.
            </p>
            <p className="mb-4 text-green-100">
              New construction areas like Inspirada and Cadence continue attracting buyers, while established neighborhoods maintain their appeal. This balanced mix of old and new creates stable market conditions with appreciation potential.
            </p>
            <p className="text-green-100">
              For sellers, Henderson's strong market means faster sales at fair prices. For buyers, it means you get more home for your money compared to other Las Vegas areas while still accessing quality schools, amenities, and community infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Buying in Henderson</h3>
              <p className="text-gray-700 mb-3">
                Henderson buyers enjoy more choices and better affordability than premium areas. Popular neighborhoods include Green Valley with its upscale amenities, Anthem with golf course living, Seven Hills offering mountain views, and Inspirada with new construction.
              </p>
              <p className="text-gray-700 mb-3">
                Property styles range from starter homes and condos under $300k to luxury estates over $1 million. Most Henderson neighborhoods feature master-planned community benefits: parks, trails, community centers, and active HOAs maintaining property values.
              </p>
              <p className="text-gray-700">
                Working with a Henderson specialist like Dr. Janet Duffy helps navigate the options and identify which area best fits your lifestyle and budget. Her expertise ensures you understand school zones, HOA requirements, and neighborhood characteristics before buying.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Selling in Henderson</h3>
              <p className="text-gray-700 mb-3">
                Henderson sellers benefit from strong demand driven by value-seeking buyers. Properties that show well and are priced competitively often sell quickly. Understanding which Henderson sub-communities command premium pricing helps optimize sale price.
              </p>
              <p className="text-gray-700 mb-3">
                Master-planned communities like Green Valley and Anthem typically sell faster and at higher prices due to amenities and HOA-maintained quality. Newer developments like Inspirada attract buyers seeking modern floor plans and energy-efficient features.
              </p>
              <p className="text-gray-700">
                Dr. Janet Duffy's Henderson expertise includes understanding market dynamics across different neighborhoods. She helps sellers position properties effectively whether in established Green Valley or newer Cadence, maximizing both sale price and speed to closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #3 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Living in Henderson: Quality Lifestyle and Strong Community
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Living in Henderson means enjoying family-focused amenities, excellent schools, abundant parks, and a strong sense of community. The city balances suburban tranquility with proximity to Las Vegas Strip entertainment and employment centers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Education and Schools</h3>
              <p className="text-gray-700 mb-3">
                Henderson boasts many of Clark County's highest-rated schools, including Coronado High School consistently ranked among Nevada's top schools. Elementary and middle schools across Green Valley and Anthem receive strong ratings, attracting families specifically for education quality.
              </p>
              <p className="text-gray-700 mb-3">
                The Clark County School District serves Henderson with magnet programs, advanced placement, and college preparatory options. Many families specifically shop Henderson for school zones, making properties in top-rated zones command premium pricing and sell faster.
              </p>
              <p className="text-gray-700">
                Higher education is accessible with College of Southern Nevada's Henderson campus and proximity to University of Nevada Las Vegas. This educational infrastructure supports professional development and creates an educated workforce that drives economic stability.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Recreation and Parks</h3>
              <p className="text-gray-700 mb-3">
                Henderson's recreational amenities rival any Las Vegas community. The city operates multiple recreation centers, swimming pools, sports facilities, and over 70 parks. Corcoran Park, Mission Hills Park, and Acacia Park are among the largest and most popular.
              </p>
              <p className="text-gray-700 mb-3">
                The Henderson Multigenerational Center offers fitness, classes, and programs for all ages. Golf courses include Revere Golf Club and Rio Secco Golf Club, both featuring championship designs. The extensive trail system connects neighborhoods and provides walking, jogging, and cycling opportunities.
              </p>
              <p className="text-gray-700">
                Outdoor enthusiasts appreciate nearby Lake Mead and the Colorado River, both offering boating, fishing, hiking, and water sports. Red Rock Canyon's scenic drives and hiking trails are just 30 minutes away. Henderson's location provides easy access to outdoor recreation while maintaining urban conveniences.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Shopping and Dining</h3>
            <p className="text-gray-700 mb-3">
              Henderson's Green Valley area features The District shopping center with major retailers, upscale shops, and diverse dining options. The Galleria at Sunset offers additional shopping while the new Downtown Henderson development adds urban-style shopping and dining options.
            </p>
            <p className="text-gray-700 mb-3">
              Dining ranges from casual chains to fine dining establishments. The Water Street District offers local restaurants and breweries creating a vibrant downtown feel. This combination of national and local businesses provides variety without needing to leave Henderson for shopping or dining.
            </p>
            <p className="text-gray-700">
              Proximity to Las Vegas Strip is convenient - just 15-20 minutes - for entertainment, fine dining, and shows. Meanwhile, Henderson itself provides everything needed for daily life. This balance of local amenities with Strip access makes Henderson attractive to both families and professionals working on the Strip.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4 */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Expert Henderson Real Estate Guidance
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Henderson's diverse neighborhoods, master-planned communities, and variety of property types require local expertise to navigate successfully. Dr. Janet Duffy's Henderson experience helps both buyers and sellers achieve their goals in this dynamic market.
          </p>

          <div className="bg-white p-8 rounded-lg mb-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Why Henderson Properties Need Specialized Expertise</h3>
            <p className="text-gray-700 mb-3">
              When Henderson homes don't sell, it's often due to misalignment between pricing and buyer expectations, inadequate marketing, or presentation issues. Henderson's competitive market means properties must be positioned correctly to attract buyers.
            </p>
            <p className="text-gray-700 mb-3">
              Understanding Henderson's sub-market dynamics is crucial. A home in Green Valley commands different pricing than one in Anthem or Inspirada. Dr. Jan's expertise ensures accurate pricing based on specific neighborhood comps rather than Henderson-wide averages.
            </p>
            <p className="text-gray-700">
              Her approach addresses why Henderson homes expire: pricing strategy adjusted for specific community and buyer pool, professional presentation showcasing quality features, and comprehensive marketing reaching value-seeking buyers who choose Henderson specifically for affordability with quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Finding Your Henderson Home</h3>
              <p className="text-gray-700 mb-3">
                Henderson buyers benefit from a range of options across various price points. Whether seeking an affordable starter home in established neighborhoods, a mid-range family home in Anthem, or luxury living in Green Valley, choices exist.
              </p>
              <p className="text-gray-700">
                Dr. Jan helps Henderson buyers navigate these options by understanding specific needs: budget, lifestyle preferences, school requirements, commute distances, and long-term goals. This personalized approach ensures buyers find homes that fit perfectly rather than settling.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Selling Your Henderson Property</h3>
              <p className="text-gray-700 mb-3">
                Henderson sellers competing in a value-conscious market need pricing strategy that's competitive yet maximizes return. Understanding which improvements add value versus cost, and how to present homes appealingly to target buyer demographics, makes a difference.
              </p>
              <p className="text-gray-700">
                Dr. Jan's Henderson specialization includes knowing which neighborhoods appreciate faster, what amenities buyers value most, and how to position properties to attract serious offers quickly. Her track record with expired listings shows she understands fixing what prevents sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Henderson Real Estate?
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Let Dr. Janet Duffy help you buy or sell successfully in Henderson.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17025667890"
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-green-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/neighborhoods" className="text-green-600 hover:text-green-800 font-semibold">
            ← Back to All Las Vegas Neighborhoods
          </Link>
        </div>
      </section>
    </div>
  )
}

