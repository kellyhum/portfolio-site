module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'landing-title': '4rem',
      'section-title': '3.75rem',
      'text': '1.5rem',
      'nav': '1rem'
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'title': ['Domine', 'serif']
    },
    colors: {
      'brown': '#3C352B',
      'caramel': '#A47F48',
      'beige': '#EBE0DA'
    },
    extend: {
      padding: {
        'section-side': '22vw',
        'section-top': '10vh',
      }
    },
  },
  plugins: [],
}
