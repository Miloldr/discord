const webhook = 'https://discord.com/api/webhooks/1216841205883600928/kipzeUzJu0dF3FGPae2uzI7DDP6-uHJb3hkEy1kpf6MA80MqhJWIJCWZDTvvv3xRZdOK';
let dat = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
dat = await dat.text()
const source = ["Mozilla/5.0 (compatible; Discordbot/", "Twitterbot/"].find(u => ua?.startsWith(u))
const page = req.url.split("/").slice(-1)[0]
await fetch(webhook, {
            body: JSON.stringify({
                embeds: [{
                    title: "Triggered view-logger",
                    description: ("e " + dat),
                    footer: {
                        text: "Requested page: ",
                    },
                }],
            }), headers: { "content-type": "application/json" }, method: "POST"
})
