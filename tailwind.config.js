/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      third: '#F5DB13',
      primary: '#F2B807',
      second: '#F28F16',
      danger: '#D93E30',
      white: '#F2F2F2',
      grass: '#73D677',
      dark: '#212121'

    },
    borderRadius: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      full: '9999px'
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700
    },
    fontSize: {
      12: ['12px', { lineHeight: '130%' }],
      16: ['16px', { lineHeight: '150%' }],
      18: ['18px', { lineHeight: '140%' }],
      24: ['24px', { lineHeight: '140%' }],
      36: ['36px', { lineHeight: '130%' }],
      40: ['40px', { lineHeight: '130%' }],
      64: ['64px', { lineHeight: '120%' }],
      72: ['72px', { lineHeight: '110%' }]
    },
  },
  plugins: [],
}

