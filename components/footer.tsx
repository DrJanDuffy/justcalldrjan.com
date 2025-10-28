export default function Footer() {
  return (
    <footer 
      itemScope 
      itemType="https://schema.org/LocalBusiness"
      className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p>
          © 2025{' '}
          <span itemProp="name">Dr. Janet Duffy</span>
          {' '}-{' '}
          <span itemProp="description">Las Vegas's Trusted Expert for Hard-to-Sell Homes</span>.
          {' '}All rights reserved.
        </p>
        <p>
          NV RE License #{' '}
          <span itemProp="licenseNumber">S.0197614</span>
        </p>
        <p>Specializing in getting top dollar for homes that didn't sell the first time around.</p>
        
        {/* Hidden schema data */}
        <meta itemProp="priceRange" content="$$" />
        <meta itemProp="image" content="https://www.calldrduffy.com/og-image.png" />
        <meta itemProp="telephone" content="+17022221964" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="addressLocality" content="Las Vegas" />
          <meta itemProp="addressRegion" content="NV" />
          <meta itemProp="postalCode" content="89109" />
        </div>
      </div>
    </footer>
  )
}

