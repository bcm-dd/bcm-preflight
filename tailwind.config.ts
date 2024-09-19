import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/form/*.{js,ts,jsx,tsx,mdx}',
    './src/utilities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
	  current: 'currentColor',
	  white: '#ffffff',
	  black: '#000000',
	  light: '#e6e6e6',
	  dark: '#333333',
	  primary: '#0adb0a',
    },
    containers: {
      mobile: '25.875rem', // 414px
      tablet: '48rem', // 768px
      'tablet-landscape': '64rem', // 1024px
      laptop: '86.375rem', // 1366px
      desktop: '100rem', // 1600px
    },
    fontFamily: {
      body: ['var(--font-nunito-sans)', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: [
        'clamp(2.5rem, 8vw, 8rem)',
        {
          lineHeight: '1.2',
          fontWeight: 800
        },
      ],
      'h1-tablet': [
        'clamp(3.5rem, 8vw, 10rem)',
        {
          letterSpacing: '0.02em',
        },
      ],
      'h1-desktop': [
        'clamp(4rem, 8vw, 12rem)',
        {
          letterSpacing: '0.02em',
        },
      ],
      h2: [
        '2rem',
        {
          lineHeight: '1.1',
          letterSpacing: '0.02em',
          fontWeight: 800
        },
      ],
      'h2-tablet': [
        '2.375rem',
        {
          lineHeight: '1.1',
          letterSpacing: '0.02em',
        },
      ],
      'h2-desktop': [
        '2.75rem',
        {
          lineHeight: '1.1',
          letterSpacing: '0.02em',
        },
      ],
      h3: [
        '1.75rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
            fontWeight: 800
        },
      ],
      'h3-tablet': [
        '1.875rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        },
      ],
      'h3-desktop': [
        '2.125rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        },
      ],
      h4: [
        '1rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
            fontWeight: 800
        },
      ],
      'h4-tablet': [
        '1.25rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        },
      ],
      'h4-desktop': [
        '1.25rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        },
      ],
      h5: [
        '1.125rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.05em',
        },
      ],
      'h5-tablet': [
        '1.125rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.05em',
        },
      ],
      'h5-desktop': [
        '1.125rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.52em',
        },
      ],
      h6: [
        '1rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.05em',
        },
      ],
      'h6-tablet': [
        '1rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.05em',
        },
      ],
      'h6-desktop': [
        '1rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.05em',
        },
      ],
      'body-xl': [
        '2rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
      ],
      'body-lg': [
        '1.5rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
      ],
      'body-md': [
        '1.125rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
      ],
      body: [
        '1rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.05em',
        },
      ],
      'body-sm': [
        '0.875rem',
        {
          lineHeight: '1.6',
          letterSpacing: '0.05em',
        },
      ],
      'body-xs': [
        '0.75rem',
        {
          lineHeight: '1.6',
          letterSpacing: '0.05em',
        },
      ],
      'body-xxs': [
        '0.625rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.05em',
        },
      ],
    },
    screens: {
      'mobile-small': '0px',
      mobile: '25.875rem', // 414px
      tablet: '48rem', // 768px
      'tablet-landscape': '64rem', // 1024px
      laptop: '86.375rem', // 1366px
      desktop: '100rem', // 1600px
      'desktop-wide': '119.9375rem', // 1919px
    },
    extend: {
      aria: {
        current: 'current="page"'
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '2/3': '2 / 3',
        '3/1': '3 / 1',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
      },
      backgroundSize: {
        '1/2': '50% 50%',
        '0/1': '0% 100%',
        'full': '100% 100%',
      },
      transitionDuration: {
        250: '250ms'
      },
      height: {
        'screen-11/12': '91vh',
      },
      scale: {
        104: '1.04',
      },
      spacing: {
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        20: '5rem',
        25: '6.25rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        36: '8.75rem',
        38: '9.5rem',
        50: '12.5rem',
        53: '13.25rem',
        90: '22.5rem',
        100: '25rem',
        120: '30rem',
        160: '40rem',
      },
      width: {
          'screen-5/12': '41vw',
          'screen-6/12': '50vw',
          'screen-10/12': '83vw',
          'screen-11/12': '91vw'
      },
      zIndex: {
        0: '0',
        1 : '1',
        80: '80',
        90: '90',
        100: '100'
      }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries")
  ],
}
export default config
