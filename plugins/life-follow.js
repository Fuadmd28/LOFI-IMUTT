let confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
    // Ensure global.db.users is defined
    global.db.users = global.db.users || {};

    // Ensure the sender is in the database and initialize if not
    const user = global.db.users[m.sender] = global.db.users[m.sender] || {};

    // Ensure user.following is an array
    user.following = user.following || [];

    if (user.jail === true) {
        throw '*Kamu tidak bisa melakukan aktivitas karena masih dalam penjara!*';
    }
    if (user.nama == '-' || user.gender == 'non-binary 🎭' || user.umur == '-') {
        throw `Untuk menggunakan fitur ini, kamu harus teregistrasi terlebih dahulu dengan cara:\n\nKetik */set* dan ikuti tutorialnya`;
    }

    let who = ((m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : args[0] ? ((args.join('').replace(/[@ .+-]/g, '')).replace(/^\+/, '').replace(/-/g, '') + '@s.whatsapp.net') : '').replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!who || !global.db.users[who]) {
        return m.reply('Tag target atau ketik nomornya dan pastikan user ada di database');
    }

    // Ensure the target user is in the database and initialize if not
    let _user = global.db.users[who] = global.db.users[who] || {};

    // Ensure _user.followers is an array
    _user.followers = _user.followers || [];

    if (user.following.includes(who)) return m.reply(`Kamu sudah follow orang ini!`);
    if (_user.banned === true) return m.reply(`Kamu tidak bisa follow orang yang terbanned!`);

    let confirm = `
Apakah kamu yakin ingin mengikuti *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*
Timeout *60* detik
Ketik "y" untuk iya ✅ dan "n" ❌ untuk tidak!
`.trim();

    await conn.reply(m.chat, confirm, m, { mentions: [who] });

    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        timeout: setTimeout(() => {
            m.reply('Timeout');
            delete confirmation[m.sender];
        }, 60 * 1000)
    };
}

handler.before = async m => {
    if (m.isBaileys) return;
    if (!(m.sender in confirmation)) return;
    if (!m.text) return;

    let { timeout, sender, message, to } = confirmation[m.sender];
    if (m.id === message.id) return;

    global.db.users = global.db.users || {};

    let user = global.db.users[sender] = global.db.users[sender] || {};
    let _user = global.db.users[to] = global.db.users[to] || {};
    let users = Object.values(global.db.users);
    let followers = users.filter(user => user.following && user.following.includes(m.sender)).map(follower => Object.values(follower)[0].slice(0, -5));

    if (/❌|no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout);
        delete confirmation[sender];
        return m.reply('Membatalkan follow');
    }

    if (/✅|y(es)?/g.test(m.text.toLowerCase())) {
        user.following.push(to);
        _user.followers = _user.followers.length + 1;

        m.reply(`Berhasil follow *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] });
        clearTimeout(timeout);
        delete confirmation[sender];
    }
}

handler.help = ['follow'].map(v => v + '');
handler.tags = ['life'];
handler.command = /^(follow)$/i;

handler.disabled = false;

module.exports = handler;

function isNumber(x) {
    return !isNaN(x);
}

function toSimple(number) {
    if (!isNumber(number)) return number;
    number = parseInt(number * 1);
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(number);
}