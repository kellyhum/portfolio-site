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
    fontSize: {
      'footer': '0.875rem',
      'default': '1rem',
      'project': '1.875rem',
      'heading': '3rem',
      'title': '3.5rem'
    },
    colors: {
      'beige': '#F6F5F0',
      'black': '#2D2D2B',
      'golden': '#FBD786',
      'cherry': '#9b2226',
      'coral': '#f28482',
      'teal': '#83c5be',
      'dark-gold': '#d4af47'
    },
    extend: {
      padding: {
        'side': '25vw'
      },
      boxShadow: {
        'projectshadow': '6px 4px 0 4px #FBD786',
        'projectshadowdark': '6px 4px 0 4px rgba(242, 132, 130, 0.9)'
      }
    }
  },
  plugins: [],
}
