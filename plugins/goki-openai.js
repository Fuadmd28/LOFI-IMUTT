const uploadImage = require("../lib/uploadFile")

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply(Func.example(usedPrefix, command, "halo"));
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ""  
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  try {
  if (!mime) {
    let hasil = await CleanDx(text)
    await conn.sendMessage(m.chat, { text: `${hasil}`, edit: kemii })
    } else {
    let media = await q.download()
		let isTele = /image\/(png|jpe?g)/.test(mime)
		let link = await uploadImage(media)
		let res = await itz.geminiimage(text, link)
		await await conn.sendMessage(m.chat, { text: `${res.result}`, edit: kemii })
    }
  } catch (e) {
    throw e;
  }
};

handler.command = /^ai$/i
handler.help = ['ai *<text>*']
handler.tags = ['tools','ai']
handler.register = false
handler.limit = true

module.exports = handler

function getTodayDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
  const year = today.getFullYear();
  const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" }); // Mengambil nama hari dalam bahasa Inggris.

  return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}

async function CleanDx(your_qus) {
    try {
        let linkaiList = [];
        let linkaiId = Array.from({
            length: 21
        }, () => Math.random().toString(36)[2]).join('');
        let Baseurl = "https://vipcleandx.xyz/";
        linkaiList.push({
            "content": your_qus,
            "role": "user",
            "nickname": "",
            "time": `${(new Date()).getHours().toString().padStart(2, '0')}:${(new Date()).getMinutes().toString().padStart(2, '0')}:${(new Date()).getSeconds().toString().padStart(2, '0')}`,
            "isMe": true
        });
        linkaiList.push({
            "content": "",
            "role": "assistant",
            "nickname": "AI",
            "time": `${(new Date()).getHours().toString().padStart(2, '0')}:${(new Date()).getMinutes().toString().padStart(2, '0')}:${(new Date()).getSeconds().toString().padStart(2, '0')}`,
            "isMe": false
        });
        if (linkaiList.length > 10) linkaiList.shift();
        let response = await fetch(Baseurl + "v1/chat/gpt/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Forwarded-For": Array.from({
                    length: 4
                }, () => Math.floor(Math.random() * 256)).join('.'),
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            body: JSON.stringify({
                "list": linkaiList,
                "id": linkaiId,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "models": "0",
                "continuous": true
            })
        });
        return await response.text();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}