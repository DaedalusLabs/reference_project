import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
      'resin-orange': '#f07e19'
    },
    fontFamily: {
      body: ['"Inter Variable", sans-serif'],
      sans: ['"Inter Variable", sans-serif'],
      inter: ['"Inter Variable", sans-serif'],
      dmsans: ['"DM Sans Variable", sans-serif'],
      heading: ['"DM Sans Variable", sans-serif']
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
} satisfies Config
