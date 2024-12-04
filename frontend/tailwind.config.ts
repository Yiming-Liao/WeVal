import type { PluginAPI, Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
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
        // Background color
        snow: "#FAFAFA",
      },
      backgroundImage: {
        // home-page HeroSection
        "hero-section-gif":
          "url('/images/home-page/HeroSection/background.gif')",

        // Common auth bg image
        "auth-background-image": "url('/images/common/auth-background.png')",

        // Gradients //
        "primary-gradient":
          "linear-gradient(315deg, #181F44 0%, #324EDA 60%, #5A8AFA 100%)",
        "secondary-gradient":
          "linear-gradient(315deg, #26427F 0%, #0083D4 50%, #66D9FC 100%)",

        // User
        "user-gradient":
          "linear-gradient(315deg, #26427F 0%, #0083D4 50%, #66D9FC 100%)",
        // Valuer
        "valuer-gradient":
          "linear-gradient(315deg, rgba(51, 60, 86, 0.95) 0%, rgba(78, 93, 132, 0.95) 50%, rgba(116, 133, 179, 0.95) 100%)",
        // Admin
        "admin-gradient": "linear-gradient(315deg, #8e6865 0%, #b89c93 100%)",
        // Light (neutral)
        "light-gradient":
          "linear-gradient(315deg, #B8C3D7 0%, #879DC6 50%, #7E92B8 100%)",
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

        // BG Glassmorphism
        ".bg-glassmorphism": {
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)",
          backdropFilter: "blur(8px)",
        },

        // Button interaction animations
        ".button-interaction": {
          "@screen sm": {
            display: "block",
            "&:active": {
              transform: "scale(0.95)",
            },
            "transition-property": "all",
            "transition-duration": "200ms",
            "transition-timing-function": "ease-in-out",
          },
        },
      });
    },
  ],
};
export default config;

interface AddComponents {
  addComponents: PluginAPI["addComponents"];
}
