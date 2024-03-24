let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `🔊 BIENVENIDOS A TODOS ➡️ Wa.me/+393476707620
*⺀🥵Buen@s días espero que hayan amanecido bien⺀*\n\n❄️ ${oi}\n\n❄️ *@osito_123:*\n`
for (let mem of participants) {
teks += `🇨🇳👁️ @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐁𝐨𝐭 𝐏𝐡𝐨𝐞𝐧𝐢𝐱`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler