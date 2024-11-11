// [r: Admin]

import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "@/config/envConfig";
import AuthMiddlewareService from "../services/admin/AuthMiddlewareService";

export default async function adminMiddleware(req: NextRequest) {
  //*---------------------------▼----- 🚦 Check UUID Path -----▼---------------------------
  // Get accessing uuid from current path
  const currentPathUuid = req.nextUrl.pathname.split("/")[2];

  // Get uuid from cookie
  const uuid = req.cookies.get(envConfig.ADMIN_UUID_NAME)?.value;

  // No uuid in cookie or current path not matched
  if (!uuid || JSON.parse(atob(uuid)).message !== currentPathUuid) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  //*---------------------------▲----- 🚦 Check UUID Path -----▲---------------------------

  // Has access token
  if (req.cookies.get(envConfig.ADMIN_ACCESS_TOKEN_NAME)) {
    return NextResponse.next();
  }

  // Has refresh token (then refresh a new access token)
  const nextResponse = await AuthMiddlewareService.checkPermission(req);

  if (nextResponse) {
    return nextResponse;
  }

  // No tokens | Refresh token invalid
  return NextResponse.redirect(new URL("/admin/login", req.url));
}
