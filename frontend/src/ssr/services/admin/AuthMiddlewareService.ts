// [r: Admin]

import { envConfig } from "@/config/envConfig";
import { NextRequest, NextResponse } from "next/server";

export default class AuthMiddlewareService {
  static async checkPermission(
    req: NextRequest
  ): Promise<NextResponse | boolean> {
    const nextResponse = NextResponse.next();

    try {
      // 🍪 All client cookies
      const clientCookies = req.cookies
        .getAll()
        .map(({ name, value }) => `${name}=${value}`)
        .join("; ");

      // Access backend with client cookies for permission checking
      const fetchResponse = await fetch(
        `${envConfig.API_URL}/admin/auth/check-permission`,
        { method: "GET", headers: { Cookie: clientCookies } }
      );

      // 🍪 Received cookies from backend
      const receivedCookies = fetchResponse.headers.get("set-cookie");

      // No cookies, return false
      if (!receivedCookies) {
        return false;
      }

      // Set access token
      this.setAccessToken(receivedCookies, nextResponse);

      return nextResponse;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static setAccessToken(receivedCookies: string, nextResponse: NextResponse) {
    // 🔑 Get new access token (parsed from cookie)
    const newAccessToken = receivedCookies?.split(",").find((cookie) => {
      if (
        cookie.split("; ")[0].split("=")[0].trim() ===
        envConfig.ADMIN_ACCESS_TOKEN_NAME
      ) {
        return cookie;
      }
    });

    // No access token, return false
    if (!newAccessToken) {
      return false;
    }

    const name = newAccessToken.split("; ")[0].split("=")[0].trim();
    const value = newAccessToken.split("; ")[0].split("=")[1].trim();

    // 🍪 Set cookie
    nextResponse.cookies.set(name, value, {
      maxAge: 1 * 60 * 60, // 1 hour
      httpOnly: true,
      secure: envConfig.NODE_ENV === "production",
      sameSite: "strict",
    });
  }
}
