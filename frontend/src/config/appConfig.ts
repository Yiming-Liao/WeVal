export const appConfig = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "MyNextApp",
  REFRESH_TOKEN_NAME:
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME || "MyNextApp-refresh-token", //  local storage 儲存用戶資料的 名稱  key
};
