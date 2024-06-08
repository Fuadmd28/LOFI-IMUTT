let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastberburu)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]

    if (new Date - user.lastberburu > 3600000) {
        if (!user.bow) {
            m.reply("Maaf, Anda tidak memiliki bow untuk berburu. Tolong .craft bow untuk berburu.")
            return
        }

        if (user.stamina < 10) {
            m.reply("Stamina anda tidak cukup untuk berburu. Silakan istirahat atau konsumsi item tertentu untuk mengembalikan stamina.")
            return
        }

        let randomaku1 = `${Math.floor(Math.random() * 10)}`
        let randomaku2 = `${Math.floor(Math.random() * 10)}`
        let randomaku3 = `${Math.floor(Math.random() * 10)}`
        let randomaku4 = `${Math.floor(Math.random() * 10)}`
        let randomaku5 = `${Math.floor(Math.random() * 10)}`
        let randomaku6 = `${Math.floor(Math.random() * 10)}`
        let randomaku7 = `${Math.floor(Math.random() * 10)}`
        let randomaku8 = `${Math.floor(Math.random() * 10)}`
        let randomaku9 = `${Math.floor(Math.random() * 10)}`
        let randomaku10 = `${Math.floor(Math.random() * 10)}`
        let randomaku11 = `${Math.floor(Math.random() * 10)}`
        let randomaku12 = `${Math.floor(Math.random() * 10)}`.trim()

        let rbrb1 = (randomaku1 * 1)
        let rbrb2 = (randomaku2 * 1)
        let rbrb3 = (randomaku3 * 1)
        let rbrb4 = (randomaku4 * 1)
        let rbrb5 = (randomaku5 * 1)
        let rbrb6 = (randomaku6 * 1)
        let rbrb7 = (randomaku7 * 1)
        let rbrb8 = (randomaku8 * 1)
        let rbrb9 = (randomaku9 * 1)
        let rbrb10 = (randomaku10 * 1)
        let rbrb11 = (randomaku11 * 1)
        let rbrb12 = (randomaku12 * 1)

        let anti1 = `${rbrb1}`
        let anti2 = `${rbrb2}`
        let anti3 = `${rbrb3}`
        let anti4 = `${rbrb4}`
        let anti5 = `${rbrb5}`
        let anti6 = `${rbrb6}`
        let anti7 = `${rbrb7}`
        let anti8 = `${rbrb8}`
        let anti9 = `${rbrb9}`
        let anti10 = `${rbrb10}`
        let anti11 = `${rbrb11}`
        let anti12 = `${rbrb12}`

        let hsl = `
• *Hasil Berburu*

 *🐂 = [ ${anti1} ]*         *🐃 = [ ${anti7} ]*
 *🐅 = [ ${anti2} ]*         *🐮 = [ ${anti8} ]*
 *🐘 = [ ${anti3} ]*         *🐒 = [ ${anti9} ]*
 *🐐 = [ ${anti4} ]*         *🐗 = [ ${anti10} ]*
 *🐼 = [ ${anti5} ]*         *🐖 = [ ${anti11} ]*
 *🐊 = [ ${anti6} ]*         *🐓 = [ ${anti12} ]*
`
        user.banteng += rbrb1
        user.harimau += rbrb2
        user.gajah += rbrb3
        user.kambing += rbrb4
        user.panda += rbrb5
        user.buaya += rbrb6
        user.kerbau += rbrb7
        user.sapi += rbrb8
        user.monyet += rbrb9
        user.babihutan += rbrb10
        user.babi += rbrb11
        user.ayam += rbrb12
        user.stamina -= 10

        setTimeout(() => {
            conn.reply(m.chat, hsl, m, {
                contextInfo: {
                    externalAdReply: {
                        mediaType: 1,
                        title: 'AXELLDX',
                        thumbnailUrl: 'https://telegra.ph/file/906f76432754b83b3a68b.jpg',
                        renderLargerThumbnail: true,
                        sourceUrl: ''
                    }
                }
            })
        }, 11000)

        setTimeout(() => {
            m.reply('Mendapatkan sasaran!')
        }, 10000)

        setTimeout(() => {
            m.reply('Sedang mencari mangsa...')
        }, 0)
        user.lastberburu = new Date * 1
    } else {
        m.reply(`\nSepertinya Anda Sudah kecapean, Silahkan Istirahat dulu sekitar *${timers}* Untuk bisa melanjutkan berburu.`)
    }
}

handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu|hunt)$/i

module.exports = handler

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}