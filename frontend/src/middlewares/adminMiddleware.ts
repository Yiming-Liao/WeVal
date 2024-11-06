// [r: Admin]

import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "@/config/appConfig";
import AuthMiddleware from "@/utils/AuthMiddleware";

export default async function adminMiddleware(req: NextRequest) {
  const cookies = req.cookies.getAll();

  const hasAccessToken = cookies.some(({ name }) => {
    return name === appConfig.ADMIN_ACCESS_TOKEN_NAME;
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
