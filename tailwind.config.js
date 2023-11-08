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
			red: "#cc0000",
			yellow: "#FFFF00",
			transparent: "#00000000",
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