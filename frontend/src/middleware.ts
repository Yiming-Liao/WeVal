import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "./config/appConfig";

// 定義受保護的路徑
const PROTECTED_PATHS = ["/user/dashboard", "/password-change"];

export function middleware(req: NextRequest) {
  // 獲取所有 cookies
  const cookies = req.cookies.getAll();

  // 判斷是否存在 refresh token
  const hasRefreshToken = cookies.some(({ name }) => {
    return name === appConfig.REFRESH_TOKEN_NAME;
  });

  if (PROTECTED_PATHS.some((path) => req.nextUrl.pathname.startsWith(path))) {
    /**
     * 此為受保護路由
     */
    // 沒有 Refresh Token
    if (!hasRefreshToken) {
      console.warn("\x1b[35m試圖訪問沒有授權的網址\x1b[0m");

      // 重定向到登入頁面
      return NextResponse.redirect(new URL("/user/login", req.url));
    }
  }

  // 如果已經登入或是非保護路由，則繼續
  return NextResponse.next();
}

// 定義 middleware 要套用的路徑
export const config = {
  matcher: ["/user/dashboard/:path*", "/password-change/:path*"], // 保護 dashboard 路徑
};
