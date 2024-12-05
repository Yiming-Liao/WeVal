export const typography: TypographyTypes = {
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
};

type TypographyTypes = Record<string, { fontSize: string; lineHeight: string }>;
