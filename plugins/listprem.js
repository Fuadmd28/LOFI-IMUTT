let handler  = async (m, { conn, text, usedPrefix }) => {
  function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

	let users = global.db.data.users
	let { registered, name } = global.db.data.users[m.sender]

  var text = ""
  var i = 1
  for (let jid in users){
    if (users[jid].premium){
      text += `\n\n${i}. ${conn.getName(jid)} (@${jid.replace(/@.+/, '')})\n    wa.me/${jid.split('@')[0]}\n    ${msToDate(global.db.data.users[jid].premiumDate - new Date() * 1)}`
      i += 1
    }
  }

  conn.sendFile(m.chat, 'https://telegra.ph/file/e44d0ad8a0acde0f2cc07.jpg', 'thumbnail.jpg', `*––––––『 P R E M I U M 』––––––*\n\n• *Total User* : ${i-1} user\n${text}`, m, false, { contextInfo: { mentionedJid: conn.parseMention(text) } })
}
handler.help = ['listpremium']
handler.tags = ['info']
handler.command = /^(listpremium|premiumlist|listprem|premlist)$/i
handler.limit = true
module.exports = handler