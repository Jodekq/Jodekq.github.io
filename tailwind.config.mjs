/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'title': ['Josefin Sans', 'sans-serif'],
      'mono': ['VT323', 'monospace'],
    },
    extend: {
      colors: {
        'dark': '#04100c',
      },
    },
  },
  plugins: [
  ],
}
