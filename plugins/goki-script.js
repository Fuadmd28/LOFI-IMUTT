let handler = async (m, { conn, usedPrefix }) => {
let text = `*SELL SCRIPT AXELLDX V3.0.0*
🏷️ Price : *Rp. 100.000 / $6.27*

*Special Features & Benefit :*
- AI & AI Image
- Chat GPT (Turbo 3.5)
- Anti Bot
- Chat Bot
- Chat Ai (Character Ai)
- Jadibot (Pairing Code)
- Button List
- 35 Mini Games
- 60 Rpg Games
- 60 Ai Features
- Order Kouta (H2H)
- Atlantic Pedia (H2H)
- Leveling & Roles
- Email Verification
- Buyprem Gateway
- Deposit Gateway
- Captcha Verification
- Send Email
- Free Updates
- Bonus ApiKey 5K Request (For 2 month)

*Additional Features :*
🏷️ Price : *+Rp. 50.000 / +$6.80*
- Temporary Bot Features (Jadibot)
🏷️ Price : *+Rp. 30.000 / +$4.80*
- Chatroom (Conversation \w Bot)
🏷️ Price : *+Rp. 15.000 / +$3.80*
- Menfess (Confess)

*Requirement :*
- NodeJS v14
- FFMPEG
- IMAGEMAGICK
- Ram Min. 5GB

Minat ? chat *${usedPrefix}owner*`
conn.sendFile(m.chat, 'https://telegra.ph/file/97183c3a3d6514be77f87.jpg', '', text, m)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info','main']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler