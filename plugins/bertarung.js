let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let opponent = m.mentionedJid[0]
  let betAmount = parseInt(text) // Parse the specified bet amount from the command

  if (isNaN(betAmount)) {
    return conn.reply(m.chat, 'Please specify the amount of money to bet.', m)
  }

  if (!user || !global.db.data.users[opponent]) {
    return conn.reply(m.chat, '• *Example :* .bertarung @user', m)
  }

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  let alasanKalah = `${pickRandom(['bodoh gitu doang aja kalah tolol lu di denda','lemah lu kontol mending lu di rumah aja dah lu di denda dek','Jangan beratem kalo cupu dek wkwkwk kamu di denda','Dasar tolol lawan itu doang aja ga bisa lu di denda','Hadehh sono lu mending di rumah aja deh lu di denda'])}`
  let alasanMenang = `${pickRandom(['kamu berhasil menggunakan kekuatan elemental untuk menghancurkan pertahanan lawan dan mendapatkan','kamu berhasil melancarkan serangan mematikan dengan gerakan akrobatik yang membingungkan lawan, dan mendapatkan','Kamu berhasil menang karena baru selesai coli dan mendapatkan','Kamu berhasil menang karena menyogok lawan dan mendapatkan','Kamu berhasil menang karena bot merasa kasihan sama kamu dan mendapatkan','Kamu berhasil menang karena kamu melawan orang cupu dan mendapatkan'])}`

  if (user.money < betAmount) {
    return conn.reply(m.chat, `Your money is not enough. You have: ${user.money}, needed: ${betAmount}`, m)
  }

  let currentTime = new Date().getTime()
  let cooldownTime = 24 * 60 * 60 * 1000 // 24 hours cooldown

  if (user.lastWar && (currentTime - user.lastWar) < cooldownTime) {
    let remainingTime = Math.ceil((cooldownTime - (currentTime - user.lastWar)) / 1000)
    let remainingHours = Math.floor(remainingTime / 3600)
    let remainingMinutes = Math.floor((remainingTime % 3600) / 60)
    return conn.reply(m.chat, `You have to wait ${remainingHours} hours and ${remainingMinutes} minutes before you can fight again`, m)
  }

  conn.reply(m.chat, 'Preparing the arena...', m)

  setTimeout(() => {
    conn.reply(m.chat, 'Getting the arena...', m)

    setTimeout(() => {
      conn.reply(m.chat, 'Fighting...', m)

      setTimeout(() => {
        let userLevel = user.level || 1
        let opponentLevel = global.db.data.users[opponent].level || 1
        let levelDifference = userLevel - opponentLevel
        let baseWinChance = 0.5
        let levelModifier = 0.05 // Each level difference increases/decreases win chance by 5%
        let adjustedWinChance = baseWinChance + (levelModifier * levelDifference)
        let result = Math.random() < adjustedWinChance

        let wonAmount = result ? betAmount : -betAmount

        user.money += wonAmount
        global.db.data.users[opponent].money -= wonAmount

        let opponentName = conn.getName(opponent)

        let caption = `❏  *F I G H T*\n\n`
        caption += `Your opponent is: ${opponentName}\nLevel: [${userLevel}]\n\n`

        if (result) {
          caption += `*Win!*, ${alasanMenang}, +${betAmount} Money\n`
          caption += `Your current money: ${user.money}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/e3d5059b970d60bc438ac.jpg', 'You_Win.jpg', caption, m)
        } else {
          caption += `*Lose!*, ${alasanKalah}, -${betAmount} Money\n`
          caption += `Your current money: ${user.money}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/86b2dc906fb444b8bb6f7.jpg', 'You_Lose.jpg', caption, m)
        }

        user.lastWar = currentTime

        setTimeout(() => {
          conn.reply(m.chat, `You can fight again after 24 hours`, m)
        }, cooldownTime)
      }, 2000)
    }, 2000)
  }, 2000)
}

handler.help = ['bertarung *@user* [amount]', 'fight *@user* [amount]']
handler.tags = ['rpg']
handler.command = /^(fight|bertarung)$/i
handler.group = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}