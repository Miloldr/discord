import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function middleware(req) {
    const ua = userAgent(req)?.ua;
    if(!ua || ua.startsWith("vercel-")){
      // Displaying another page for Vercel
      return NextResponse.rewrite(new URL("/vercel.html",req.url));
    }
  const source = ["Mozilla/5.0 (compatible; Discordbot/","Twitterbot/"].find(u=>ua?.startsWith(u))
if(source) {
        // Return the image.
        // return NextResponse.rewrite(new URL("/mini.png", req.url))
    }else{
        // Make a message for whoever takes the risk to directly click.
        return NextResponse.rewrite(new URL("/page.html", req.url));
    }
}
