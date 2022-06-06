module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'abouth': '2800px', 
        'contacth': '1200px', 
        'texth': '43px',
        'imgh': '119px',
        'imgw': '500px',
        'herop': '645px',
        'ph': '276px',
        'ch': '980px',
        'boxh': '723px',
        'formh': '923px',
        'teamh': '799px',
      },
      colors: {
        'hero' : ' #3CAA35',
        'lhero' : ' #a7daa3cc',
        'brd' : ' #B4BEC8',
        'team' : ' #EBF7EB',
      },
      boxShadow: {
        'formshade' : '2px 10px 28px rgba(75, 0, 129, 0.12)',
      },
      fontFamily: {
        'lato': [' Lato, system-ui, sans-serif'],
        'poppins': [' Poppins, sans-serif']
      },
      width: {
        'aboutw': '1920px',
        'abouthw': '1098px',
        'textw': '523px',
        'pw': '708px',
        'formw': '432px',
      },
      margin: {
        'lg': '25rem',
        'ad': '21rem',
        'abt': '744px',
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
