export const backgroundImage: backgroundImageTypes = {
  // home-page HeroSection
  "hero-section-gif": "url('/images/home-page/HeroSection/background.gif')",

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
};

type backgroundImageTypes = Record<string, string>;
