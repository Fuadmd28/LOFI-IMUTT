/** !! THIS CODE GENERATED BY RODOTZ X ZHUBOT !! **/

let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw '*Parameter Salah*\n\nMasukkan Link\n*Example:* ' + usedPrefix + command + ' https://www.facebook.com/reel/xxxxxxxxx'
  try { 
    m.reply("_please wait_")
    let start = new Date()
    let res = await facebook(text)
    if(res.error) {
      throw res.error.message;
    }
    let teks = `乂  *F A C E B O O K*\n\n`
    teks += `  ∘  *Duration* : ${res.duration}\n`
    teks += `  ∘  *Fetch* : ${new Date() - start} ms\n\n${set.footer}`
    conn.sendFile(m.chat, res.links.sd, '', teks, m)
  } catch (e) {
    console.log(e)
    return m.reply('Error: ' + e)
  }
}
handler.help = ["facebookdl","fbdl","fb"]
handler.tags = ["downloader"]
handler.command = ["fb","fbdl","facebook","facebookdownload","facebookdl"]
module.exports = handler

async function facebook(url) {
  let { data } = await axios({ 
    method: 'POST', 
    url: 'https://yt1s.io/api/ajaxSearch/facebook', 
    data: `q=${encodeURIComponent(url)}&vt=facebook` 
  });
  return data;
}