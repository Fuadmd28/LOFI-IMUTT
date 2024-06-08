let qris = 'https://telegra.ph/file/e2432b997b9db8e0fc021.jpg'
let text = '```Bot ini gratis untuk semua dan dapat ditambahkan ke Grup. Namun, jika Anda merasa terbantu dan ingin berkontribusi, donasi sangat diapresiasi. Donasi membantu pemilik menjaga kelangsungan hidup bot dan memastikan berfungsi di masa depan. Terima kasih kepada yang sudah berdonasi. Mohon pertimbangkan untuk berkontribusi agar bot terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih atas dukungan Anda.```'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

conn.sendFile(m.chat, 'https://telegra.ph/file/f36e9015c41e9c4d51f0d.jpg', '', '', m)
}
handler.help = ['donasi']
handler.tags = ['main','start']
handler.command = /^(donasi|donate)$/i

handler.limit = true

module.exports = handler