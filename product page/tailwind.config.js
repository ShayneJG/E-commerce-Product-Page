
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
        'customOrange': '#FF7e1b'
      },
      fontFamily: {
        'Kumbh-Sans': ["Kumbh Sans", "Sans"]
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)' 
      }
    },
  },
  plugins: [],
}

