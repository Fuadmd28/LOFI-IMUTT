let NeoApi = require("@neoxr/wb");
let b = new NeoApi();
let fs = require('fs');
let fetch = require('node-fetch');
let moment = require('moment-timezone');

let handler = m => m;
handler.all = async function (m) {
    let nama = await conn.getName(m.sender);
    let user = global.db.data.users[m.sender];
    let pp = global.thumb;
    try {
        pp = await this.profilePictureUrl(m.sender, 'image');
    } catch (e) {
    } finally {
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"]);
        global.betul = 'https://telegra.ph/file/fa190f428461465d70837.png'
        global.salah = 'https://telegra.ph/file/ff4e3037f2df79041daff.png'       
        global.mpoint = `${getRandomInt(10,50)}${getRandomInt(100, 900)}`
        global.tts = `- `
        global.pont = ` Point`
        global.tm = `*${tts}`+`${toRupiah(mpoint)}`+`${pont}*`
        global.dpoint = `${getRandomInt(50,500)}${getRandomInt(100, 900)}`
        global.tta = `+ `
        global.pontt = ` Point`
        global.ta = `*${tta}`+`${toRupiah(dpoint)}`+`${pontt}*`
        global.name = `${user.name}`
        global.idgc = '120363232302691941@g.us'
        global.fetch = require('node-fetch');
        global.Scraper = {
           Bard: require("../lib/scrape/bardie.js"),
           Ai: require("../lib/scrape/ai.js"),
           Tools: require("../lib/scrape/tools.js"),
        }
       
        global.Func = b.Function;
        global.cid = `ID-${Func.makeId(32)}`
        global.ucapan = ucapan()
        global.axios = require('axios');

        const _uptime = process.uptime() * 1000;
        global.fig = {
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true,
          title: 'DCODEKEMII',
          body: ucapan,
          thumbnailUrl: pp
          }
          } 
          }        
        global.fverif = {
          key: { 
          participant: '0@s.whatsapp.net', 
          remoteJid: "0@s.whatsapp.net" }, 
          message: {
          conversation: "DCODEKEMII"}
          }
        global.fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: name, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:Kemii\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
        
    }
};

module.exports = handler;

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "malam Sek";
    if (time >= 4) {
        res = "Selamat pagi 🌅";
    }
    if (time > 10) {
        res = "Selamat siang kak ⛅";
    }
    if (time >= 15) {
        res = "selamat sore kak 🌄";
    }
    if (time >= 18) {
        res = "selamat malam kak 🌌";
    }
    return res;
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}