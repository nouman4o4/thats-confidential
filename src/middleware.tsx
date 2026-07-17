import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const access = req.cookies.get("birthday_access")

  const protectedRoutes = ["/welcome", "/surprise", "/gallery", "/letter"]

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  )

  if (isProtected && !access) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/welcome/:path*",
    "/surprise/:path*",
    "/gallery/:path*",
    "/letter/:path*",
  ],
}
