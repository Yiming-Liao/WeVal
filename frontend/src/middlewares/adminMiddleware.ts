// [r: Admin]

import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "@/config/envConfig";
import AuthMiddleware from "@/utils/AuthMiddleware";

export default async function adminMiddleware(req: NextRequest) {
  const cookies = req.cookies.getAll();

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

  const hasAccessToken = cookies.some(({ name }) => {
    return name === envConfig.ADMIN_ACCESS_TOKEN_NAME;
  });

  // Got access token
  if (hasAccessToken) {
    return NextResponse.next();
  }

  // Got refresh token (and refresh for a new access token)
  const nextResponse = await AuthMiddleware.checkPermission(req, "admin");

  if (nextResponse) {
    return nextResponse;
  }

  return NextResponse.redirect(new URL("/admin/login", req.url));
}
