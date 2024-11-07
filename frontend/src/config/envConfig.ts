// 🪪 App name
export const APP_NAME = process.env.APP_NAME || "WeVal";

export const envConfig = {
  // 🪪 App name
  APP_NAME: process.env.APP_NAME || "WeVal",

  // 🌐 URL
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:3333",
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3333/api/v1",
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://127.0.0.1:3000",

  // 🎟️ [Local storage key] User data & User role
  USER_DATA_KEY:
    `${APP_NAME}${process.env.NEXT_PUBLIC_USER_DATA_KEY}` || "WeVal-user-data",
  USER_ROLE_KEY:
    `${APP_NAME}${process.env.NEXT_PUBLIC_USER_ROLE_KEY}` || "WeVal-user-role",

  // 🍪 [Cookie name] User role
  USER_ROLE_NAME:
    `${APP_NAME}${process.env.USER_ROLE_NAME}` || "WeVal-user-role",

  // 🍪 [Cookie name] Authentication tokens & uuid
  USER_ACCESS_TOKEN_NAME:
    `${APP_NAME}${process.env.USER_ACCESS_TOKEN_NAME}` ||
    "WeVal-user-access-token",
  USER_REFRESH_TOKEN_NAME:
    `${APP_NAME}${process.env.USER_REFRESH_TOKEN_NAME}` ||
    "WeVal-user-refresh-token",

  VALUER_ACCESS_TOKEN_NAME:
    `${APP_NAME}${process.env.VALUER_ACCESS_TOKEN_NAME}` ||
    "WeVal-valuer-access-token",
  VALUER_REFRESH_TOKEN_NAME:
    `${APP_NAME}${process.env.VALUER_REFRESH_TOKEN_NAME}` ||
    "WeVal-valuer-refresh-token",

  ADMIN_ACCESS_TOKEN_NAME:
    `${APP_NAME}${process.env.ADMIN_ACCESS_TOKEN_NAME}` ||
    "WeVal-admin-access-token",
  ADMIN_REFRESH_TOKEN_NAME:
    `${APP_NAME}${process.env.ADMIN_REFRESH_TOKEN_NAME}` ||
    "WeVal-admin-refresh-token",
  ADMIN_UUID_NAME:
    `${APP_NAME}${process.env.ADMIN_UUID_NAME}` || "WeVal-admin-uuid",
};
