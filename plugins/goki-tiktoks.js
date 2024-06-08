let { tiktoks } = require('../lib/scrape.js')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} jedag jedug`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  conn.sendMessage(m.chat, {
  video: {url: kemii.no_watermark},
  gifPlayback: true, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted: m})
}
handler.help = ['tiktoksearch'].map(v => v + ' *<text>*')
handler.tags = ['downloader']

handler.command = /^tiktoksearch|ttsearch$/i
handler.premium = false

module.exports = handler