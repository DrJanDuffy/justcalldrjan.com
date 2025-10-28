# E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) Improvement Plan

## Current Assessment

### Strengths
- Clear expertise demonstration (specific results, statistics)
- First-hand experience mentioned (47 homes sold, 32-day average)
- Trust signals present (phone number, testimonials)
- Focused content (expired listings specialization)
- Natural "didn't sell" language (people-first, not SEO-first)

### Areas to Improve

1. **Missing Author Bylines**
   - No clear author attribution on content pages
   - Need "Who" (author information) on each page

2. **Limited "How" Information**
   - Process details could be more explicit
   - Missing method explanations for some claims

3. **Schema Markup Needed**
   - No structured data for LocalBusiness
   - Missing RealEstateAgent schema
   - No author schema

4. **Credential Display**
   - License information not visible
   - Professional affiliations not shown

## Implementation Plan

### 1. Add Author Bylines to Content Pages
**Files to modify:**
- All neighborhood pages
- Educational content pages (didn-sell, expired-listing-help, etc.)

**Implementation:**
- Add "By Dr. Janet Duffy" byline at top of content
- Link byline to /about page
- Include date of last update

### 2. Create Author Schema Markup
**File:** `app/layout.tsx` or new `app/schema.ts`

**Add:**
- Person schema for Dr. Janet Duffy
- RealEstateAgent schema with credentials
- LocalBusiness schema with contact info

### 3. Enhance About Page with Credentials
**File:** `app/about/page.tsx`

**Add:**
- Nevada real estate license number
- Years of experience (specific number)
- Professional affiliations
- Education background
- Certifications/specializations

### 4. Add "How" Sections to Key Pages
**Focus areas:**
- Didn't Sell page: explain methodology
- Success Stories: show process steps
- Home Valuation: explain analysis method

### 5. Add Update Dates
**Implementation:**
- Show last updated date on educational pages
- Demonstrate fresh, maintained content

