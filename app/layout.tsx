import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import SiteNavigation from '../components/site-nav'
import SiteFooter from '../components/site-footer'
import Analytics from './analytics'
import StructuredData from '../components/structured-data'
import { 
  getLocalBusinessSchema, 
  getOrganizationSchema, 
  getRealEstateAgentSchema,
  getWebSiteSchema 
} from '../lib/schema'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Janet Duffy | Licensed Real Estate Professional | Berkshire Hathaway HomeServices',
  description: 'Licensed Real Estate Professional with Berkshire Hathaway HomeServices. Las Vegas, NV. License #S.0197614. Expert help for homes that didn\'t sell.',
  openGraph: {
    title: 'Dr. Janet Duffy | Licensed Real Estate Professional | Berkshire Hathaway HomeServices',
    description: 'Licensed Real Estate Professional with Berkshire Hathaway HomeServices. Las Vegas, NV. License #S.0197614.',
    images: ['/og-image.png'],
    url: 'https://www.calldrduffy.com',
    siteName: 'Just Call Dr. Jan',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Janet Duffy - Las Vegas Real Estate',
    description: 'Your trusted Las Vegas real estate expert. Find your dream home or sell with confidence.',
    images: ['/og-image.png'],
  },
  keywords: ['Las Vegas real estate', 'Nevada homes', 'real estate agent', 'Dr. Janet Duffy', 'Las Vegas realtor', 'property search', 'home buying', 'home selling'],
  authors: [{ name: 'Dr. Janet Duffy' }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
        <StructuredData data={getRealEstateAgentSchema()} id="real-estate-agent-schema" />
        <StructuredData data={getLocalBusinessSchema()} id="local-business-schema" />
        <StructuredData data={getOrganizationSchema()} id="organization-schema" />
        <StructuredData data={getWebSiteSchema()} id="website-schema" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          <DeployBanner />
          <SiteNavigation />
          <main id="main-content">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
