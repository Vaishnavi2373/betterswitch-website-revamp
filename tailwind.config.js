/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./blogs/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree"', 'Inter', 'sans-serif'],
        display: ['"Figtree"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        canvas: '#FAFAFA',
        surface: '#FFFFFF',
        obsidian: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
        },
        border: '#E5E5E5',
        accent: {
          DEFAULT: '#e27533',
          hover: '#F28C38',
        },
        primary: '#e27533',
      },
      boxShadow: {
        'surface': '0 1px 3px rgba(0,0,0,0.04)',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      padding: {
        'section-x': 'clamp(1rem, 4vw, 2.5rem)',
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.focus\\:not-sr-only:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        '.focus-ring': {
          '&:focus': { outline: 'none' },
          '&:focus-visible': {
            outline: '2px solid rgba(226, 117, 51, 0.4)',
            outlineOffset: '2px',
            borderRadius: '0.25rem',
          },
        },
      })
    }
  ],
}
