# BetterSwitch Codebase Optimization Plan

## Overview
React + Vite + TypeScript marketing website for BetterSwitch payment infrastructure services.

## Issues Identified

### 1. Performance & Bundle Size
- **Dead Code**: `ThreeBackground.tsx` component exists but is never used in `App.tsx`
- **Duplicate SVGs**: Logo SVG path data is duplicated across 3+ files (Header, Dashboard, Footer)
- **Large Inline SVGs**: Dashboard.tsx contains ~200 lines of inline SVG code
- **No Code Splitting**: All components loaded upfront, no lazy loading
- **CDN Tailwind**: Using Tailwind CDN instead of bundling for production

### 2. Code Quality
- **Inline <style> Tags**: Found in Dashboard, ShopShuffle, ConnectorScroller, Hero components
- **Magic Numbers**: Repeated color values (`#e27533`, `#111111`, etc.) throughout
- **Missing Constants**: No centralized configuration for repeated values
- **Inline Styles**: Many components use inline style objects instead of CSS classes

### 3. React Best Practices
- **Hook Dependencies**: `Testimonials.tsx` - `goToNext` in useEffect deps causes re-renders
- **Unnecessary Re-renders**: Components missing `React.memo` where appropriate
- **State Management**: Local state in scrollable components could be optimized

### 4. Missing Features
- **CTA Component**: Defined but not used in App.tsx
- **No Loading States**: No skeleton screens or loading indicators
- **No Error Boundaries**: No error handling for React component failures

## Optimization Plan

### Phase 1: Code Organization & Deduplication
1. Create shared constants file (colors, fonts, sizes)
2. Extract common Logo component
3. Move inline styles to global CSS
4. Remove unused components

### Phase 2: Performance Optimizations
1. Implement code splitting with React.lazy
2. Add React.memo where beneficial
3. Optimize image loading
4. Fix React hooks dependencies
5. Add proper cleanup to effects

### Phase 3: Build & Asset Optimization
1. Configure Tailwind for build (not CDN)
2. Set up bundle analysis
3. Optimize SVGs (consider sprite approach)
4. Add proper meta tags and SEO

## Expected Impact
- **Bundle Size**: ~20-30% reduction
- **Load Time**: Faster initial paint with code splitting
- **Maintainability**: Centralized constants and styles
- **Performance**: Fewer re-renders with memo and proper deps
