# Performance Optimization Plan

## Issues Identified from Lighthouse Audit

### Critical Issues (Affecting LCP/FCP)
1. **Render Blocking CSS** - 150ms savings available
   - CSS file blocking initial render (14.6 KiB)
   - Element render delay: 600ms
   
2. **Google Analytics Script Impact**
   - 139 KiB transfer size
   - 120ms main thread time
   - Long tasks blocking render (684ms, 746ms)

3. **Legacy JavaScript Polyfills** - 14 KiB wasted
   - Array.prototype.at, flat, flatMap
   - Object.fromEntries, Object.hasOwn
   - String.prototype.trimEnd/trimStart

4. **Accessibility** - Missing main landmark
   - Document lacks `<main>` element
   - Affects screen reader navigation

## Solutions to Implement

### 1. Optimize Google Analytics Loading
**File:** `app/analytics.tsx`

**Changes:**
- Move analytics to load after page interactive
- Use Next.js Script component with strategy="afterInteractive"
- Defer loading until user interaction or timeout
- Reduce initial bundle impact

### 2. Fix Render Blocking CSS
**File:** `app/layout.tsx` and `next.config.ts`

**Changes:**
- Inline critical CSS for above-the-fold content
- Defer non-critical CSS loading
- Optimize font loading with display=swap
- Add preload hints for critical resources

### 3. Remove Legacy JavaScript Polyfills
**File:** `next.config.ts`

**Changes:**
- Configure Next.js to target modern browsers only
- Remove unnecessary polyfills
- Update browserlist configuration
- Saves ~14 KiB

### 4. Add Accessibility Landmark
**File:** `app/layout.tsx`

**Changes:**
- Wrap main content in `<main>` element
- Ensure proper semantic HTML structure
- Improve screen reader navigation

### 5. Optimize Font Loading
**File:** `app/layout.tsx`

**Changes:**
- Add font-display: swap to prevent FOIT
- Preload critical fonts
- Consider subsetting fonts

## Implementation Priority

**High Priority (Immediate Impact):**
1. Defer Google Analytics loading
2. Add main landmark for accessibility
3. Optimize font loading

**Medium Priority (Performance Gains):**
4. Remove legacy polyfills
5. Optimize CSS loading strategy

**Low Priority (Future Enhancement):**
6. Image optimization
7. Code splitting improvements

## Expected Results

After optimizations:
- LCP improvement: ~200-300ms faster
- FCP improvement: ~150ms faster
- Reduced main thread blocking: ~120ms less
- Better Core Web Vitals scores
- Improved accessibility score (100%)

