'use client'

import Link from 'next/link'

export default function WhyDidntItSellPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why Didn't Your Home Sell? The Most Common Reasons
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Understanding why your home didn't sell is the first step to selling it successfully. Here are the most common reasons and how to fix them.
          </p>
        </div>
      </section>

      {/* H2 #1: The Three Main Reasons */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Three Main Reasons Homes Don't Sell
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            In her experience working with over 100 homes that didn't sell initially, Dr. Janet Duffy has identified three primary causes: pricing, presentation, and promotion. Understanding which affected your home is the first step toward successfully selling it.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pricing Problems</h3>
              <p className="text-gray-700 mb-3">
                Wrong pricing is the number one reason homes don't sell. When your home is priced above market value, buyers won't make offers no matter how many showings you get. Overpricing makes buyers think there's room to negotiate or assume something's wrong with the property.
              </p>
              <p className="text-gray-700 mb-3">
                Common pricing mistakes include pricing based on what you need rather than what the market will pay, using outdated comparable sales, comparing to dissimilar properties, or pricing emotionally based on investment or memories rather than market reality.
              </p>
              <p className="text-gray-700">
                The fix requires honest market analysis: understanding current market conditions, recent sales in your exact neighborhood, days on market for comparable properties, and buyer feedback from showings. Pricing correctly from the start dramatically increases your chances of selling.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Presentation Issues</h3>
              <p className="text-gray-700 mb-3">
                Poor presentation makes buyers undervalue your home or lose interest before even viewing it in person. Presentation includes photography quality, staging, cleanliness, maintenance, and curb appeal. Every aspect matters in today's competitive market.
              </p>
              <p className="text-gray-700 mb-3">
                Photography is especially critical since most buyers first encounter your home online. Poor photos make buyers scroll past your listing. Professional photography showcasing your home's best features is essential for attracting serious buyers.
              </p>
              <p className="text-gray-700">
                Staging helps buyers envision themselves living in the space. Decluttering, depersonalizing, and strategic furniture placement makes rooms appear larger and more appealing. Professional staging often pays for itself through faster sales and higher prices.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Marketing Gaps</h3>
              <p className="text-gray-700 mb-3">
                Insufficient marketing reach means your home never found the right buyers. While MLS listing is essential, today's buyers discover homes through multiple channels: social media, search engines, email alerts, agent networks, and digital advertising.
              </p>
              <p className="text-gray-700 mb-3">
                Modern marketing requires professional videography, virtual tours, social media promotion, targeted digital advertising, neighborhood marketing, email campaigns, and agent outreach. Passive listing on MLS alone isn't enough in competitive markets.
              </p>
              <p className="text-gray-700">
                Effective marketing reaches buyers wherever they're searching for homes, showcases your home's unique features, and creates urgency through strategic promotion and timing. Comprehensive marketing strategy attracts more serious buyers and increases chances of competitive offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2: How to Diagnose Your Specific Issue */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How to Diagnose Your Specific Problem
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Your home likely didn't sell due to one or more of these three issues. Here's how to identify which areas affected your specific situation and what signs indicate each problem.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pricing Problem Signs</h3>
              <p className="text-gray-700 mb-3">
                Signs that pricing was the issue include having many showings but no offers, receiving feedback that the home was overpriced, other homes in your neighborhood selling while yours sat, or your home being one of oldest listings in the area.
              </p>
              <p className="text-gray-700 mb-3">
                If agents brought buyers who seemed interested but didn't make offers, that's typically a pricing issue. Buyers liked the home but felt the asking price was too high compared to market value or competing properties.
              </p>
              <p className="text-gray-700">
                Low showing activity combined with no offers suggests pricing is significantly off-market. When homes are dramatically overpriced, buyers and agents often skip viewing entirely because the price immediately signals it's not worth seeing.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Presentation Problem Signs</h3>
              <p className="text-gray-700 mb-3">
                Presentation issues are indicated by buyers saying the home looked different in photos than in person, feedback about dated décor or needed updates, complaints about cleanliness or maintenance issues, or very short showing times.
              </p>
              <p className="text-gray-700 mb-3">
                If buyers toured but didn't return for second visits despite no pricing objections, presentation was likely the issue. Online buyers seeing poor photos before even touring is also a sign that presentation starts with photography.
              </p>
              <p className="text-gray-700">
                Presentation problems are often easiest to fix: professional photography and staging, cleaning and minor repairs, or cosmetic updates like fresh paint and updated fixtures. These improvements have high return on investment for selling success.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Marketing Problem Signs</h3>
            <p className="mb-4 text-blue-100">
              Marketing issues are harder for homeowners to identify but show up in low showing activity despite reasonable pricing and good presentation. If comparable homes are getting showings while yours sits, marketing reach was likely insufficient.
            </p>
            <p className="mb-4 text-blue-100">
              Lack of online presence, minimal agent promotion, no open houses or virtual tours, and absence from buyer search results are all marketing gaps. Modern buyers use multiple search methods, and homes not appearing in those searches don't get seen.
            </p>
            <p className="text-blue-100">
              Effective marketing creates buyer interest before they even see the home in person. Professional marketing strategy includes SEO for property search, social media presence, digital advertising, virtual tours, and comprehensive promotion across platforms buyers use.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: How Dr. Jan Fixes These Problems */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How We Fix Homes That Didn't Sell
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Janet Duffy's systematic approach addresses each problem area with proven strategies that consistently work. Her success rate with expired listings comes from diagnosing specific issues and creating targeted solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixing Pricing Issues</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan provides comprehensive market analysis showing recent sales in your exact neighborhood, current competition, and recommended pricing strategy. This objective data replaces guesswork with informed decisions.
              </p>
              <p className="text-gray-700">
                Her pricing strategy considers market conditions, comparable property details, buyer psychology, and positioning relative to competition. The goal is setting price that attracts serious buyers while maximizing your return.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixing Presentation</h3>
              <p className="text-gray-700 mb-3">
                She either works with you to improve staging using your existing furniture or invests in professional staging service depending on what makes most sense. Professional photography and videography are included.
              </p>
              <p className="text-gray-700">
                Simple improvements like decluttering, depersonalizing, painting, and basic repairs often make dramatic differences. She identifies which improvements add most value versus cost, ensuring smart investment decisions.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixing Marketing</h3>
              <p className="text-gray-700 mb-3">
                Her marketing strategy is comprehensive and multi-channel: professional photography and videography, virtual tours, social media promotion, targeted digital advertising, neighborhood marketing, email campaigns, and agent network activation.
              </p>
              <p className="text-gray-700">
                This aggressive marketing approach ensures your home reaches buyers wherever they search for properties. The goal is maximum exposure to serious buyers who are actively looking for homes like yours in your price range and area.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Systematic Approach</h3>
            <p className="text-gray-700 mb-3">
              Rather than trying everything and hoping something works, Dr. Jan's approach systematically addresses identified issues. If pricing was the only problem, that gets fixed. If it was combination of pricing and presentation, both get addressed comprehensively.
            </p>
            <p className="text-gray-700 mb-3">
              She doesn't assume what needs fixing but analyzes specifically what happened with your listing: showing activity, buyer feedback, competition, market conditions, and presentation. This diagnostic approach ensures the right problems get fixed efficiently.
            </p>
            <p className="text-gray-700">
              The result is usually success where there was previous failure: homes that sat for months selling in weeks, properties with no offers attracting multiple offers, frustrated homeowners becoming successful sellers. This systematic approach is why she maintains such strong results with what many agents consider difficult listings.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Real Results */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Real Results: From "Didn't Sell" to Sold
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Here are actual examples of homes that didn't sell initially, what the problems were, and how Dr. Janet Duffy successfully sold them.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Summerlin Home - Pricing Issue</h3>
              <p className="text-gray-700 mb-3">
                A 4-bedroom Summerlin home sat on market for 6 months with 47 showings but zero offers. The homeowner was convinced the price was fair based on their renovation investment. Dr. Jan's market analysis showed the home was priced 12% above recent comparable sales.
              </p>
              <p className="text-gray-700 mb-3">
                She recommended strategic price adjustment along with professional staging to highlight renovation quality. The home sold in 21 days at 98% of the adjusted listing price - which was still significantly more than the original pricing strategy would have achieved.
              </p>
              <p className="text-gray-700">
                The homeowner learned that overpricing doesn't protect value, it prevents sales. Proper pricing attracted serious buyers and competitive offers, while professional presentation showcased the renovation investment value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Henderson Home - Presentation and Marketing</h3>
              <p className="text-gray-700 mb-3">
                A Henderson home with 3 months on market had limited showing activity. The photos were dimly lit and didn't showcase the home's features. No virtual tour, minimal online presence, and only basic MLS marketing meant most buyers never discovered the listing.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan invested in professional photography and virtual tour, implemented social media marketing and digital advertising, and created neighborhood marketing campaign. Within 2 weeks, showing activity tripled and the home received multiple offers.
              </p>
              <p className="text-gray-700">
                The home sold for asking price in 32 days. The investment in professional marketing paid for itself through faster sale and avoided continued carrying costs. The homeowner realized their great home wasn't the problem - lack of buyer awareness was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Sell Your Home Successfully?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Dr. Janet Duffy specializes in helping homes that didn't sell get sold. Schedule a free consultation to discuss your specific situation and create a winning sales strategy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17025667890"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
