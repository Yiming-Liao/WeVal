export const appConfig = {
  APP_NAME: process.env.APP_NAME || "Weval",

  // 🌐 URL
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:3333",
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3333/api/v1",
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://127.0.0.1:3000",

  // 🎟️ Local storage key
  USER_DATA_KEY: process.env.NEXT_PUBLIC_USER_DATA_KEY || "Weval-user-data",
  USER_ROLE_KEY: process.env.NEXT_PUBLIC_USER_ROLE_KEY || "Weval-user-role",

  // 🎟️ Authentication tokens' cookie name [Only access in server side]
  USER_ACCESS_TOKEN_NAME:
    process.env.USER_ACCESS_TOKEN_NAME || "Weval-user-access-token",
  USER_REFRESH_TOKEN_NAME:
    process.env.USER_REFRESH_TOKEN_NAME || "Weval-user-refresh-token",
  VALUER_ACCESS_TOKEN_NAME:
    process.env.VALUER_ACCESS_TOKEN_NAME || "Weval-valuer-access-token",
  VALUER_REFRESH_TOKEN_NAME:
    process.env.VALUER_REFRESH_TOKEN_NAME || "Weval-valuer-refresh-token",
  ADMIN_ACCESS_TOKEN_NAME:
    process.env.ADMIN_ACCESS_TOKEN_NAME || "Weval-admin-access-token",
  ADMIN_REFRESH_TOKEN_NAME:
    process.env.ADMIN_REFRESH_TOKEN_NAME || "Weval-admin-refresh-token",
};
