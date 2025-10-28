'use client'

import Link from 'next/link'

const neighborhoods = [
  { 
    name: 'Summerlin', 
    slug: 'summerlin',
    path: '/neighborhoods/summerlin',
    description: 'Master-planned community with golf courses, parks, and top-rated schools',
    medianPrice: '$575,000',
    activeListings: 234,
    lifestyle: ['Family-Friendly', 'Golf', 'Upscale']
  },
  { 
    name: 'Henderson', 
    slug: 'henderson',
    path: '/neighborhoods/henderson',
    description: 'Fast-growing city with great value and diverse housing options',
    medianPrice: '$450,000',
    activeListings: 189,
    lifestyle: ['Family-Friendly', 'Affordable', 'Growing']
  },
  { 
    name: 'Downtown Las Vegas', 
    slug: 'downtown-las-vegas',
    path: '/downtown-las-vegas',
    description: 'Urban living with condos, lofts, and entertainment district access',
    medianPrice: '$325,000',
    activeListings: 156,
    lifestyle: ['Urban', 'Entertainment', 'Condos']
  },
  { 
    name: 'Paradise', 
    slug: 'paradise',
    path: '/paradise',
    description: 'Strip-adjacent with high-rises and luxury condominiums',
    medianPrice: '$380,000',
    activeListings: 201,
    lifestyle: ['Luxury', 'Strip Views', 'High-Rise']
  },
  { 
    name: 'Enterprise', 
    slug: 'enterprise',
    path: '/enterprise',
    description: 'West side value with new construction and established communities',
    medianPrice: '$425,000',
    activeListings: 167,
    lifestyle: ['New Builds', 'Value', 'Growing']
  },
  { 
    name: 'Spring Valley', 
    slug: 'spring-valley',
    path: '/spring-valley',
    description: 'Central location with established neighborhoods and good schools',
    medianPrice: '$395,000',
    activeListings: 143,
    lifestyle: ['Established', 'Central', 'Family-Friendly']
  },
  { 
    name: 'North Las Vegas', 
    slug: 'north-las-vegas',
    path: '/neighborhoods/north-las-vegas',
    description: 'Affordable new construction with great family amenities',
    medianPrice: '$385,000',
    activeListings: 212,
    lifestyle: ['New Builds', 'Affordable', 'Family-Friendly']
  },
  { 
    name: 'Boulder City', 
    slug: 'boulder-city',
    path: '/boulder-city',
    description: 'Small-town charm near Lake Mead with outdoor recreation access',
    medianPrice: '$420,000',
    activeListings: 98,
    lifestyle: ['Outdoor Recreation', 'Lake Access', 'Small-Town']
  },
  { 
    name: 'Winchester', 
    slug: 'winchester',
    path: '/winchester',
    description: 'Diverse area with convenience and access near McCarran International',
    medianPrice: '$360,000',
    activeListings: 134,
    lifestyle: ['Convenience', 'Airport Access', 'Diverse']
  },
  { 
    name: 'Whitney', 
    slug: 'whitney',
    path: '/whitney',
    description: 'East Las Vegas family-friendly community with established neighborhoods',
    medianPrice: '$370,000',
    activeListings: 145,
    lifestyle: ['Family-Friendly', 'Established', 'Safe']
  }
]

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* H1 - Only one H1 on the page */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Las Vegas Neighborhoods Guide: Find Your Perfect Community
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover the best neighborhoods in Las Vegas. From master-planned communities to urban living, find the perfect area that matches your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* H2 #1: Explore Las Vegas Communities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Explore Las Vegas Communities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Las Vegas offers diverse neighborhoods each with unique character, amenities, and lifestyle. Whether you're looking for master-planned communities with world-class golf courses, affordable family-friendly areas, or vibrant urban living, Las Vegas has something for everyone.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Link 
                key={neighborhood.slug}
                href={neighborhood.path}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white text-center px-4">
                      {neighborhood.name}
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {neighborhood.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Median Price</span>
                        <span className="font-semibold text-blue-600">{neighborhood.medianPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Active Listings</span>
                        <span className="font-semibold">{neighborhood.activeListings}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {neighborhood.lifestyle.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-semibold">
                      Explore {neighborhood.name} →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #2: Why Choose Las Vegas Neighborhoods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Las Vegas Neighborhoods?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Las Vegas real estate offers exceptional value, world-class amenities, and a diverse range of communities. From luxury master-planned developments to affordable new construction, here's what makes Las Vegas neighborhoods special.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🏌️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Golf Course Communities</h3>
              <p className="text-gray-600 mb-4">
                Las Vegas is home to over 50 championship golf courses, many integrated into master-planned communities. Neighborhoods like Summerlin, Henderson, and Green Valley offer golf course living with stunning desert and mountain views.
              </p>
              <p className="text-gray-600">
                Communities like TPC Summerlin, Reflection Bay, and DragonRidge provide exclusive golf course access, upscale amenities, and luxury homes. Golf course properties typically appreciate faster and offer a resort-style lifestyle year-round.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Top-Rated Schools</h3>
              <p className="text-gray-600 mb-4">
                Clark County School District includes many A-rated schools, especially in areas like Summerlin, Henderson, and Green Valley. School choice and quality are major factors in homebuying decisions.
              </p>
              <p className="text-gray-600">
                Neighborhoods zoned to top schools like Palo Verde High School, Coronado High, and Advanced Technologies Academy often command premium prices and faster sales. Many families specifically search homes by school zone.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Growing Economy</h3>
              <p className="text-gray-600 mb-4">
                Las Vegas has a thriving economy with strong job growth in tourism, technology, healthcare, and finance. Major employers include casinos, hospitals, tech companies, and aerospace firms.
              </p>
              <p className="text-gray-600">
                No state income tax, affordable cost of living, and diverse employment opportunities attract both new residents and businesses. The city's population has grown by over 10% in recent years, driving demand for housing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Master-Planned Communities</h3>
              <p className="text-gray-600 mb-3">
                Las Vegas is renowned for master-planned communities that offer residents a complete lifestyle package. Summerlin, developed by The Howard Hughes Corporation, spans 22,500 acres with parks, trails, schools, shopping, and entertainment all within walking distance of many homes.
              </p>
              <p className="text-gray-600 mb-3">
                These communities feature homeowners associations that maintain common areas, organize events, and provide security. The HOA amenities often include pools, fitness centers, playgrounds, and community parks that create a strong sense of community.
              </p>
              <p className="text-gray-600">
                Buying in a master-planned community typically offers better resale value, stronger appreciation rates, and higher quality of life. The planning ensures proper infrastructure, traffic flow, and aesthetic standards that individual developments may lack.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">New Construction vs Established Neighborhoods</h3>
              <p className="text-gray-600 mb-3">
                Las Vegas offers both brand-new construction and established neighborhoods, each with distinct advantages. New construction areas like Skye Canyon, Inspirada, and Cadence offer modern floor plans, energy-efficient features, and the latest in home design and technology.
              </p>
              <p className="text-gray-600 mb-3">
                Established neighborhoods like Spring Valley, Paradise, and parts of Henderson offer mature landscaping, established amenities, and often larger lot sizes. These areas typically have lower HOA fees and more established tree canopies.
              </p>
              <p className="text-gray-600">
                Your choice depends on priorities: new builds offer customization and latest features, while established neighborhoods offer character, lower costs, and proven appreciation. Many buyers find value in both options across Las Vegas's diverse market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #3: Getting Expert Help */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Find Your Perfect Las Vegas Neighborhood
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            With so many neighborhoods and communities to choose from, having a local expert guide you makes all the difference. Dr. Janet Duffy specializes in helping buyers and sellers navigate Las Vegas real estate, focusing on understanding your lifestyle needs and matching you with the perfect community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Neighborhood Expertise</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan has deep knowledge of Las Vegas neighborhoods, including sub-communities, school zones, HOA details, and market trends. She can identify the best areas for your specific needs and budget.
              </p>
              <p className="text-gray-700">
                Whether you're looking for Summerlin's master-planned lifestyle, Henderson's value, Downtown's urban energy, or one of Las Vegas's many unique communities, she provides insider knowledge that makes a real difference.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Intelligence</h3>
              <p className="text-gray-700 mb-3">
                Each Las Vegas neighborhood has its own market dynamics, price trends, and buyer competition. Understanding these nuances helps you make better decisions whether buying or selling.
              </p>
              <p className="text-gray-700">
                Dr. Jan provides detailed neighborhood market reports showing recent sales, price appreciation, days on market, and inventory levels. This data helps you understand timing, pricing strategy, and buyer behavior in your target area.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalized Service</h3>
              <p className="text-gray-700 mb-3">
                Finding the right neighborhood is about more than just prices and amenities - it's about finding a community that fits your lifestyle, commute, family needs, and long-term goals.
              </p>
              <p className="text-gray-700">
                Dr. Jan takes time to understand what matters to you: schools, commute times, recreational opportunities, resale value potential, and community culture. This personalized approach ensures you find not just a house, but a home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Finding Your Perfect Neighborhood?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Tell us what you're looking for - your lifestyle, budget, and priorities - and we'll match you with Las Vegas neighborhoods that fit perfectly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17022221964"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Get Neighborhood Match
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
