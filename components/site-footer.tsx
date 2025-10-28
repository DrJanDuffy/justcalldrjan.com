import Link from 'next/link'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      itemScope 
      itemType="https://schema.org/LocalBusiness"
      className="bg-gray-900 text-white py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dr. Janet Duffy</h3>
            <p className="text-gray-300 mb-2">
              © {currentYear} <span itemProp="name">Dr. Janet Duffy</span> - <span itemProp="description">Las Vegas&apos;s Trusted Expert for Hard-to-Sell Homes</span>. All rights reserved.
            </p>
            <p className="text-gray-300">
              NV RE License #<span itemProp="licenseNumber">S.0197614</span>
            </p>
            <p className="text-gray-300 mt-2">
              Specializing in getting top dollar for homes that didn&apos;t sell the first time around.
            </p>
            
            {/* Hidden schema metadata */}
            <meta itemProp="priceRange" content="$$" />
            <meta itemProp="image" content="https://www.calldrduffy.com/og-image.png" />
            <meta itemProp="telephone" content="+17022221964" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
              <meta itemProp="addressLocality" content="Las Vegas" />
              <meta itemProp="addressRegion" content="NV" />
              <meta itemProp="postalCode" content="89109" />
              <meta itemProp="addressCountry" content="US" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/didnt-sell" className="hover:text-white transition-colors">Why Didn&apos;t My Home Sell?</Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Dr. Jan</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+17022221964" className="hover:text-white transition-colors">
                  Phone: (702) 222-1964
                </a>
              </li>
              <li>
                <a href="mailto:contact@calldrduffy.com" className="hover:text-white transition-colors">
                  Email: contact@calldrduffy.com
                </a>
              </li>
              <li className="mt-4">
                <p className="text-sm text-gray-400">
                  Serving all of Las Vegas, Henderson, Summerlin, and surrounding areas
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            Dr. Janet Duffy is a licensed real estate agent with Berkshire Hathaway HomeServices.
          </p>
        </div>
      </div>
    </footer>
  )
}

