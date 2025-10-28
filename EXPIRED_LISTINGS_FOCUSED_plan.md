# Las Vegas Home Selling Website for Dr. Janet Duffy
## Primary Focus: Helping Homes That Didn't Sell Get Sold

## Site Architecture (Expired Listings First)

### 1. Homepage → Helping Homes That Didn't Sell Entry Point
- **Hero**: "Didn't Sell? Let's Sell It in 30 Days"
- **Address Input Form**: Immediate lead capture for homes that didn't sell
- **Benefits Section**: Why working with a specialist after a failed attempt is better
- **Trust Indicators**: Success rate with relisting, average days to sale
- **Market Stats**: Las Vegas homes that didn't sell statistics (hyperlocal)

### 2. Didn't Sell Hub (Main Navigation Priority)
**ALL 21 Scripts Mapped to Specific Pages:**

#### Entry Flow Pages:
- **Script 1-4 (Initial Contact)**: `/expired-listings/contact/` - Multiple ways to reach out
- **Script 5-10 (Engagement)**: `/expired-listings/insights/` - Market analysis, success stories
- **Script 11-14 (Objection Handling)**: `/expired-listings/objections/` - FAQ addressing common concerns

#### Diagnostic Tool:
- **Script 15-18 (Consultation)**: `/expired-listings/why-didnt-it-sell/` - Interactive diagnostic tool
  - Price analysis
  - Presentation review
  - Marketing reach audit

#### Conversion Pages:
- **Script 19-21 (Listing)**: `/expired-listings/relist/` - Consultation booking & onboarding

#### Success Showcase:
- **Client Success Stories**: `/expired-listings/success-stories/`
- **Case Studies**: Before/after with actual numbers

### 3. Hyperlocal Expired Listings Strategy

**Neighborhood-Specific Expired Pages:**
For each major Las Vegas neighborhood:
- `/expired-listings/summerlin/` - Summerlin expired listings
- `/expired-listings/henderson/` - Henderson expired listings
- `/expired-listings/north-las-vegas/` - North Las Vegas expired listings
- etc.

Each page features:
- **Expired Listings Map**: Visual of actual expired properties
- **Neighborhood-Specific Data**: Why properties in this area expired
- **Local Market Trends**: What's selling vs what's expiring
- **Neighborhood-Specific Strategy**: Custom approach for this area
- **Recent Success**: Expired sold in this neighborhood

### 4. Supporting Tools (Not the Focus)

**Simple Property Search**: `/search/` - Basic MLS search for reference
**Neighborhoods Info**: `/neighborhoods/` - Context for expired listings
**About Dr. Jan**: `/about/` - Credibility builder
**Contact**: `/contact/` - Lead capture everywhere

---

## Implementation Using v0 API

### Phase 1: Core Expired Listings Pages (Generate with v0)

**1.1 Homepage - Expired Listing Focused**

v0 Prompt:
```
Create a Las Vegas real estate homepage PRIMARY FOCUS on expired listings:
- Hero: "Your Listing Didn't Sell? Let's Fix That in 30 Days" with property address input form (prominent)
- "Why Listings Expire" section: 3 cards - Wrong Price, Poor Marketing, Bad Timing - each with explanation
- Success proof: "45 Expired Listings Sold Last Year | Avg 32 Days to Sale"
- "Get Free Expired Analysis" CTA form (name, email, phone, property address)
- Expired listing map showing active expirations by neighborhood
- Testimonial: "My listing expired after 6 months. Dr. Jan sold it in 21 days for asking price." - Mary, Summerlin
- Trust badges: Years handling expireds, success rate, sold stats
- "How We Fix Expired Listings" 4-step process visual
- Hyperlocal stat: "47 properties expired in [neighborhood] this month - we helped 12 sell already"
- Lead magnet: "Download: 7 Reasons Your Home Didn't Sell" ebook offer
```

**1.2 Expired Listings Landing Page**

v0 Prompt:
```
Create comprehensive expired listings hub page:
- Breadcrumb navigation
- Hero: "Turn Your Expired Listing Into a Sold Property"
- Tab navigation: Overview, Why They Expire, Our Process, Success Stories, Get Started
- "Expired Listing Stats" dashboard: Las Vegas market data
- "Find Your Expired Property" search bar
- 3-column layout: Price Issues, Marketing Gaps, Market Timing
- Interactive calculator: "See what your expired listing could sell for"
- Video testimonial section
- Free consultation booking calendar
- Agent photo and bio sidebar
```

**1.3 Interactive Diagnostic Tool (Script 15-18)**

v0 Prompt:
```
Create interactive "Why Didn't My Home Sell?" diagnostic tool:
- Multi-step form with progress bar
- Step 1: Price Analysis (slider for original list price vs market value, comparable sales)
- Step 2: Presentation Audit (photo quality rating, staging checklist, condition rating)
- Step 3: Marketing Review (MLS exposure, open houses held, agent network size)
- Results page: Score (0-100), specific recommendations, "Get Your Full Report" CTA
- Lead capture after results: email for detailed action plan
- Responsive with smooth transitions between steps
- Use color coding: red (critical), yellow (needs improvement), green (good)
```

**1.4 Objection Handling FAQ Page (Scripts 11-14)**

v0 Prompt:
```
Create FAQ page addressing expired listing objections:
- Accordion-style FAQ section
- "I'm going to sell FSBO instead" - response with value prop, no-pressure approach
- "I think I'll just rent it out" - rent vs sell calculator embedded
- "I'm staying with my original agent" - why that might not work (gentle)
- "It's just not the right time" - market timing analysis widget
- Each answer includes CTA: "Let's discuss your situation" button
- Video responses to top 3 objections
- Social proof: "Others had same concern, here's what happened"
```

**1.5 Success Stories Hub (Inspired by Script 8, 19-21)**

v0 Prompt:
```
Create success stories showcase for expired listings:
- Grid layout with filter tabs: All, Under 30 Days, Over Asking, Cash Offers
- Case study cards: Before (original agent, DOM, issues), After (sold price, days, solutions)
- Featured story carousel with full narrative
- Video testimonials section
- By neighborhood: "See expired wins in YOUR area"
- "Can I Get Results Like This?" CTA on each story
- Sortable by neighborhood, property type, price range
- Downloadable PDF case study library
```

### Phase 2: Hyperlocal Expired Strategy (Neighborhood Deep Dives)

**2.1 Neighborhood Expired Landing Template**

v0 Prompt:
```
Create [NEIGHBORHOOD NAME] expired listings page:
- Hero with neighborhood photo and headline "Active Expired Listings in [Neighborhood]"
- Map showing expired properties with custom markers
- Market snapshot: Expired count, average days before expiration, relist success rate
- "Why [Neighborhood] Listings Expire" analysis (schools, commute, price trends)
- "Success Story: [Recent sold expired in this neighborhood]" with before/after
- Active expired listings grid with address, expiration date, estimated value
- "Get Neighborhood-Specific Strategy" CTA
- Agent's hyperlocal expertise: "I've sold 23 expired homes in [Neighborhood]"
- Community insights: schools, new developments, market trends
- Lead form: "Get notified of new expired listings in [Neighborhood]"
```

Generate for: Summerlin, Henderson, North Las Vegas, Paradise, Enterprise, Spring Valley, Green Valley, Downtown

### Phase 3: Lead Conversion Tools

**3.1 Free Analysis Request Form**

v0 Prompt:
```
Create expired listing analysis request form:
- Step 1: Property address with autocomplete
- Step 2: Property details (beds, baths, sq ft, year built, condition)
- Step 3: Previous listing info (list price, days on market, expiration date, previous agent)
- Step 4: Current situation (price concerns, timing, marketing concerns, other)
- Step 5: Contact details (name, email, phone, best contact method, preferred time)
- Progress indicator
- "What happens next" timeline on right
- "Get Your Free 30-Minute Consultation" CTA
- Success animation after submit
- Thank you page with next steps
```

**3.2 Consultation Booking System**

v0 Prompt:
```
Create appointment booking calendar component:
- Calendar view with available dates highlighted
- Time slot selection (9am-7pm, 30-min slots)
- Form: name, email, phone, property address, consultation type (in-person, virtual, phone)
- Confirmation page with calendar invite download
- Reminder email automation (24hr, 1hr before)
- "Prepare for Your Consultation" checklist
- Agent's calendar filled in
```

### Phase 4: Supporting but Not Primary Features

**4.1 Basic Property Search**
Generate simple search: `/search/` - Just enough to show inventory, drive interest

**4.2 About Page**
Generate with focus on expired listing expertise

**4.3 Contact**
Every form funnel to CRM

---

## Navigation Priority (Expired Listings First)

Desktop:
- Logo
- **Expired Listings** (highlighted)
- About
- Neighborhoods (Hyperlocal)
- Success Stories
- Contact
- (702) 566-7890 (prominent)

Mobile:
- Hamburger menu with Expired Listings at top
- Quick access: "Get Free Analysis" button fixed bottom

---

## Content Strategy Based on 21 Scripts

Each script maps to a specific page element:

**Scripts 1-4 (Initial Contact)**:
- Homepage hero form
- Contact page multiple channels
- SMS/text option
- Door-to-door prep material

**Scripts 5-10 (Engagement)**:
- Success stories section
- Market analysis offers
- Price adjustment education
- Client success examples

**Scripts 11-14 (Objections)**:
- Dedicated FAQ page
- Each objection = expandable answer
- Video responses
- Calculator widgets

**Scripts 15-18 (Diagnostic)**:
- Interactive diagnostic tool
- Free consultation offer
- Action plan download

**Scripts 19-21 (Conversion)**:
- Consultation booking
- Onboarding timeline
- Pre-listing checklist

---

## Key Metrics to Track

- Expired listing form submissions
- Diagnostic tool completions
- Consultation bookings
- Neighborhood-specific engagement
- Time on expired listing pages
- Conversion rate: visitor → consultation

---

## Files to Create (Priority Order)

1. `/app/page.tsx` - Expired listing focused homepage
2. `/app/expired-listings/page.tsx` - Hub
3. `/app/expired-listings/why-didnt-it-sell/page.tsx` - Interactive diagnostic
4. `/app/expired-listings/objections/page.tsx` - FAQ
5. `/app/expired-listings/success-stories/page.tsx` - Proof
6. `/app/expired-listings/[neighborhood]/page.tsx` - Hyperlocal pages (8 versions)
7. `/app/expired-listings/book-consultation/page.tsx` - Booking
8. `/components/site-nav.tsx` - Navigation (expired first)
9. `/app/api/expired-leads/route.ts` - CRM integration
10. `/app/search/page.tsx` - Basic search (not primary focus)

---

## v0 Generation Workflow

1. Open `/admin` (preserved v0 tool)
2. Generate each page with detailed prompts
3. Move generated code to appropriate file location
4. Customize with real data
5. Integrate CRM for lead capture
6. Add real Las Vegas neighborhood data
7. Implement interactive tools (diagnostic, calculators)

---

## Success Definition

**Primary Goal**: Convert expired listing homeowners into consultations

**Secondary Goal**: Establish Dr. Janet Duffy as THE expired listing specialist in Las Vegas

**Measured By**:
- Expired listing analysis requests
- Consultation bookings
- Expired-to-listing conversions
- Hyperlocal engagement rates

