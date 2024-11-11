// [r: Valuer]

import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "@/config/envConfig";
import AuthMiddlewareService from "../services/valuer/AuthMiddlewareService";

export default async function valuerMiddleware(req: NextRequest) {
  // Has access token
  if (req.cookies.get(envConfig.VALUER_ACCESS_TOKEN_NAME)) {
    return NextResponse.next();
  }

  // Has refresh token (then refresh a new access token)
  const nextResponse = await AuthMiddlewareService.checkPermission(req);

  if (nextResponse) {
    return nextResponse;
  }

  // No tokens | Refresh token invalid
  return NextResponse.redirect(new URL("/valuer/login", req.url));
}
