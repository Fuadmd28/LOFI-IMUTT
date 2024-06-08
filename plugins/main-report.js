let handler = async (m, {
    conn,
    text,
    command
}) => {
    if (!text) return m.reply("Report Bug apa?")
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
handler.help = ['report'].map(v => v + ' [teks]')
handler.tags = ['main']
handler.command = /^re(port?)?$/i;

module.exports = handler