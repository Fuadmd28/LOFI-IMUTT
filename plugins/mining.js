const cooldown = isPrems => isPrems ? 3600000 : 7200000; // 1 jam untuk premium, 2 jam untuk non-premium

async function handler(m, { isPrems }) {
  try {
    let user = global.db.data.users[m.sender];

    if (user.jail === true) {
      throw '*Kamu tidak bisa melakukan aktivitas karena masih dalam penjara!*';
    }

    if (!user.pickaxe || user.pickaxe < 1) {
      throw 'Kamu tidak memiliki pickaxe untuk melakukan mining ⛏️';
    }

    if (user.health < 80) {
      return m.reply(`
⚠️ Butuh setidaknya 80 ❤️Healths untuk menambang!! ⚠️
Silakan beli ❤️Healths terlebih dahulu dengan mengetik *${usedPrefix}buy potion <jumlah>*,
dan ketik *${usedPrefix}heal <jumlah>* untuk menggunakan potion.
`.trim());
    }

    let now = new Date();
    let timers = cooldown(isPrems) - (now - user.lastmining);
    let hours = Math.floor(timers / (1000 * 60 * 60));
    let minutes = Math.floor((timers % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timers % (1000 * 60)) / 1000);

    if (timers > 0) {
      return m.reply(`
⏳ Kamu sudah menambang sebelumnya! Silakan tunggu *${hours} jam ${minutes} menit ${seconds} detik* sebelum menambang lagi.
`.trim());
    }

    let rewards = {
      exp: 1000,
      sampah: 101,
      string: 25,
      batu: 30,
      iron: 1,
      diamond: 1,
      emerald: 4,
      common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
      uncommon: 1,
      mythic: 1,
      legendary: 1,
      emas: 1,
    };

    let totalChance = Object.values(rewards).reduce((acc, val) => acc + val, 0);
    let randomNumber = Math.random() * totalChance;
    let rewardResult = '';
    let currentChance = 0;

    for (let reward of Object.keys(rewards)) {
      currentChance += rewards[reward];
      if (randomNumber < currentChance) {
        rewardResult = reward;
        break;
      }
    }

    let durabilityIncrease = Math.floor(Math.random() * 3) + 1;
    user.pickaxedurability = (user.pickaxedurability || 0) + durabilityIncrease;

    if (user.pickaxedurability >= 75) {
      if (user.pickaxe > 0) {
        user.pickaxe -= 1;
      }
      user.pickaxedurability = 0;
    }

    let healthDecrease = Math.floor(Math.random() * 10) + 1; // Pengurangan health acak antara 1 hingga 10
    user.health = (user.health || 0) - healthDecrease;
    if (user.health < 0) user.health = 0; // Pastikan health tidak kurang dari 0

    let message = `🎉 Selamat! Kamu mendapatkan 1 ${rewardResult} ${getEmoji(rewardResult)} dari mining ⛏️\n\n`;
    message += `Ore yang didapatkan:\n`; // Memisahkan ore dari reward lainnya
    for (let reward of ['batu', 'iron', 'diamond', 'emas', 'emerald']) { // Menampilkan hanya ore
      message += `• ${getEmoji(reward)}${reward}: ${user[reward] || 0}\n`;
    }

    message += `\nReward lainnya:\n`; // Menampilkan reward selain ore
    for (let reward of Object.keys(rewards)) {
      if (!['batu', 'iron', 'diamond', 'emas', 'emerald'].includes(reward)) { // Menampilkan hanya reward selain ore
        message += `• ${getEmoji(reward)}${reward}: ${user[reward] || 0}\n`;
      }
    }

    message += `\n🔋 Durability Pickaxe yang dipakai: ${user.pickaxedurability}/75`;
    message += `\n⛏️ Jumlah Pickaxe yang tersisa: ${user.pickaxe || 0}`;
    message += `\n❤️ Sisa Health: ${user.health || 0}`;

    user.lastmining = now * 1 + 3600000; // Menambah 1 jam ke waktu sekarang

    conn.reply(m.chat, message, m, {
      contextInfo: {
        externalAdReply: {
          mediaType: 1,
          title: 'AXELLDX',
          thumbnailUrl: 'https://telegra.ph/file/cafe486f7bc83d9702878.jpg',
          renderLargerThumbnail: true,
          sourceUrl: ''
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}

handler.help = ['mining'];
handler.tags = ['rpg'];
handler.command = /^mining$/i;

handler.cooldown = cooldown;

module.exports = handler;

function getEmoji(item) {
  const emojis = {
    exp: '⭐',
    sampah: '🗑️',
    string: '🧶',
    batu: '🪨',
    iron: '⛏️',
    diamond: '💎',
    emerald: '✳️',
    common: '📦',
    uncommon: '🎁',
    mythic: '🎉',
    legendary: '🔥',
    emas: '🔶',
  };
  return emojis[item] || '';
}