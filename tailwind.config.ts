import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'buttonAttend': '#0072D2',
        'buttonTrailer': '#131318',
        'star': '#FFA800',
        'bgCel': '#19191F',
        'separator': '#c4c4c4'
      },
      fontFamily: {
        b612: [ 'B612' ],
      },
      screens: {
        cel: '360px',
      },
      borderRadius: {
        'borderCel': '20px'
      },
      padding: {
        'celSpacing': '550px'
      },
      backgroundPosition: {
        'testeee': 'top 20px right 140px;'
      }
    },
  },
  plugins: [],
}
export default config
