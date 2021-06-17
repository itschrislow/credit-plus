module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#eaf8fb',
          100: '#bfe9f2',
          200: '#94daea',
          300: '#6acbe2',
          400: '#3fbcd9',
          500: '#26a2c0',
          600: '#1d7e95',
          700: '#155a6b',
          800: '#0d3640',
          900: '#041215',
        },

        darkBlue: "#0464b4",
        lightBlue: "#70CDE3",
      },
      backgroundImage: theme => ({
        'mainBg': "url('/static/images/bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
