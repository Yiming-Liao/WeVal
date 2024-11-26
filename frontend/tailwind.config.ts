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
        primary: "#213DEB",
        secondary: "#1A2596",
        deep: "#09034B",
        light: "#DAECFD",
        silver: "#73798D",
      },
      backgroundImage: {
        "hero-section": "url('/images/home-page/HeroSection/background.gif')",
      },
    },
  },
  plugins: [
    function ({ addComponents }: AddComponents) {
      addComponents({
        // Title

        ".typography-title-lg": {
          fontSize: "36px",
          // fontWeight: "300",
          lineHeight: "54px",
        },
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
        ".typography-body-sm": {
          fontSize: "14px",
          lineHeight: "21px",
        },

        // Label
        ".typography-label-xl": {
          fontSize: "20px",
          // fontWeight: "300",
          lineHeight: "30px",
        },
        ".typography-label-lg": {
          fontSize: "18px",
          // fontWeight: "300",
          lineHeight: "27px",
        },
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
