import { NextResponse } from "next/server";

export function middleware(request){
  let  path = request.nextUrl.pathname

    const isPublicPath = path === "/login"|| path =="/signup";
    const token = request.cookies.get("token")?.value ||""

    if(isPublicPath && token){
        return NextResponse.redirect(new URL(`${path}`,request.nextUrl))
    }
    if(!isPublicPath  && !token){
        return NextResponse.redirect(new URL ("/login",request.nextUrl));
    }

}
export const config = {
    matcher :["/","/signup" ,"/admin","/api/cart/add/:path","/myorder" ,"/cart"]
}