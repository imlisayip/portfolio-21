module.exports = {
  future: {},
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    fontSize: {
      'sm': ['0.778rem', { // eyebrow
        lineHeight: '0.889rem',
        letterSpacing: '0.05rem'
      }],
      'base': ['1rem', { // paragraph
        lineHeight: '1.77rem'
      }],
      'md': '2.223rem', // nav
      'lg': ['2.333rem', { // titles
        lineHeight: '2rem'
      }],
      'xl': ['3.389rem', { // headings
        lineHeight: '4.0556rem'
      }],
    },
    screens: {
      'sm': '480px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1279px',
      '2xl': '1535px',
    },
    extend: {
      colors: {
        cream: '#EFE7E2',
        eyebrow: '#c6b9b1',
        heading: '#222222'
      },
      fontFamily: {
        sans: ['gt-america-light', 'sans-serif'],
        heading: ['canela-thin-web', 'serif'],
        eyebrow: ['gt-america-medium', 'sans-serif'],
      }
    }
  },
  variants: {},
  plugins: []
};
