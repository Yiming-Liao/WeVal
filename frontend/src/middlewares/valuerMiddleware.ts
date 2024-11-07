// [r: Valuer]

import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "@/config/envConfig";
import AuthMiddleware from "@/utils/AuthMiddleware";

export default async function valuerMiddleware(req: NextRequest) {
  const cookies = req.cookies.getAll();

  const hasAccessToken = cookies.some(({ name }) => {
    return name === envConfig.VALUER_ACCESS_TOKEN_NAME;
  });

  // Got access token
  if (hasAccessToken) {
    return NextResponse.next();
  }

  // Got refresh token (and refresh for a new access token)
  const nextResponse = await AuthMiddleware.checkPermission(req, "valuer");

  if (nextResponse) {
    return nextResponse;
  }

  return NextResponse.redirect(new URL("/valuer/login", req.url));
}
