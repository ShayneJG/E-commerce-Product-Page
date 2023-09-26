
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,ts,tsx,jsx}",
   "/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'customBlack': '#1d2026',
        'customOrange': '#FF7e1b',
        'customGrey': '#69707d' 

      },
      fontFamily: {
        'Kumbh-Sans': ["Kumbh Sans", "Sans"]
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)' 
      },
      boxShadow: {
        'orange': '0 20px 40px -10px rgba(255, 126, 27, 0.40)'
      }
    },
  },
  plugins: [],
}

