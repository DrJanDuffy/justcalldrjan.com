'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StructuredData from './structured-data'
import { getBreadcrumbSchema, BASE_URL } from '@/lib/schema'

interface BreadcrumbProps {
  items?: Array<{ name: string; path: string }>
  showHome?: boolean
}

export default function Breadcrumbs({ items, showHome = true }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname, showHome)
  
  // Create structured data
  const schemaData = getBreadcrumbSchema(
    breadcrumbItems.map(item => ({
      name: item.name,
      url: `${BASE_URL}${item.path}`
    }))
  )

  return (
    <>
      <StructuredData data={schemaData} id="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className="py-4 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-gray-700 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.path} className="text-blue-600 hover:text-blue-800">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

function generateBreadcrumbsFromPath(pathname: string, showHome: boolean): Array<{ name: string; path: string }> {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: Array<{ name: string; path: string }> = []
  
  if (showHome) {
    breadcrumbs.push({ name: 'Home', path: '/' })
  }
  
  // Handle special cases
  const pathMappings: Record<string, string> = {
    'neighborhoods': 'Neighborhoods',
    'didnt-sell': 'Why Didn\'t My Home Sell?',
    'success-stories': 'Success Stories',
    'expired-listing-help': 'Expired Listing Help',
    'home-valuation': 'Home Valuation',
    'how-it-works': 'How It Works',
    'why-berkshire-hathaway': 'Why Berkshire Hathaway',
    'berkshire-hathaway': 'Berkshire Hathaway',
    'zipcodes': 'Zip Codes',
    'summerlin': 'Summerlin',
    'henderson': 'Henderson',
    'north-las-vegas': 'North Las Vegas',
    'downtown-las-vegas': 'Downtown Las Vegas',
    'paradise': 'Paradise',
    'boulder-city': 'Boulder City',
    'enterprise': 'Enterprise',
    'spring-valley': 'Spring Valley',
    'winchester': 'Winchester',
    'whitney': 'Whitney',
    'the-trails': 'The Trails',
    'the-foothills': 'The Foothills',
    'sun-city': 'Sun City',
    'green-valley': 'Green Valley',
    'lake-las-vegas': 'Lake Las Vegas',
    'macdonald-ranch': 'MacDonald Ranch',
    'skye-canyon': 'Skye Canyon',
    'fremont': 'Fremont',
    'marketing-power': 'Marketing Power',
    'pricing-mastery': 'Pricing Mastery',
    'communication': 'Communication',
    'turnaround-plan': 'Turnaround Plan',
    'comparison': 'Brokerage Comparison'
  }
  
  let currentPath = ''
  
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`
    const displayName = pathMappings[segment] || formatSegmentName(segment)
    breadcrumbs.push({ name: displayName, path: currentPath })
  })
  
  return breadcrumbs
}

function formatSegmentName(segment: string): string {
  // Handle zip codes
  if (/^\d{5}$/.test(segment)) {
    return `Zip Code ${segment}`
  }
  
  // Format kebab-case to Title Case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

