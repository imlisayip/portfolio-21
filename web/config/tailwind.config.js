/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#EFE6D7',
        eyebrow: '#564A3E',
        heading: '#222222',
        black: '#212121',
      },
    },
    fontFamily: {
      body: ['gt-america-light', 'sans-serif'],
      eyebrow: ['gt-america-medium', 'sans-serif'],
      heading: ['canela-thin-web', 'serif'],
    },
  },
  plugins: [],
}
