import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "./config/appConfig";
import userMiddleware from "./middlewares/userMiddleware";
import valuerMiddleware from "./middlewares/valuerMiddleware";
import adminMiddleware from "./middlewares/adminMiddleware";

// Protected paths
const PROTECTED_PATHS = [
  "/user/dashboard",
  "/password-change",
  "/valuer/dashboard",
];

const ROLE_MIDDLEWARES: Record<
  string,
  (req: NextRequest) => Promise<NextResponse>
> = {
  user: userMiddleware,
  valuer: valuerMiddleware,
  admin: adminMiddleware,
};

export async function middleware(req: NextRequest) {
  const role = req.cookies.get(appConfig.USER_ROLE_KEY)?.value;

  // Accessing proteced paths
  if (PROTECTED_PATHS.some((path) => req.nextUrl.pathname.startsWith(path))) {
    // Check if role is valid
    if (!role || (role !== "user" && role !== "valuer" && role !== "admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Use role middleware
    return await ROLE_MIDDLEWARES[role](req);
  }

  // Accessing none protected paths
  return NextResponse.next();
}

// Matching Paths
export const config = {
  matcher: [
    "/user/dashboard/:path*",
    "/password-change/:path*",
    "/valuer/dashboard/:path*",
  ],
};
