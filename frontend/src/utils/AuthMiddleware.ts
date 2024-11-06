import { appConfig } from "@/config/appConfig";
import { NextRequest, NextResponse } from "next/server";

export default class AuthMiddleware {
  static async checkPermission(
    req: NextRequest,
    role: "user" | "valuer" | "admin"
  ) {
    const nextResponse = NextResponse.next();

    // Use different cookie name for different role
    const access_token_name =
      role === "user"
        ? "USER_ACCESS_TOKEN_NAME"
        : role === "valuer"
        ? "VALUER_ACCESS_TOKEN_NAME"
        : "ADMIN_ACCESS_TOKEN_NAME";

    try {
      // All client cookies
      const clientCookies = req.cookies
        .getAll()
        .map(({ name, value }) => `${name}=${value}`)
        .join("; ");

      // Access backend for permission checking
      const fetchResponse = await fetch(
        `${appConfig.API_URL}/${role}/auth/check-permission`,
        { method: "GET", headers: { Cookie: clientCookies } }
      );

      // Received cookies
      const receivedCookies = fetchResponse.headers.get("set-cookie");

      // No cookies, return false
      if (!receivedCookies) {
        return false;
      }

      // Get new access token
      const newAccessToken = receivedCookies?.split(",").find((cookie) => {
        console.log(cookie.split("; ")[0].split("=")[0].trim());
        console.log(appConfig[`${access_token_name}`]);
        if (
          cookie.split("; ")[0].split("=")[0].trim() ===
          appConfig[`${access_token_name}`]
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

      // Set cookie
      nextResponse.cookies.set(name, value, {
        maxAge: 3600 * 1000, // 1 hour
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return nextResponse;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
