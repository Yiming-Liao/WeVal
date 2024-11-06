// [r: User]

import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "@/config/appConfig";
import AuthMiddleware from "@/utils/AuthMiddleware";

export default async function userMiddleware(req: NextRequest) {
  const cookies = req.cookies.getAll();

  const hasAccessToken = cookies.some(({ name }) => {
    return name === appConfig.USER_ACCESS_TOKEN_NAME;
  });

  // Got access token
  if (hasAccessToken) {
    return NextResponse.next();
  }

  // Got refresh token (and refresh for a new access token)
  const nextResponse = await AuthMiddleware.checkPermission(req, "user");

  if (nextResponse) {
    return nextResponse;
  }

  return NextResponse.redirect(new URL("/user/login", req.url));
}
