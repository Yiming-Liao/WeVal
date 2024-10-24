import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "./config/appConfig";

// 定義受保護的路徑
const PROTECTED_PATHS = [
  "/dashboard",
  "/email-not-verified",
  "/password-change",
  "/email-verify",
];

export function middleware(req: NextRequest) {
  // 獲取所有 cookies
  const cookies = req.cookies.getAll();

  // 判斷是否存在 refresh token
  const hasRefreshToken = cookies.some(({ name }) => {
    return name === appConfig.REFRESH_TOKEN_NAME;
  });

  // 如果用戶試圖訪問受保護的路由但沒有登入
  if (
    PROTECTED_PATHS.some((path) => req.nextUrl.pathname.startsWith(path)) &&
    !hasRefreshToken
  ) {
    console.warn("\x1b[35m試圖訪問沒有授權的網址\x1b[0m");

    // 重定向到登入頁面
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 如果已經登入或是非保護路由，則繼續
  return NextResponse.next();
}

// 定義 middleware 要套用的路徑
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/email-not-verified/:path*",
    "/password-change/:path*",
    "/email-verify:path*",
  ], // 保護 dashboard 路徑
};
