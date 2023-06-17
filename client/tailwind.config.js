/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
			raleway: ["Raleway", "sans-serif"],
			poiret: ["Poiret One", "sans-serif"],
			lato: ["Lato", "sans-serif"],
			bodo: ["Bodoni Moda", "serif"],
			josefin: ["Josefin Sans", "sans-serif"],
			serif: ["DM Serif Display", "serif"],
		},
		extend: {
			// COLOR PALLETE https://coolors.co/94bbcc-467187-ffffff-e1cec6-483e40
			colors: {
				grayBlue: "#7a80a3",
				grayBlueLight: "#9ba0bd",
				grayBlueDark: "#5c5f70",
				grayBlueDarker: "#474957",
				primary5: "#6F5A5F",
				primary4: "#467187",
				primary3: "#94BBCC",
				primary2: "#E1CEC6",
				primary05: "#ECD7D0",
				primary1: "#F8F8F8",
				darkBrownPurple: "#4A373F",
			},
		},
	},
	plugins: [],
};
