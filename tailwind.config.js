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
      'coral': '#F7797D',
      'golden': '#FBD786',
      'teal': '#1fddff'
    },
    extend: {
      padding: {
        'side': '25vw'
      }
    }
  },
  plugins: [],
}
