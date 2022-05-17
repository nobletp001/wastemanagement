module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'hero' : ' #3CAA35'
    },
    fontFamily: {
      'lato': [' Lato, system-ui, sans-serif']
    },
    extend: {
      height: {
        'abouth': '2700px',
        'texth': '63px',
        'ph': '276px',
        'ch': '980px',
      },
      width: {
        'aboutw': '1920px',
        'textw': '323px',
        'pw': '708px',
      },
      left: {
        'textl': '945px',
      },
      top: {
        'textt': '308px',
      },
      lineHeight: {
        'lineh': '63px',
        'linehe': '30px',
      },
    },
  },
  plugins: [],
}
