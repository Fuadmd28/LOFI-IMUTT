/** !! THIS CODE GENERATE BY RODOTZBOT !! **/

const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return !0
  this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
  if (!(id in this.tebakgambar)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
      global.db.data.users[m.sender].tiketcoin += 1

global.db.data.users[m.sender].money += 100000
      global.db.data.users[m.sender].exp += 100000
            // benar
conn.sendImageAsSticker(m.chat, './src/media/image/true.webp', m, { packname: packname, author: author })
      setTimeout(() => {
      conn.reply(m.chat, `*+ 100.000 Balance*`, m)
}, 3000)
      clearTimeout(this.tebakgambar[id][3])
      delete this.tebakgambar[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else // salah
conn.sendImageAsSticker(m.chat, './src/media/image/false.webp', m, { packname: packname, author: author })
  }
  return !0
}
handler.exp = 0

module.exports = handler