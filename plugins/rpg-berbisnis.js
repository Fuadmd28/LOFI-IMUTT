let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let who1 = m.mentionedJid[0];
    let who2 = m.mentionedJid[1];
    let who3 = m.mentionedJid[2];

    if (text.split(" ").length < 3) throw "Minimal tag 3 member!";
    if (!text)
        return conn.reply(
            m.chat,
            `*⚠️ GET NUMBER*\n\n🔗 ${usedPrefix + command} @tag @tag @tag`,
            m
        );
    if (
        typeof global.db.data.users[who1] == "undefined" ||
        typeof global.db.data.users[who2] == "undefined" ||
        typeof global.db.data.users[who3] == "undefined"
    )
        throw "Di antara target yang kamu tag\nMereka tidak terdeteksi didalam database";
    let __timers = new Date() - global.db.data.users[m.sender].lastbisnis;
    let _timers = 18000000 - __timers; // 5 hours in milliseconds
    let timers = clockString(_timers);
    let users = global.db.data.users;
    let name = m.sender;
    if (
        9999 > users[who1].money ||
        9999 > users[who2].money ||
        9999 > users[who3].money
    )
        throw "Di antara target yang kamu tag\nMereka tidak memiliki modal..\nHarap masukkan modal terlebih dahulu 10000";
    if (9999 > users[m.sender].money)
        throw "kamu tidak memiliki modal harap masukkan modal 10000";
    if (new Date() - global.db.data.users[m.sender].lastbisnis > 18000000) {
        let dapat = Math.floor(Math.random() * 10000);
        let untung = Math.floor(Math.random() * 100000);
        let rugi = Math.floor(Math.random() * 50000);

        global.db.data.users[m.sender].money -= dapat * 1;
        global.db.data.users[who1].money -= dapat * 1;
        global.db.data.users[who2].money -= dapat * 1;
        global.db.data.users[who3].money -= dapat * 1;

        let caption = `Mohon tunggu kak..\n\n@${m.sender.split`@`[0]}\n@${who1.split`@`[0]}\n@${
            who2.split`@`[0]
        }\n@${
            who3.split`@`[0]
        }\nSedang berbisnis.. 😅\n\n*Kalian semua meletakkan modal masing-masing -${dapat}* 💵\n@${
            name.split`@`[0]
        }\n@${who1.split`@`[0]}\n@${who2.split`@`[0]}\n@${who3.split`@`[0]}`;

        conn.reply(
            m.chat,
            caption,
            m, {
                mentions: await conn.parseMention(caption)
            }
        );

        let outcome = Math.random() < 0.7; // 70% chance of failure

        if (outcome) {
            // Failure outcome
            setTimeout(() => {
                let bis = `Waahhh.. statistik bisnis kalian menurun\n\nMasing-masing minus:\n@${
                    name.split`@`[0]
                } : *-${(users[m.sender].money -= rugi * 1)} Money*\n@${
                    who1.split`@`[0]
                } : *-${(users[who1].money -= rugi * 1)} Money*\n@${
                    who2.split`@`[0]
                } : *-${(users[who2].money -= rugi * 1)} Money*\n@${
                    who3.split`@`[0]
                } : *-${(users[who3].money -= rugi * 1)} Money*`;
                conn.reply(m.chat, bis, m, {
                    mentions: conn.parseMention(bis)
                });
            }, 60000);
        } else {
            // Success outcome
            setTimeout(() => {
                let bis = `Selamat statistik bisnis kalian meningkat\n\nMasing-masing mendapatkan:\n@${
                    name.split`@`[0]
                } : *+${(users[m.sender].money += untung * 1)} Money*\n@${
                    who1.split`@`[0]
                } : *+${(users[who1].money += untung * 1)} Money*\n@${
                    who2.split`@`[0]
                } : *+${(users[who2].money += untung * 1)} Money*\n@${
                    who3.split`@`[0]
                } : *+${(users[who3].money += untung * 1)} Money*`;
                conn.reply(m.chat, bis, m, {
                    mentions: conn.parseMention(bis)
                });
            }, 60000);
        }

        // Set the last business time
        global.db.data.users[m.sender].lastbisnis = new Date().getTime();
    } else {
        m.reply(`Anda sudah berbisnis, tunggu ${timers} lagi sebelum berbisnis lagi..`);
    }
};

handler.help = ["berbisnis"];
handler.tags = ["rpg"];
handler.command = /^berbisnis$/i;
handler.limit = true;
handler.group = true;

module.exports = handler;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    console.log({ ms, h, m, s });
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}