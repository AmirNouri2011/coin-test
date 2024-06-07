import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: { lexend: "var(--font-lexend)" },
			boxShadow: {
				currency: "0 4px 16px 0px #2121210A",
			},
		},
	},
	plugins: [],
};
export default config;
