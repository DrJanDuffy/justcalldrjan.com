import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import SiteNavigation from '../components/site-nav'
import Analytics from './analytics'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dr. Janet Duffy - Las Vegas Real Estate Agent',
  description: 'Your trusted Las Vegas real estate expert. Find your dream home or sell with confidence. Call Dr. Janet Duffy today!',
  openGraph: {
    title: 'Dr. Janet Duffy - Las Vegas Real Estate Agent',
    description: 'Your trusted Las Vegas real estate expert. Find your dream home or sell with confidence.',
    images: ['/og-image.png'],
    url: 'https://www.justcalldrjan.com',
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
          <DeployBanner />
          <SiteNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
