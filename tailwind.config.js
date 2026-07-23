/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        // Aspire brand colors
        'aspire-navy': '#23323B', // primary navy - headings, icons, primary elements
        'aspire-navy-secondary': '#1E2B33', // secondary navy - sidebar hover / dark areas
        'aspire-navy-deep': '#0F1A20', // deep navy - main sidebar
        'aspire-orange': '#CD8338', // accent - selected states, active borders, primary CTAs

        // Supporting neutrals derived from the palette
        'aspire-bg': '#FAF6F1', // warm off-white page background
        'aspire-border': '#E6DFD4', // light warm border
        'aspire-muted': '#767E85', // muted/secondary text
        'aspire-hover': '#F3ECE2', // warm hover tint (non-sidebar)
        'aspire-disabled-bg': '#F1ECE4', // disabled background
        'aspire-disabled-text': '#B9B2A8', // disabled text

        // Status colors, kept muted/calm
        'aspire-success': '#4F7A5B',
        'aspire-success-bg': '#EAF1EA',
        'aspire-warning': '#A97A2E',
        'aspire-warning-bg': '#F6EEE1',
        'aspire-error': '#A24E42',
        'aspire-error-bg': '#F5E9E7',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
    },
  },
  plugins: [],
}
