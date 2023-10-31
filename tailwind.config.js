/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        gothic: ['Dela Gothic One', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      }, 
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#cc0000",
      green: "#25da72",
    },
    fontSize: {
      sm: "14px", 
      md: "18px", 
      lg: "24px", 
      xl: "32px", 
      base: "16px",
      xxl: "64px",
    }
  },
  plugins: [],
}