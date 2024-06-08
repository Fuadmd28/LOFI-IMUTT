const captcha = require('@neoxr/captcha');
const crypto = require("crypto");
const fetch = require("node-fetch");

const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, {
    conn, text, usedPrefix, command
}) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};

    if (conn.registrasi[m.chat]?.[m.sender]) return m.reply('You are requesting verification!');
    let user = global.db.data.users[m.sender];
    let kemii = await conn.getName(m.sender)
    if (user.registered === true) return conn.reply(m.chat, '```✅ Nomor Kamu Udah Terverifikasi```', m)
    const umurRandom = Math.floor(Math.random() * 100) + 1;
    const formatSalah = `• *Example :* ${usedPrefix + command} ${kemii}.${umurRandom}`;
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) return conn.reply(m.chat, "🚩 Nama tidak boleh kosong (Alphanumeric)", m)
    if (!age) return conn.reply(m.chat, "🚩 Umur tidak boleh kosong (Angka)", m)
    age = parseInt(age);
    if (age > 50) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nTua amat dah", m)
    if (age < 5) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nBanyak pedo", m)

    let sn = crypto.createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;

    let newCaptcha = captcha()
    let image = Buffer.from(newCaptcha.image.split(',')[1], 'base64')

    let confirm = "Reply pesan ini dengan mengetik kode CAPTCHA yang ada pada gambar!";
    let { key } = await conn.sendFile(m.chat, image, '', confirm.trim(), m);

    conn.registrasi[m.chat] = {
        ...conn.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: newCaptcha.value,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, { delete: key });
                delete conn.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
}

handler.before = async (m, { conn }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    if (m.isBaileys) return;
    if (!conn.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, message, sender, user, name, age, key } = conn.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
        conn.reply(m.chat, '✅ Your number has been successfully verified (+50 Limit)', m);
        clearTimeout(timeout);
        conn.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    } else {
        conn.reply(m.chat, `🚩 Your verification code is wrong.`, m)
        clearTimeout(timeout);
        conn.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ["register","daftar"].map(v => v + " *<name>.<age>*");
handler.tags = ["start"];
handler.command = /^(register|daftar)$/i;

module.exports = handler;