import { NextResponse } from 'next/server';
import {NextRequest} from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
   

   const authToken = request.cookies.get("authToken")?.value;

   const loggedInUserNotAccessPaths = request.nextUrl.pathname ==="/login" || request.nextUrl.pathname ==="/login"

  console.log(authToken,"->middle ware executed")
  //return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:[ 
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*"
]
}