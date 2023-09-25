
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,ts,tsx,jsx}",
   "/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)' 
      }
    },
  },
  plugins: [],
}

