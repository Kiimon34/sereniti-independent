/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sereniti: {
          navy: '#1E2B4D',
          'navy-dark': '#121A2F',
          sage: '#437854',
          'sage-dark': '#346142',
          peach: '#E8A26A',
          bg: '#FAFBFD',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
