module.exports = {
  future: {},
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '480px',
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
