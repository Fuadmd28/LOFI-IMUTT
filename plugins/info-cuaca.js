const axios = require('axios');
const fetch = require('node-fetch');
const {
    generateWAMessageFromContent
} = require("@whiskeysockets/baileys");

let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom());
    let namemu = await conn.getName(who);

    if (!args[0]) throw "Masukkan Nama Lokasi";
    m.reply(wait);
    try {
        let response = axios.get('https://api.weatherapi.com/v1/current.json?key=897dba35c1d94f4cbea134758220207&q=' + text);
        let res = await response;
        let {
            name,
            region,
            country,
            lat,
            lon,
            tz_id,
            localtime_epoch,
            localtime
        } = res.data.location;
        let {
            last_updated_epoch,
            last_updated,
            temp_c,
            temp_f,
            is_day,
            wind_mph,
            wind_kph,
            wind_degree,
            wind_dir,
            pressure_mb,
            pressure_in,
            precip_mm,
            precip_in,
            humidity,
            cloud,
            feelslike_c,
            feelslike_f,
            vis_km,
            vis_miles,
            uv,
            gust_mph,
            gust_kph
        } = res.data.current;
        let icon = await (await fetch('https:' + res.data.current.condition.icon)).arrayBuffer();
        let caption = `
 *- - - - [ CONDITION ] - - -*
🌤️ ${res.data.current.condition.text}

📍 *Name:* ${name}
🏞️ *Region:* ${region}
🌍 *Country:* ${country}
🌐 *Latitude:* ${lat}
🌐 *Longitude:* ${lon}
🕒 *Timezone ID:* ${tz_id}
🕒 *Local Time Epoch:* ${localtime_epoch}
🕒 *Local Time:* ${localtime}

${readMore}
 *- - - - [ DETAILED ] - - -*
🕒 *Last Updated Epoch:* ${last_updated_epoch}
⏲️ *Last Updated:* ${last_updated}
❄️ *Temp Celcius:* ${temp_c}
🌡️ *Temp Fahrenheit:* ${temp_f}
🌞 *Is Day:* ${is_day}
💨 *Wind Mph:* ${wind_mph}
 🌫️ *Wind Kph:* ${wind_kph}
🧭 *Wind Degree:* ${wind_degree}
🌊 *Wind Dir:* ${wind_dir}
💨 *Pressure Mb:* ${pressure_mb}
💨 *Pressure In:* ${pressure_in}
💧 *Precip Mm:* ${precip_mm}
💧 *Precip In:* ${precip_in}
💧 *Humidity:* ${humidity}
☁️ *Cloud:* ${cloud}
🌡️ *Feelslike Celcius:* ${feelslike_c}
🌡️ *Feelslike Fahrenheit:* ${feelslike_f}
👁️‍🗨️ *Vis Km:* ${vis_km}
👁️‍🗨️ *Vis Miles:* ${vis_miles}
🔆 *UV:* ${uv}
💨 *Gust Mph:* ${gust_mph}
💨 *Gust Kph:* ${gust_kph}
        `.trim();
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: caption,
                jpegThumbnail: icon,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        title: 'P E R K I R A A N',
                        body: 'C U A C A',
                        thumbnail: icon,
                        mediaType: 1,
                        sourceUrl: null
                    }
                }
            }
        }, {
            quoted: m
        });
        await conn.relayMessage(m.chat, msg.message, {});
    } catch (e) {
        throw error;
    }
};

handler.help = ['infocuaca <city>'];
handler.tags = ['info'];
handler.command = /^(info(weather|cuaca)|weather|cuaca)$/i;
handler.limit = true;

module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);