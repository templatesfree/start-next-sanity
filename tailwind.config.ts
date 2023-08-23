import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Inter"'],
      sans: ["Inter"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
