import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "./config/envConfig";
import userMiddleware from "./middlewares/userMiddleware";
import valuerMiddleware from "./middlewares/valuerMiddleware";
import adminMiddleware from "./middlewares/adminMiddleware";

// 🚨 Protected paths
const PROTECTED_PATHS: Record<string, string> = {
  "/user/dashboard": "user",
  "/valuer/dashboard": "valuer",
  "/admin": "admin",
};

/**
 * 🚩 Middleware entry point
 */
export async function middleware(req: NextRequest) {
  console.log("🚨 Entered middleware 🚨");

  // Current role
  const role = req.cookies.get(envConfig.USER_ROLE_NAME)?.value;
  // Current path
  const pathname = req.nextUrl.pathname;

  // Check path & role
  if (!isProtectedPath(pathname, role)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //*----------▼-----🔑 Enter protected path & valid role detected-----▼----------

  // Use corresponding middleware for the role

  if (role && ROLE_MIDDLEWARES[role]) {
    return await ROLE_MIDDLEWARES[role](req);
  }
  //*----------▲-----🔑 Enter protected path & valid role detected-----▲----------
}

// 🚨 Matching Paths
export const config = {
  matcher: [
    "/user/dashboard/:path*",
    "/valuer/dashboard/:path*",
    "/admin/:path/dashboard/:path*", // Matching: /admin/uuid.../dashboard/*
  ],
};

// ⚡ Middleware: Custom middlewares for different roles
const ROLE_MIDDLEWARES: Record<
  string,
  (req: NextRequest) => Promise<NextResponse | boolean>
> = {
  user: userMiddleware,
  valuer: valuerMiddleware,
  admin: adminMiddleware,
};

// ⚡ Function: Check if the path is protected and if the role is valid for that path
function isProtectedPath(pathname: string, role: string | undefined) {
  const matchedPath = Object.entries(PROTECTED_PATHS).find(
    ([protectedPath, requiredRole]) =>
      pathname.startsWith(protectedPath) && role === requiredRole
  );
  return Boolean(matchedPath);
}
