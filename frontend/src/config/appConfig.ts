export const appConfig = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "MyApp",

  USER_DATA_KEY: process.env.NEXT_PUBLIC_USER_DATA_KEY || "MyApp-user-data",

  REFRESH_TOKEN_NAME:
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME || "MyApp-refresh-token",

  ACCESS_TOKEN_NAME:
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME || "MyApp-access-token",
};
