'use client'

import Link from 'next/link'

export default function SuccessStoriesPage() {
  const stories = [
    {
      location: 'Summerlin',
      name: 'Mary Thompson',
      before: { days: 180, offers: 0 },
      after: { days: 21, price: 'Asking price' },
      issue: 'Pricing above market',
      solution: 'Strategic price adjustment and professional staging',
      quote: 'My listing had been on the market for 6 months with zero offers. Dr. Jan came in, adjusted the pricing strategy, got professional staging, and my home sold in 21 days - at asking price! I wish I had called her first.'
    },
    {
      location: 'Henderson',
      name: 'Robert Martinez',
      before: { days: 120, offers: 0 },
      after: { days: 18, price: '3% over asking' },
      issue: 'Poor presentation and limited marketing',
      solution: 'Professional photography, virtual tour, and comprehensive digital marketing',
      quote: 'We had very few showings and no offers in 4 months. Dr. Jan invested in professional marketing and within two weeks we had multiple offers. Sold in 18 days above asking!'
    },
    {
      location: 'North Las Vegas',
      name: 'Jennifer Chen',
      before: { days: 150, offers: 0 },
      after: { days: 28, price: 'Asking price' },
      issue: 'Competing with new construction',
      solution: 'Highlighted established neighborhood advantages and strategic pricing',
      quote: 'New construction nearby made our home feel outdated. Dr. Jan showed us how to highlight our home\'s advantages - mature landscaping, proven quality, and established neighborhood. Sold in under a month!'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success Stories: Homes That Didn't Sell, Then Sold Successfully
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Real results from homeowners whose properties didn't sell initially. Learn how Dr. Janet Duffy helped them sell successfully.
          </p>
        </div>
      </section>

      {/* H2 #1: Success Stories Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Proven Results for Homes That Didn't Sell
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            These are real homeowners with real homes that didn't sell initially. Dr. Janet Duffy helped them identify what went wrong and created winning strategies that resulted in successful sales. Their stories show that homes that don't sell can absolutely be sold with the right approach.
          </p>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{story.location} Home - {story.name}</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-900 mb-2">Before Working with Dr. Jan:</p>
                        <ul className="text-red-700 space-y-1">
                          <li>• {story.before.days} days on market</li>
                          <li>• {story.before.offers} offers</li>
                          <li>• Property expired</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-green-900 mb-2">After Working with Dr. Jan:</p>
                        <ul className="text-green-700 space-y-1">
                          <li>• Sold in {story.after.days} days</li>
                          <li>• Final price: {story.after.price}</li>
                          <li>• Successful closing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-blue-50 p-6 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">The Problem:</h4>
                      <p className="text-gray-700 mb-4">{story.issue}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">The Solution:</h4>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="italic text-gray-700 mb-2">"{story.quote}"</p>
                      <p className="font-semibold text-gray-900">- {story.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #2: The Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How We Help Homes Sell After They Didn't Sell Before
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The process starts with understanding what went wrong, then systematically fixing those issues to position your home for successful sale. Here's how Dr. Janet Duffy approaches homes that didn't sell.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Analysis</h3>
              <p className="text-blue-100">Understand why it didn't sell</p>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-blue-100">Create custom action plan</p>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-blue-100">Implement improvements</p>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <h3 className="text-xl font-bold mb-2">Success</h3>
              <p className="text-blue-100">Sell successfully and close</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Analysis Phase</h3>
              <p className="text-gray-700 mb-3">
                Every successful relisting starts with honest analysis of what went wrong. Dr. Jan reviews the original listing details: pricing strategy, marketing efforts, showing activity, buyer feedback, and market conditions during listing period.
              </p>
              <p className="text-gray-700 mb-3">
                She examines comparable sales to understand if pricing was the issue. She reviews photos and staging to assess presentation. She analyzes marketing reach to identify gaps in buyer exposure. This comprehensive analysis reveals specific issues needing attention.
              </p>
              <p className="text-gray-700">
                The analysis isn't about blame but about understanding what prevented success so those issues can be systematically addressed. Most homes have one to two primary issues rather than problems across every area. Identifying these specific issues enables targeted, cost-effective fixes.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Creating the Action Plan</h3>
              <p className="text-gray-700 mb-3">
                Based on analysis, Dr. Jan creates a detailed action plan addressing identified issues. If pricing was the problem, she recommends specific listing price with market justification. If presentation needed work, she outlines staging or photography improvements. If marketing was insufficient, she explains comprehensive promotional strategy.
              </p>
              <p className="text-gray-700 mb-3">
                The plan includes timeline, costs, expected impact, and expected results. This transparency ensures homeowners understand what will be done, why it matters, and what outcomes to expect. Clear communication builds confidence in the strategy.
              </p>
              <p className="text-gray-700">
                Homeowners appreciate knowing upfront what improvements will cost versus expected sale price and time savings. This helps make informed decisions about investing in staging, photography, or marketing to maximize both sale price and speed to closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #3: Your Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What This Means for You
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Your home didn't sell for specific reasons. Those reasons are fixable. Dr. Janet Duffy has made this her specialty, and her success rate proves the approach works.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">47 Success Stories in 2024</h3>
              <p className="text-gray-700 mb-3">
                In 2024 alone, Dr. Jan helped 47 homeowners successfully sell properties that had previously expired. These homes averaged 32 days on market with her strategy, compared to their original 180+ day listings that never found buyers.
              </p>
              <p className="text-gray-700">
                The success rate demonstrates that homes that don't sell can absolutely be sold with the right approach. The common denominator in these successes is systematic problem-identification and targeted solutions rather than generic listing approaches.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Average 32 Days to Sale</h3>
              <p className="text-gray-700 mb-3">
                Her expired listings typically sell in 30-45 days once issues are addressed, compared to their original multi-month listings that never received offers. This speed matters because every month a home sits unsold costs money in mortgage, utilities, insurance, and HOA fees.
              </p>
              <p className="text-gray-700">
                Faster sales also mean less stress, ability to move forward with life plans, and reduced risk of price adjustments if market conditions change. The goal isn't just selling but selling quickly at the best price possible.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Getting Your Own Success Story</h3>
            <p className="mb-4 text-blue-100">
              The first step is scheduling a free consultation. During this consultation, Dr. Jan reviews your specific situation, analyzes what likely prevented your sale, and outlines a strategic approach customized to your home and goals.
            </p>
            <p className="mb-4 text-blue-100">
              There's no obligation, no pressure, just honest professional assessment. She'll tell you if your home is ready to relist immediately or needs improvements first, what those improvements would cost and their expected impact on sale price and time.
            </p>
            <p className="text-blue-100">
              Most homeowners find the consultation provides clarity on why their home didn't sell and confidence in a path forward. From there, it's about executing the strategy and achieving the successful sale you were hoping for initially.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let Dr. Janet Duffy help transform your home that didn't sell into a successful sale. Schedule your free consultation today.
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
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

