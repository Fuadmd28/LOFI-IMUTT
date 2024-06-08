let axios = require('axios')
let cheerio = require('cheerio')

let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/xxxxxxxxx`
try { 
conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
let json = await igdl(text)

for (let v of json.data) {
conn.sendFile(m.chat, v, '', set.footer, m)
}
  } catch (error) {
    console.log(error);
    throw '*Tidak Dapat Mengambil Informasi Url*\n' + error;
  }
};
handler.help = ['igdl', 'instagram', 'ig']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
module.exports = handler

async function igdl(url) {
  try {
    const resp = await axios.post(
      "https://saveig.app/api/ajaxSearch",
      new URLSearchParams({ q: url, t: "media", lang: "id" }),
      {
        headers: {
          accept: "*/*",
          "user-agent": "PostmanRuntime/7.32.2",
        },
      }
    );
    let result = { status: true, data: [] };
    const $ = cheerio.load(resp.data.data);
    $(".download-box > li > .download-items").each(function () {
      $(this)
        .find(".photo-option > select > option")
        .each(function () {
          let resolution = $(this).text();
          let url = $(this).attr("value");
          if (/1080/gi.test(resolution)) result.data.push(url);
        });
      $(this)
        .find("div:nth-child(2)")
        .each(function () {
          let url2 = $(this).find("a").attr("href");
          if (!url2) return;
          if (!/\.webp/gi.test(url2)) {
            result.data.push(url2);
          }
        });
    });
    return result;
  } catch {
    const result = {
      status: false,
      message: "Couldn't fetch data of url",
    };
    console.log(result);
    return result;
  }
}