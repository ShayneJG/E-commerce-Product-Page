
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,ts,tsx,jsx}",
   "/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 3px 2px rgba(0, 0, 0, 0.50)' 
      }
    },
  },
  plugins: [],
}

