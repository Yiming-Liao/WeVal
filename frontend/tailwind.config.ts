import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary, #213DEB)",
        secondary: "var(--secondary, #1A2596)",
        base: "var(--base, #09034B)",
      },
    },
  },
  plugins: [],
};
export default config;
