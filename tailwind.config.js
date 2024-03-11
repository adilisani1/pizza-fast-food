module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['Protest Riot', 'sans- serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },

      transitionDuration: {
        '550': '0.55s',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.37,.88,.03,.92)',
      },
      transformOrigin: {
        'center': 'center',
      },

    },
  },

}