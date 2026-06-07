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
      }
    },
  },
  plugins: [],
}
