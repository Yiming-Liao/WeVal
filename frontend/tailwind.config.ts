import type { PluginAPI, Config } from "tailwindcss/types/config";
import { colors } from "./tailwind/colors.config";
import { typography } from "./tailwind/typography.config";
import { backgroundImage } from "./tailwind/backgroundImage.config";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage,
    },
  },
  plugins: [
    function ({ addComponents }: AddComponents) {
      addComponents({
        ...typography,

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
            "&:hover": {
              transform: "scale(1.02)",
            },
            "&:active": {
              transform: "scale(0.98)",
            },
            "transition-property": "all",
            "transition-duration": "150ms",
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
