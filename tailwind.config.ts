import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#ffffff",
			black: "#000000",
			orange: {
				mute: "#FFA233",
				primary: "#F7931A",
				border: "#9E5D0F",
			},
			gray: {
				50: "#eeeeee",
				100: "#b3b3b3",
				200: "#7a7a7a",
				300: "#6d6d6d",
				400: "#606060",
				500: "#484848",
				600: "#3a3a3a",
				700: "#313131",
				800: "#292929",
				900: "#222222",
				950: "#181818",
				1000: "#0a0a0a",
			},
		},
		extend: {
			animation: {
				"spin-slow": "spin 2s linear infinite",
			},
		},
	},
	plugins: [],
} satisfies Config;
