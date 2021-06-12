module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
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
  plugins: [],
}
