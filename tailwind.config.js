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
      'coral': '#ecb099',
      'green': '#a3ceb6',
      'dark-gold': '#d4af47'
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      padding: {
        'side': '25vw'
      },
      boxShadow: {
        'projectshadow': '6px 4px 0 4px #FBD786',
        'projectshadowdark': '6px 4px 0 4px #d4af47'
      }
    }
  },
  plugins: [],
}
