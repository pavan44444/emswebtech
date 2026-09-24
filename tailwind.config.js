/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Real EMS Webtech brand: olive green, near-black ink, warm cream,
        // and the orange used on the site's own "Call us" CTA.
        ink: '#242420',
        paper: '#FAF9F4',
        olive: {
          DEFAULT: '#8B9A3E',
          dark: '#6E7A2F',
          light: '#B9C56E',
        },
        orange: {
          DEFAULT: '#E2793A',
          dark: '#C7601F',
        },
        
        whatsapp: '#25D366',
      },
            fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],   // NEW — used for numerals/eyebrows
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139,154,62,0.5)',
        glowOrange: '0 0 40px -8px rgba(226,121,58,0.5)',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        blob: '40% 60% 60% 40% / 40% 40% 60% 60%',
      },
    },
  },
  plugins: [],
};
