/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'atkinson': ['Atkinson', 'sans-serif'],
      },
      colors: {
        'sage': 'hsla(60, 23%, 73%, 1)',
        'sunset': 'hsla(37, 76%, 73%, 1)',
        'tan': 'hsla(35, 39%, 65%, 1)',
        'dark-cyan': 'hsla(187, 24%, 44%, 1)',
        'rose-taupe': 'hsla(336, 12%, 44%, 1)',
        'accent': '#2337ff',
        'accent-dark': '#000d8a',
        'black': 'rgb(15 18 25)',
        'gray': 'rgb(96 115 159)',
        'gray-light': 'rgb(229 233 240)',
        'gray-dark': 'rgb(34 41 57)',
      },
    },
  },
  plugins: [],
}
