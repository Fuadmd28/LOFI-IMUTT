let ytdl = require('ytdl-core')
let yts = require('yt-search')
let fs = require('fs')
let { pipeline } = require('stream')
let { promisify } = require('util')
let os = require('os')

const streamPipeline = promisify(pipeline);

function trimYouTubeUrl(url) {
  const trimmedUrl = url.split("?")[0];
  return trimmedUrl;
}

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Tentang Perasaanku`, m)
   conn.sendMessage(m.chat, {
    react: {
      text: '🍺',
      key: m.key,
    }
  });
  try {
  let trimmedUrl = trimYouTubeUrl(text);
  let search = await yts(trimmedUrl);
  let vid = search.videos[0];
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);
  
await conn.sendMessage(m.chat, {
document: {
url: "https://wa.me/"
},
mimetype: minety, 
pageCount: 2023,
fileName: `Duration ${timestamp} ( Second )`,
fileLength: 100000000000000,
caption: '```Selamat Menikmati Kak...```', 
contextInfo: {
forwardingScore: 2023, 
isForwarded: false,
externalAdReply: {
title: 'DCODEKEMII',
body: 'Version: 3.0.0',
mediaType: 1,
thumbnailUrl: thumbnail,
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: false,
}}}, { quoted: m })
 let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
 }
 await conn.sendMessage(m.chat, doc, { quoted: m });
 
  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
};

handler.help = ['play'].map((v) => v + ' *<text>*');
handler.tags = ['music'];
handler.command = /^play$/i;

handler.exp = 0;
handler.limit = false;
handler.register = true

module.exports = handler