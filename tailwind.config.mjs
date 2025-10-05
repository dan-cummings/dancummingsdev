/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'atkinson': ['Atkinson', 'sans-serif'],
      },
      colors: { 'aquamarine': { DEFAULT: '#50ffb1', 100: '#004325', 200: '#00874a', 300: '#00ca6f', 400: '#0eff93', 500: '#50ffb1', 600: '#74ffc1', 700: '#97ffd0', 800: '#baffe0', 900: '#dcffef' }, 'mint': { DEFAULT: '#4fb286', 100: '#10231a', 200: '#1f4735', 300: '#2f6a4f', 400: '#3e8e6a', 500: '#4fb286', 600: '#71c19d', 700: '#95d0b5', 800: '#b8e0ce', 900: '#dcefe6' }, 'viridian': { DEFAULT: '#3c896d', 100: '#0c1c16', 200: '#18372c', 300: '#245342', 400: '#316f58', 500: '#3c896d', 600: '#52b390', 700: '#7dc6ab', 800: '#a9d9c7', 900: '#d4ece3' }, 'feldgrau': { DEFAULT: '#546d64', 100: '#111614', 200: '#222c28', 300: '#33423c', 400: '#435850', 500: '#546d64', 600: '#709185', 700: '#94aca3', 800: '#b8c8c2', 900: '#dbe3e0' }, 'feldgrau': { DEFAULT: '#4d685a', 100: '#0f1512', 200: '#1e2924', 300: '#2e3e35', 400: '#3d5247', 500: '#4d685a', 600: '#688d7a', 700: '#8daa9b', 800: '#b3c7bc', 900: '#d9e3de' } },
    },
  },
  plugins: [],
}
