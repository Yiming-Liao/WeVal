import { envConfig } from "@/config/envConfig";
import { NextRequest, NextResponse } from "next/server";

export default class AuthMiddleware {
  /**
   * Checks if the user has the appropriate permission based on their role and cookies.
   *
   * This function checks if the client has a valid access token for the specified role
   * (either "user", "valuer", or "admin") by fetching the backend's permission check endpoint.
   * It then verifies the presence of the corresponding access token in the cookies and sets
   * the new access token (if available) into the response cookies.
   *
   * @param {NextRequest} req - The incoming Next.js request object, which contains the client's cookies.
   * @param {("user" | "valuer" | "admin")} role - The role of the user to check permission for. Can be one of:
   *    "user", "valuer", or "admin".
   *
   * @returns {Promise<NextResponse | boolean>} - Returns a `NextResponse` object with updated cookies if permission
   *    is granted, otherwise returns `false` if the permission check fails or an error occurs.
   *
   * @throws {Error} - If there's an error during the fetch or cookie processing, an error is thrown.
   */
  static async checkPermission(
    req: NextRequest,
    role: "user" | "valuer" | "admin"
  ): Promise<NextResponse | boolean> {
    const nextResponse = NextResponse.next();

    // 👤 Use different cookie name for different role
    const access_token_name =
      role === "user"
        ? "USER_ACCESS_TOKEN_NAME"
        : role === "valuer"
        ? "VALUER_ACCESS_TOKEN_NAME"
        : "ADMIN_ACCESS_TOKEN_NAME";

    try {
      // 🍪 All client cookies
      const clientCookies = req.cookies
        .getAll()
        .map(({ name, value }) => `${name}=${value}`)
        .join("; ");

      // Access backend with client cookies for permission checking
      const fetchResponse = await fetch(
        `${envConfig.API_URL}/${role}/auth/check-permission`,
        { method: "GET", headers: { Cookie: clientCookies } }
      );

      // 🍪 Received cookies from backend
      const receivedCookies = fetchResponse.headers.get("set-cookie");

      // No cookies, return false
      if (!receivedCookies) {
        return false;
      }

      // 🔑 Get new access token (parsed from cookie)
      const newAccessToken = receivedCookies?.split(",").find((cookie) => {
        if (
          cookie.split("; ")[0].split("=")[0].trim() ===
          envConfig[`${access_token_name}`]
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
