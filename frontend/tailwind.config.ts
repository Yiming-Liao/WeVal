import type { PluginAPI, Config } from "tailwindcss/types/config";

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
        deep: "var(--deep, #09034B)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: AddComponents) {
      addComponents({
        // Title
        ".typography-title-md": {
          fontSize: "28px",
          // fontWeight: "300",
          lineHeight: "42px",
        },

        // Body
        ".typography-body-md": {
          fontSize: "16px",
          lineHeight: "24px",
        },

        // Label
        ".typography-label-md": {
          fontSize: "14px",
          // fontWeight: "300",
          lineHeight: "21px",
        },
        ".typography-label-sm": {
          fontSize: "12px",
          // fontWeight: "300",
          lineHeight: "18px",
        },
      });
    },
  ],
};
export default config;

interface AddComponents {
  addComponents: PluginAPI["addComponents"];
}
