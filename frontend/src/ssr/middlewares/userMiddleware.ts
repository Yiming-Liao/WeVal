// [r: User]

import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "@/config/envConfig";
import AuthMiddlewareService from "../services/user/AuthMiddlewareService";

export default async function userMiddleware(req: NextRequest) {
  // Has access token
  if (req.cookies.get(envConfig.USER_ACCESS_TOKEN_NAME)) {
    return NextResponse.next();
  }

  // Has refresh token (then refresh a new access token)
  const nextResponse = await AuthMiddlewareService.checkPermission(req);

  if (nextResponse) {
    return nextResponse;
  }

  // No tokens | Refresh token invalid
  return NextResponse.redirect(new URL("/user/login", req.url));
}
