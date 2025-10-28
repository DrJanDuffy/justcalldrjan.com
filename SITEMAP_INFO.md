# Sitemap Information

## Where Are The Sitemaps?

### File Locations
- **`app/sitemap.ts`** - Source code that generates the sitemap dynamically
- **`app/robots.ts`** - References the sitemap URLs

### Live URLs (Accessible after deployment)
1. **Primary:** https://www.calldrduffy.com/sitemap.xml
2. **Secondary:** https://justcalldrjan.com/sitemap.xml

Both URLs return the same sitemap XML (18 URLs total)

## What's In The Sitemap?

The sitemap includes all pages for BOTH domains (www.calldrduffy.com and justcalldrjan.com):

### High Priority Pages (Priority 1.0, Weekly updates)
1. `/` - Homepage (www.calldrduffy.com)
2. `/didnt-sell` - Why didn't your home sell page
3. `/` - Homepage (justcalldrjan.com)
4. `/didnt-sell` - Why didn't your home sell page

### Important Pages (Priority 0.9, Weekly updates)
5. `/success-stories` - Success stories
6. `/neighborhoods` - Neighborhoods hub
7. `/success-stories` - Success stories (alternate domain)
8. `/neighborhoods` - Neighborhoods hub (alternate domain)

### Standard Pages (Priority 0.8-0.85, Monthly/Weekly updates)
9-18. About, Contact, and 3 Neighborhood pages (Summerlin, Henderson, North Las Vegas) for both domains

## How To Submit To Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: **calldrduffy.com** (Domain type)
3. Verify ownership via DNS
4. Go to "Sitemaps" section
5. Submit: `sitemap.xml`
6. Done! Google will crawl both www and non-www automatically

## Notes

- Next.js automatically serves `/sitemap.xml` from the `app/sitemap.ts` file
- The sitemap is dynamically generated on each request
- Last modified dates update automatically
- Both domains share the same content (18 total URLs = 9 pages × 2 domains)
- You only need to submit ONCE to Google Search Console when using Domain type

