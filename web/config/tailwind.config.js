/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: [
        '0.78rem',
        {
          // eyebrow
          lineHeight: '0.89rem',
          letterSpacing: '2px',
        },
      ],
      base: [
        '0.9rem',
        {
          lineHeight: '1.33333rem',
        },
      ],

      nav: '28px', // nav
      lgm: [
        '2.11rem',
        {
          // titles mobile
          lineHeight: '1.96rem',
        },
      ],
      lgt: [
        '2.33rem',
        {
          // titles tablet
          lineHeight: '2.04rem',
        },
      ],
      lgd: [
        '2.33rem',
        {
          // titles desktop
          lineHeight: '2.23rem',
        },
      ],
      xlm: [
        '2.22rem',
        {
          // headings mobile
          lineHeight: '2.67rem',
        },
      ],
      xlt: [
        '3.55556rem',
        {
          // headings tablet
          lineHeight: '4.44rem',
        },
      ],
      xld: [
        '3.35rem',
        {
          // headings desktop
          lineHeight: '4.4rem',
        },
      ],
      name: [
        '3.38889rem',
        {
          lineHeight: '4.05556rem',
        },
      ],
    },
    maxWidth: {
      '4/5': '90%',
    },
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1023px',
      xl: '1279px',
      '2xl': '1535px',
    },
    extend: {
      colors: {
        cream: '#EFE6D7',
        highlight: '#564A3E',
        heading: '#222222',
        black: '#212121',
      },
    },
    fontFamily: {
      body: ['gt-america-light', 'sans-serif'],
      highlight: ['gt-america-medium', 'sans-serif'],
      heading: ['canela-thin-web', 'serif'],
    },
  },
  plugins: [],
}
