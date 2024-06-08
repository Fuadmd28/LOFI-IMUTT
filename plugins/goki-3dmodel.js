let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `â€¢ *Example :* ${usedPrefix + command} anime`, m)
conn.sendMessage(m.chat, { react: { text: 'ðŸ•’', key: m.key }})
let api = await Func.fetchJson(`https://itzpire.site/ai/3dmodel?prompt=${text}`)
if (api.status) {
conn.sendFile(m.chat, api.result, '', '', m)
} else {
m.reply(api.status)
}
};
handler.help = ["3dmodel *<text>*"]
handler.tags = ["ai"]
handler.command = ["3dmodel"]
handler.premium = true
handler.register = true

module.exports = handler