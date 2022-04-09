module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
      'title': ['Ubuntu', 'sans-serif']
    },
    colors: {
      'beige': '#F6F5F0',
      'black': '#2D2D2B',
      'golden': '#FBD786',
      'cherry': '#9b2226'
    },
    extend: {
      padding: {
        'side': '25vw'
      },
      boxShadow: {
        'projectshadow': '4px 4px 0 4px #FBD786'
      }
    }
  },
  plugins: [],
}
