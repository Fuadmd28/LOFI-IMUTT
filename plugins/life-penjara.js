let handler = async (m, { isPrems, conn, args, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender];
  
  const JAIL_TIME = 60 * 60 * 1000
  let who = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : args[0] ? ((args.join('').replace(/[@ .+-]/g, '')).replace(/^\+/, '').replace(/-/g, '') + '@s.whatsapp.net') : '';
  
  if (user.job == 'polisi') {
    if (!text) throw '*Siapa yang mau di penjara?*'
    if (!who) return m.reply('*Tag target atau ketik nomornya*')
    
    if (!global.db.data.users[who]) return m.reply(`*Pengguna ${who} tidak ada dalam database*`)
    
    global.db.data.users[who].jail = true
    global.db.data.users[who].jailExpired = Date.now() + JAIL_TIME
    
    user.jobexp += 1
    
    setTimeout(() => {let handler = async (m, { isPrems, conn, args, text, usedPrefix, command }) => {
  let handler = async (m, { isPrems, conn, args, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender];
  
  const JAIL_TIME = 60 * 60 * 1000
  let who = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : args[0] ? ((args.join('').replace(/[@ .+-]/g, '')).replace(/^\+/, '').replace(/-/g, '') + '@s.whatsapp.net') : '';
  
  if (user.job == 'polisi') {
    if (!text) throw '*Siapa yang mau di penjara?*'
    if (!who) return m.reply('*Tag target atau ketik nomornya*')
    
    if (!global.db.data.users[who]) return m.reply(`*Pengguna ${who} tidak ada dalam database*`)
    
    global.db.data.users[who].jail = true
    global.db.data.users[who].jailExpired = Date.now() + JAIL_TIME
    
    user.jobexp += 1
    
    setTimeout(() => {let handler = async (m, { isPrems, conn, args, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender];
  
  const JAIL_TIME = 60 * 60 * 1000
  let who = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : args[0] ? ((args.join('').replace(/[@ .+-]/g, '')).replace(/^\+/, '').replace(/-/g, '') + '@s.whatsapp.net') : '';
  
  if (user.job == 'polisi') {
    if (!text) throw '*Siapa yang mau di penjara?*'
    if (!who) return m.reply('*Tag target atau ketik nomornya*')
    
    if (!global.db.data.users[who]) return m.reply(`*Pengguna ${who} tidak ada dalam database*`)
    
    global.db.data.users[who].jail = true
    global.db.data.users[who].jailExpired = Date.now() + JAIL_TIME
    
    user.jobexp += 1
    
    setTimeout(() => {
      conn.reply(who, `*Kamu telah di penjara oleh ${user.nama}*`)
    }, 5000)
    
    conn.reply(m.chat, `Berhasil penjara *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*\n +1 Tingkat Kerja Keras\n\n_Jika polisi diketahui memenjarai seseorang tanpa alasan tertentu, maka akan langsung diban oleh pihak atasan._`, null, { mentions: [who] })
    
    return
  }
  
  await conn.reply(m.chat, '*Fitur ini hanya dikhususkan untuk orang yang bekerja sebagai polisi*', m)
}

handler.help = ['penjara']
handler.tags = ['life']
handler.command = /^penjara$/i

module.exports = handler
      conn.reply(who, `*Kamu telah di penjara oleh ${user.nama}*`)
    }, 5000)
    
    conn.reply(m.chat, `Berhasil penjara *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*\n👮 +1 Tingkat Kerja Keras\n\n_Jika polisi diketahui memenjarai seseorang tanpa alasan tertentu, maka akan langsung diban oleh pihak atasan._`, null, { mentions: [who] })
    
    return
  }
  
  await conn.reply(m.chat, '*Fitur ini hanya dikhususkan untuk orang yang bekerja sebagai polisi*', m)
}

handler.help = ['penjara']
handler.tags = ['life']
handler.command = /^penjara$/i

module.exports = handler user = global.db.data.users[m.sender];
  
  const JAIL_TIME = 60 * 60 * 1000
  let who = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : args[0] ? ((args.join('').replace(/[@ .+-]/g, '')).replace(/^\+/, '').replace(/-/g, '') + '@s.whatsapp.net') : '';
  
  if (user.job == 'polisi') {
    if (!text) throw '*Siapa yang mau di penjara?*'
    if (!who) return m.reply('*Tag target atau ketik nomornya*')
    
    if (!global.db.data.users[who]) return m.reply(`*Pengguna ${who} tidak ada dalam database*`)
    
    global.db.data.users[who].jail = true
    global.db.data.users[who].jailExpired = Date.now() + JAIL_TIME
    
    user.jobexp += 1
    
    setTimeout(() => {
      conn.reply(who, `*Kamu telah di penjara oleh ${user.name}*`)
    }, 5000)
    
    conn.reply(m.chat, `Berhasil penjara *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*\n +1 Tingkat Kerja Keras\n\n_Jika polisi diketahui memenjarai seseorang tanpa alasan tertentu, maka akan langsung diban oleh pihak atasan._`, null, { mentions: [who] })
    
    return
  }
  
  await conn.reply(m.chat, '*Fitur ini hanya dikhususkan untuk orang yang bekerja sebagai polisi*', m)
}

handler.help = ['penjara']
handler.tags = ['life']
handler.command = /^penjara$/i

module.exports = handler
      conn.reply(who, `*Kamu telah di penjara oleh ${user.nama}*`)
    }, 5000)
    
    conn.reply(m.chat, `Berhasil penjara *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*\n👮 +1 Tingkat Kerja Keras\n\n_Jika polisi diketahui memenjarai seseorang tanpa alasan tertentu, maka akan langsung diban oleh pihak atasan._`, null, { mentions: [who] })
    
    return
  }
  
  await conn.reply(m.chat, '*Fitur ini hanya dikhususkan untuk orang yang bekerja sebagai polisi*', m)
}

handler.help = ['penjara']
handler.tags = ['life']
handler.command = /^penjara$/i

module.exports = handler