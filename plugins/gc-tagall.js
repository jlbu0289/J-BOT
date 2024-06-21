let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*...𝑬𝒔 𝒉𝒐𝒓𝒂 𝒅𝒆 𝒂𝒏𝒐𝒕𝒂𝒓𝒔𝒆 ‼️* ${pesan}`
let teks = `*🐦‍🔥— 𝑻𝒆 𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒐́  —🐦‍🔥*\n\n ${oi}\n\
🏎️=͟͟͞͞ *𝙇𝙇𝙀𝙂𝘼𝙍𝙊𝙉 𝙇𝘼𝙎 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿𝙀𝙎:* \n`
for (let mem of participants) {
teks +=  `🏂 @${mem.id.split('@')[0]}\n`}
teks += `ㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤP͢h͢o͢e͢n͢i͢x͢B͢o͢t͢`

conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
