/**
 * Shared constants for BetterSwitch application
 * Centralized configuration for colors, fonts, and common values
 */

// Colors
export const colors = {
  // Primary brand colors
  primary: '#e27533',
  primaryHover: '#F28C38',

  // Neutral colors
  obsidian: '#111111',
  obsidianLight: '#1A1A1A',
  canvas: '#FAFAFA',
  surface: '#FFFFFF',
  border: '#E5E5E5',

  // Semantic colors
  green: '#22c55e',
  greenLight: '#86efac',
  emerald: '#10B981',
  amber: '#f59e0b',
  teal: '#14B8A6',
  rose: '#EF4444',

  // Gray scale
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // Social/Brand colors
  stripe: '#635BFF',
  adyen: '#0ABF53',
  razorpay: '#072654',
} as const;

// Fonts
export const fonts = {
  sans: '"Figtree", Inter, sans-serif',
  display: '"Figtree", sans-serif',
  mono: '"JetBrains Mono", monospace',
  outfit: '"Outfit", sans-serif',
} as const;

// Spacing
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
} as const;

// Border radius
export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Animation durations
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
} as const;

// Timing functions
export const easings = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Breakpoints (for reference - Tailwind handles this)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index layers
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// Navigation links
export const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
] as const;
