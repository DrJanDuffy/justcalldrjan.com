'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Dr. Janet Duffy: Las Vegas Real Estate Expert Helping Homes Sell When They Didn't Before
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Transforming frustrated homeowners into successful sellers. Specializing in helping Las Vegas homes that didn't sell get sold.
          </p>
        </div>
      </section>

      {/* H2 #1: Who is Dr. Janet Duffy */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Who is Dr. Janet Duffy?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Dr. Janet Duffy is a Las Vegas real estate agent who specializes in helping homeowners whose properties didn't sell the first time around. With over a decade of experience in the Las Vegas real estate market, she has built a reputation for turning challenging situations into successful home sales.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What makes Dr. Jan unique is her focus on expired listings - properties that came off the market because they didn't sell. While many agents pursue new listings, fewer actively work with homeowners who had unsuccessful first attempts. This specialization makes her exceptionally effective at diagnosing problems and creating winning strategies.
              </p>
              <p className="text-lg text-gray-700">
                Her track record speaks for itself: in 2024 alone, she helped 47 homeowners successfully sell properties that had previously expired. These homes averaged just 32 days on market with her strategy, compared to their original 180+ day listings that never found buyers. Her 96% client satisfaction rate reflects her commitment to results and communication.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Dr. Jan's Results</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-blue-600 mb-1">47 Homes Sold</p>
                  <p className="text-gray-600">Properties that didn't sell before, sold successfully in 2024</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-1">32 Day Average</p>
                  <p className="text-gray-600">Days to sale for relisted properties with strategic approach</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-1">96% Satisfaction</p>
                  <p className="text-gray-600">Client satisfaction rate based on reviews and referrals</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-1">$3.2M Saved</p>
                  <p className="text-gray-600">Combined value saved for clients through strategic pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2: Why Focus on Homes That Didn't Sell */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Specialize in Homes That Didn't Sell?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Many agents avoid working with expired listings because they seem difficult. Dr. Jan has built her entire practice around these challenges, developing proven strategies that consistently work.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: The Real Problem with Homes That Don't Sell</h3>
              <p className="text-gray-700 mb-3">
                In her experience working with over 100 expired listings, Dr. Jan has identified that homes don't sell for three main reasons: pricing, presentation, or promotion. The good news? All three are fixable with the right strategy.
              </p>
              <p className="text-gray-700 mb-3">
                Pricing issues are most common. Homes priced above market value sit indefinitely while properly priced homes in the same neighborhood sell quickly. Dr. Jan provides detailed market analyses showing exactly where the market is and how to position properties competitively.
              </p>
              <p className="text-gray-700">
                Presentation problems include poor staging, lackluster photography, outdated décor, or maintenance issues that turn off buyers. Presentation matters tremendously - professional staging and photography alone can make the difference between selling and sitting.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Promotion and Marketing Gaps</h3>
              <p className="text-gray-700 mb-3">
                Marketing reach is often the third issue. Many expired listings had minimal marketing beyond the MLS - maybe an open house or two but not the comprehensive digital marketing strategy needed in today's market.
              </p>
              <p className="text-gray-700 mb-3">
                Dr. Jan's marketing approach is aggressive and multi-channel: professional photography and videography, social media promotion, targeted digital advertising, neighborhood marketing, agent network outreach, and strategic showing schedules. The goal is maximum exposure to serious buyers.
              </p>
              <p className="text-gray-700">
                What sets her apart is understanding that these three issues often overlap. A home might have two of the three problems, or all three. Her initial analysis identifies every issue, then creates a comprehensive action plan addressing each aspect systematically.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">H3: Success Through Systematic Problem-Solving</h3>
            <p className="mb-4 text-blue-100">
              Dr. Jan's process starts with honest assessment: why didn't it sell? She analyzes the original listing price versus actual market value. She reviews the photos and staging. She examines the marketing efforts and showing feedback. She speaks with the previous agent when possible to understand what feedback came in.
            </p>
            <p className="mb-4 text-blue-100">
              This detective work reveals the specific issues. From there, she creates a personalized strategy. For a pricing issue, she provides detailed comparables showing exactly where to price. For presentation, she either works with the seller on improvements or invests in professional staging and photography. For marketing gaps, she implements her aggressive multi-channel approach.
            </p>
            <p className="text-blue-100">
              The result? Homes that sit unsold for 6 months sell in 3-4 weeks. Properties with no offers suddenly attract multiple offers. Frustrated homeowners become successful sellers. This systematic approach is why she maintains such strong results despite working with what many consider "difficult" listings.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Dr. Jan's Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Dr. Jan's Expertise: Deep Knowledge of Las Vegas Real Estate
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Dr. Janet Duffy isn't just another Las Vegas real estate agent. She brings deep local market knowledge, systematic problem-solving skills, and proven strategies specifically designed for the Las Vegas market's unique characteristics.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Las Vegas Market Knowledge</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan has sold homes throughout Las Vegas: Summerlin's master-planned communities, Henderson's affordable neighborhoods, downtown's urban condos, Paradise's luxury high-rises, and everything in between.
              </p>
              <p className="text-gray-700">
                She understands how each area's market differs - what works in Summerlin doesn't necessarily work in Henderson. Her hyperlocal knowledge means she knows the schools, HOA cultures, market trends, and buyer profiles for each neighborhood.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Pricing Strategy Expertise</h3>
              <p className="text-gray-700 mb-3">
                Pricing homes correctly in Las Vegas requires understanding both market forces and property-specific factors. Dr. Jan's pricing strategy goes beyond computer-generated estimates to consider local nuances, competition timing, seasonal patterns, and buyer psychology.
              </p>
              <p className="text-gray-700">
                She provides detailed comparative market analyses showing recent sales, active competition, withdrawn listings, and market direction. This comprehensive approach ensures pricing that's competitive yet maximizes seller value.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Marketing Excellence</h3>
              <p className="text-gray-700 mb-3">
                Modern real estate marketing requires a comprehensive digital presence, and Dr. Jan delivers professional marketing that reaches buyers everywhere they search for homes.
              </p>
              <p className="text-gray-700">
                Her listings feature professional photography and videography, virtual tours, social media promotion, digital advertising, targeted neighborhood marketing, and agent network activation. This multi-channel approach ensures maximum exposure to serious buyers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Neighborhood Expertise</h3>
              <p className="text-gray-700 mb-3">
                Dr. Jan knows Las Vegas neighborhoods intimately: Summerlin's master-planned luxury, Henderson's family-friendly value, downtown's urban appeal, Paradise's strip-adjacent living, and dozens of other communities.
              </p>
              <p className="text-gray-700 mb-3">
                This knowledge means she understands what makes each neighborhood special, what buyers are looking for there, and how to position properties for success in that specific market. She knows school zones, HOA cultures, local amenities, and market dynamics.
              </p>
              <p className="text-gray-700">
                Whether you're selling a luxury Summerlin home or an affordable Henderson property, she understands your specific market. This hyperlocal expertise is crucial for both accurate pricing and effective marketing that reaches the right buyers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Problem-Solving Approach</h3>
              <p className="text-gray-700 mb-3">
                What distinguishes Dr. Jan is her systematic approach to solving the problems that caused homes not to sell. Many agents simply try the same things again hoping for different results. Dr. Jan diagnoses the specific issues and creates targeted solutions.
              </p>
              <p className="text-gray-700 mb-3">
                Her diagnostic process examines pricing history, showing patterns, buyer feedback, market conditions, competition, and property presentation. This comprehensive analysis reveals exactly what needs fixing, not guesswork.
              </p>
              <p className="text-gray-700">
                From there, she creates a detailed action plan with specific steps, timelines, and investment requirements. This transparency ensures homeowners understand the strategy and makes informed decisions. The result is a clear path from "didn't sell" to "sold successfully."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #4: Working with Dr. Jan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What It's Like Working with Dr. Janet Duffy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Initial Consultation and Assessment</h3>
              <p className="text-gray-700 mb-3">
                Working with Dr. Jan starts with a comprehensive consultation where she learns about your situation. She wants to understand what happened with the original listing: why did you choose that agent, how was the home priced, what marketing was done, what feedback came from showings?
              </p>
              <p className="text-gray-700 mb-3">
                Then she conducts her own analysis. She examines your home in person, reviews comparable sales, studies the competition, analyzes market conditions, and identifies the specific issues that likely prevented sale. This assessment is thorough and honest - she'll tell you exactly what needs addressing.
              </p>
              <p className="text-gray-700">
                The goal isn't to criticize previous efforts but to understand what didn't work so those same mistakes aren't repeated. Her assessment provides clarity on what needs fixing and why, giving homeowners confidence in the strategy moving forward.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Strategic Action Plan</h3>
              <p className="text-gray-700 mb-3">
                Once the issues are identified, Dr. Jan creates a detailed action plan customized to your specific situation. This plan addresses pricing, presentation, and marketing systematically. It's not generic advice - it's a tailored strategy for your home, your neighborhood, and your goals.
              </p>
              <p className="text-gray-700 mb-3">
                The plan includes specific recommendations: pricing adjustments with market justification, staging suggestions or professional staging investment, photography and videography, marketing channels and timeline, and showing strategy. Everything is explained in terms of impact on time to sale and sale price.
              </p>
              <p className="text-gray-700">
                Homeowners appreciate this transparency and detail. You'll know exactly what will be done, why each step matters, and what results to expect. This clear communication and upfront planning builds confidence and trust throughout the selling process.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">H3: Ongoing Communication and Results</h3>
            <p className="text-gray-700 mb-3">
              Dr. Jan maintains consistent communication throughout the selling process. Homeowners receive regular updates on showing activity, buyer feedback, market changes, and strategic adjustments. She's responsive to questions and proactive in managing issues as they arise.
            </p>
            <p className="text-gray-700 mb-3">
              Her approach combines proven systematic strategies with flexibility to adapt to changing market conditions and buyer feedback. If something isn't working, she adjusts quickly rather than continuing ineffective approaches. This agility comes from experience working with challenging situations.
            </p>
            <p className="text-gray-700">
              The result is usually success where there was previous failure. Most of her clients see their homes sell within 30-45 days, often with multiple offers. The combination of proper pricing, strong presentation, aggressive marketing, and experienced negotiation delivers results that turn frustrated homeowners into happy sellers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Sell Your Home That Didn't Sell Before?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let Dr. Janet Duffy show you how strategic approach and proven expertise can turn your unsold property into a successful sale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17025667890"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: (702) 566-7890
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

