/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
			raleway: ["Raleway", "sans-serif"],
			poiret: ["Poiret One", "sans-serif"],
			lato: ["Lato", "sans-serif"],
		},
		extend: {
			colors: {
				grayBlue: "#7a80a3",
				grayBlueLight: "#9ba0bd",
				grayBlueDark: "#5c5f70",
				grayBlueDarker: "#474957",
			},
		},
	},
	plugins: [],
};
