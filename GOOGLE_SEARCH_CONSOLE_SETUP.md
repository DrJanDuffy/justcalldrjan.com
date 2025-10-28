# Google Search Console Setup for Dual Domains

This document provides instructions for setting up Google Search Console for both domains.

## Domain Strategy

**Primary Domain:** `https://www.calldrduffy.com` (Recommended)
**Secondary Domain:** `https://justcalldrjan.com` (Redirect from non-www to www)

## Recommended Setup

### Primary Setup (Recommended)

Add both domains to Google Search Console, but use `www.calldrduffy.com` as your **primary domain**:

1. **Add `www.calldrduffy.com` as Property Type: Domain**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Click "Add Property"
   - Select "Domain" (not "URL prefix")
   - Enter: `calldrduffy.com`
   - This covers all variations: www, non-www, and all subdomains

2. **Verify Ownership**
   - DNS verification is recommended
   - Add TXT record to domain DNS
   - Wait for propagation
   - Click "Verify"

3. **Submit Sitemap**
   - Go to "Sitemaps"
   - Submit: `sitemap.xml`
   - The sitemap automatically includes both www and non-www versions

### Alternative Setup (If needed separately)

If you need to manage both domains separately:

1. **Add `www.calldrduffy.com` (Primary)**
   - URL prefix: `https://www.calldrduffy.com`
   - Verify via HTML meta tag or DNS
   - Submit sitemap: `https://www.calldrduffy.com/sitemap.xml`

2. **Add `justcalldrjan.com` (Secondary)**
   - URL prefix: `https://justcalldrjan.com`  
   - Verify via HTML meta tag or DNS
   - Submit sitemap: `https://justcalldrjan.com/sitemap.xml`

## Files Created

1. **`app/sitemap.ts`** - Dynamic sitemap with BOTH domains
   - Automatically includes all pages for www.calldrduffy.com
   - Automatically includes all pages for justcalldrjan.com
   
2. **`app/robots.ts`** - Robots.txt with BOTH sitemap URLs

3. **`public/google-site-verification.html`** - HTML verification file template

## Canonical URLs

Set up canonical URLs to prevent duplicate content issues:

### In `app/layout.tsx`
The Open Graph URL is set to: `https://www.calldrduffy.com`

### Recommended Apache/Nginx Config

Set up redirect to ensure all traffic goes to www:

```apache
# Redirect non-www to www
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]
```

## Pages Included in Sitemap

All pages are included for BOTH domains (18 total URLs in sitemap):

### Core Pages (Priority 1.0, Weekly)
- Homepage
- Didn't Sell page

### High Priority (0.9)
- Success Stories
- Neighborhoods Hub

### Standard Priority (0.8-0.85)
- About
- Contact  
- Summerlin
- Henderson
- North Las Vegas

## Monitoring

After setup, monitor in Google Search Console:
- **Performance** - Track impressions, clicks, CTR, and average position
- **Coverage** - Check indexed pages
- **Mobile Usability** - Ensure mobile-friendly experience
- **Core Web Vitals** - Monitor page speed and user experience metrics
- **Crawl Stats** - Monitor crawl budget usage

## Notes

- The sitemap updates automatically when you deploy new pages
- Google typically crawls weekly
- Request manual indexing for important new pages
- Monitor for 404 errors and fix them promptly
- Both domains point to the same content, so canonical tags are important
