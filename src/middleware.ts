import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const access = req.cookies.get("birthday_access")?.value === "true"

  const { pathname } = req.nextUrl

  const protectedRoutes = ["/welcome", "/surprise", "/gallery", "/letter"]

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  // Already authenticated
  if (access && pathname === "/") {
    return NextResponse.redirect(new URL("/surprise", req.url))
  }

  // Not authenticated
  if (isProtected && !access) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/welcome/:path*",
    "/surprise/:path*",
    "/gallery/:path*",
    "/letter/:path*",
  ],
}
