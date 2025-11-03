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
      maxWidth: {
        'prose': '720px',
        'blog-grid': '960px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(15, 18, 25, 0.05)',
        'hover-sm': '0 2px 6px rgba(96, 115, 159, 0.25)',
        'hover-md': '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33)',
        'hover-lg': '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(35, 55, 255, 0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      fontSize: {
        'display-lg': '3.052rem',
        'display-md': '2.441rem',
        'display-sm': '1.953rem',
        'heading-lg': '1.563rem',
        'heading-md': '1.25rem',
      },
    },
  },
  plugins: [],
}
