let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let os = require('os')
let { platform } = require('node:process')
let canvafy = require ('canvafy')
let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
let moment = require('moment-timezone')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const defaultMenu = {
  before: ``.trimStart(),
  header: '╭─── • *%category*',
  body: '│◦ %cmd',
  footer: '╰─── •',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['anonymous', 'life', 'all', 'genshin', 'quotes', 'primbon', 'main', 'fun', 'islami', 'info', 'ai', 'bug', 'jadibot', 'audio', 'atlantic', 'store', 'ephoto', 'giveaway', 'ssh', 'life', 'search', 'downloader', 'textprome', 'nsfw', 'convert', 'premium', 'music', 'simulator', 'game', 'judi', 'group', 'panel', 'internet', 'hengker', 'owner', 'rpg', 'diffusion', 'sticker', 'tools', 'anime', 'smm']
  if (!arrayMenu.includes(teks)) teks = '404'
 if (teks == "all") tags = {
        "main": "Main",
        "anonymous": "Anonymous",
        "islami": "Islami",
        "ai": "Ai",
        "genshin": "Genshin",
        "diffusion": "Diffusion",
        "convert": "Convert",
        "quotes": "Quotes",
        "game": "Game",
        "tools": "Tools",
        "fun": "Fun",
        "jadibot": "Jadibot",
        "bug": "bug",
        "music": "Music",
        "atlantic": "Atlantic",
        "textprome": "Textprome",
        "judi": "judi",
        "hengker": "Hengker",
        "ephoto": "ephoto",
        "rpg": "Rpg",
        "life": "Life",
        "anime": "Anime",
        "simulator": "Simulator",
        "primbon": "Primbon",
        "group": "Group",
        "info": "Info",
        "audio": "Audio",
        "maker": "Maker",
        "internet": "Internet",
        "search": "Searching",
        "downloader": "Downloader",
        "nsfw": "Nsfw",
        "vote": "Voting",
        "absen": "Absen",
        "store": "Store",
        "panel": "Panel",
        "premium": "Premium",
        "smm": "Smm",
        "owner": "Owner",
        "giveaway": "Giveaway",
        "ssh": "Ssh"
    } 
  
  if (teks == 'anonymous') tags = {
    anonymous: 'ANONYMOUS'
  }
  if (teks == 'downloader') tags = {
    downloader: 'DOWNLOADER'
  }
  if (teks == 'ai') tags = {
    ai: 'AI'
  }
  if (teks == 'genshin') tags = {
    genshin: 'GENSHIN'
  }
  if (teks == 'convert') tags = {
    convert: 'CONVERT'
  }
  if (teks == 'giveaway') tags = {
    giveaway: 'GIVEAWAY'
  }
  if (teks == 'quotes') tags = {
    quotes: 'QUOTES'
  }
  if (teks == 'primbon') tags = {
    primbon: 'PRIMBON'
  }
  if (teks == 'main') tags = {
    main: 'MAIN'
  }
  if (teks == 'diffusion') tags = {
    diffusion: 'DIFFUSION'
  }
  if (teks == 'premium') tags = {
    premium: 'PREMIUM'
  }
  if (teks == 'game') tags = {
    game: 'GAME'
  }
  if (teks == 'smm') tags = {
    smm: 'SMM'
  }
  if (teks == 'simulator') tags = {
    simulator: 'SIMULATOR'
  }
  if (teks == 'group') tags = {
    group: 'GROUP'
  }
  if (teks == 'panel') tags = {
    panel: 'PANEL'
  }
  if (teks == 'ssh') tags = {
    ssh: 'SSH'
  }
  if (teks == 'music') tags = {
    music: 'MUSIC'
  }
  if (teks == 'anonymous') tags = {
    anonymous: 'ANONYMOUS'
  }
  if (teks == 'atlantic') tags = {
    atlantic: 'ATLANTIC'
  }
  if (teks == 'fun') tags = {
    fun: 'FUN'
  }
  if (teks == 'islami') tags = {
    islami: 'ISLAMI'
  }
  if (teks == 'textprome') tags = {
    textprome: 'TEXTPROME'
  }
  if (teks == 'store') tags = {
    store: 'STORE'
  }
  if (teks == 'bug') tags = {
    bug: 'BUG'
  }
  if (teks == 'jadibot') tags = {
    jadibot: 'JADIBOT'
  }
  if (teks == 'nsfw') tags = {
    nsfw: 'NSFW'
  }
  if (teks == 'internet') tags = {
    internet: 'INTERNET'
  }
  if (teks == 'judi') tags = {
    judi: 'JUDI'
  }
  if (teks == 'hengker') tags = {
    hengker: 'HENGKER'
  }
  if (teks == 'ephoto') tags = {
    ephoto: 'EPHOTO'
  }
  if (teks == 'search') tags = {
    search: 'SEARCH'
  }
  if (teks == 'owner') tags = {
    owner: 'OWNER'
  }
  if (teks == 'rpg') tags = {
    rpg: 'RPG'
  }
  if (teks == 'info') tags = {
    info: 'INFO'
  }
  if (teks == 'sticker') tags = {
    sticker: 'STICKER'
  }
  if (teks == 'tools') tags = {
    tools: 'TOOLS'
  }
  if (teks == 'audio') tags = {
    audio: 'AUDIO'
  }
  if (teks == 'life') tags = {
    life: 'LIFE'
  }
  if (teks == 'anime') tags = {
    anime: 'ANIME'
  }
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let user = global.db.data.users[m.sender];
    let curr = user.exp - min
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let waktu = moment.tz('Asia/Jakarta').format('HH:mm');
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let ucap = ucapan()
    let module = package.module
    let totalreg = Object.keys(global.db.data.users).length
    let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Powered by : AxellDragneel"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
    };     
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let group = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let isPremium = user.premium ? "Premium" : "Free User"
    let lim = user.premium ? '∞' : user.limit;
    let leve = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; 
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/9ee1cfa010df2cff8badf.jpg");
    let today = new Date();
    let tanggal = today.toLocaleDateString("id-ID", { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
      })
    let day = today.toLocaleDateString("id-ID", { weekday: "long" });
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let capt = `ʜᴇʟʟᴏ, @${m.sender.replace(/@.+/g, '')} 🪸\n`
      capt += `I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.\n\n`
      capt += ` –   *OWNER INFORMATION*\n`
      capt += `┌  ◦ Name : Kemii\n`
      capt += `│  ◦ Age : 2 Month\n`
      capt += `│  ◦ Github : dcode-kemii\n`
      capt += `└  ◦ Facebook : lennaa.houkii\n\n`
      capt += ` –   *BOT INFORMATION*\n`
      capt += `┌  ◦ Database : Mongodb\n`
      capt += `│  ◦ Library : ${module}\n`
      capt += `│  ◦ Author : ${global.author}\n`
      capt += `└  ◦ Source : dcode-kemii/kiku\n\n`
      capt += ` –   *BOT LIST MENU*\n`      
      capt += `┌  ◦  ${_p + command} main\n`
      capt += `│  ◦  ${_p + command} all\n`
      capt += `│  ◦  ${_p + command} info\n`
      capt += `│  ◦  ${_p + command} downloader\n`
      capt += `│  ◦  ${_p + command} ai\n`
      capt += `│  ◦  ${_p + command} genshin\n`
      capt += `│  ◦  ${_p + command} diffusion\n`
      capt += `│  ◦  ${_p + command} convert\n`
      capt += `│  ◦  ${_p + command} premium\n`
      capt += `│  ◦  ${_p + command} judi\n`
      capt += `│  ◦  ${_p + command} bug\n`
      capt += `│  ◦  ${_p + command} game\n`
      capt += `│  ◦  ${_p + command} fun\n`
      capt += `│  ◦  ${_p + command} music\n`
      capt += `│  ◦  ${_p + command} group\n`
      capt += `│  ◦  ${_p + command} giveaway\n`
      capt += `│  ◦  ${_p + command} quotes\n`
      capt += `│  ◦  ${_p + command} primbon\n`
      capt += `│  ◦  ${_p + command} atlantic\n`
      capt += `│  ◦  ${_p + command} smm\n`
      capt += `│  ◦  ${_p + command} store\n`
      capt += `│  ◦  ${_p + command} audio\n`
      capt += `│  ◦  ${_p + command} panel\n`
      capt += `│  ◦  ${_p + command} ssh\n`
      capt += `│  ◦  ${_p + command} jadibot\n`
      capt += `│  ◦  ${_p + command} internet\n`
      capt += `│  ◦  ${_p + command} search\n`
      capt += `│  ◦  ${_p + command} hengker\n`
      capt += `│  ◦  ${_p + command} islami\n`
      capt += `│  ◦  ${_p + command} ephoto\n`
      capt += `│  ◦  ${_p + command} textprome\n`
      capt += `│  ◦  ${_p + command} owner\n`
      capt += `│  ◦  ${_p + command} rpg\n`
      capt += `│  ◦  ${_p + command} simulator\n`
      capt += `│  ◦  ${_p + command} sticker\n`
      capt += `│  ◦  ${_p + command} anonymous\n`
      capt += `│  ◦  ${_p + command} tools\n`
      capt += `│  ◦  ${_p + command} anime\n`
      capt += `└  ◦  ${_p + command} nsfw\n\n`
      capt += `ᴋɪᴋᴜ - ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛᴀᴋᴀꜱʜɪ ᴋᴇᴍɪɪ`
      conn.menubot = conn.menubot ? conn.menubot : {
      id: 1
      }
      if (conn.menubot.id === 1) {
      let tekss = 'ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ (ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ, sᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛsᴀᴘᴘ.\n\n'
      tekss += '◦ *ɴᴀᴍᴇ ʙᴏᴛ* :' + ` ᴘᴏᴋɪɪ\n`
      tekss += '◦ *ᴜᴘᴛɪᴍᴇ* :' + ` ${uptime}\n`
      tekss += '◦ *ᴅᴀᴛᴇ* :' + ` ${tanggal}\n`
      tekss += '◦ *ᴘᴇɴɢɢᴜɴᴀ* :' + ` ${totalreg} ᴜsᴇʀs\n`
      tekss += '◦ *ɢʀᴏᴜᴘs* :' + ` ${group.length} ɢʀᴏᴜᴘs\n`
      tekss += '◦ *ᴘʟᴀᴛғᴏʀᴍ* :' + ` ${platform}\n`
      tekss += '◦ *ᴍᴇᴍᴏʀʏ* :' + ` ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}\n\n`
      tekss += '> ɪғ ʏᴏᴜ ғɪɴᴅ ᴀ ʙᴜɢ ᴏʀ ᴡᴀɴᴛ ᴛᴏ ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ, ᴘʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪsᴛᴇᴅ ᴏɴ ᴛʜᴇ ʙᴏᴛ'
      let sections = [{
		title: 'Artificial Intelligence ( Ai )', 
		highlight_label: 'Populer Plugins',
		rows: [{
	    title: 'Chat Bot',
    	description: `Automatic Chat Bot ( Chat Ai )`, 
    	id: '.listcai'
    	},
    	{
		title: 'Openai', 
		description: "Chat Openai Command ( Chat Ai )", 
		id: '.ai'
		},
		{
		title: 'Gemini Ai', 
		description: "Chat Ai Gemini Google ( Chat Ai )", 
		id: '.gemini'
		},
		{
		title: 'Alicia Ai', 
		description: "Chat Ai with Alicia ( Chat Ai )", 
		id: '.alicia'
		},
		{
		title: 'Bard Ai', 
		description: "Chat Ai Bard.com ( Chat Ai )", 
		id: '.bard'
		},
		{
		title: 'Bing Image',
		description: "Create image use prompt ( Image Ai )", 
		id: '.create'
		},
		{
		title: 'Dall-E 3', 
		description: "Create image use prompt ( Image Ai )", 
		id: '.dalle3'
	    }]
	    }, 
    	{
	    title: 'Populer Menu ( List Menu )', 
		highlight_label: 'Populer Plugins',
		rows: [{
	    title: 'Download Feature',
    	description: `Displays menu Download ( List Menu )`, 
    	id: '.menu downloader'
    	},
    	{
		title: 'Rpg Feature', 
		description: "Displays menu Rpg ( List Menu )", 
		id: '.menu rpg'
		},
		{
		title: 'Ai Feature', 
		description: "Displays menu Ai ( List Menu )", 
		id: '.menu ai'
		},
		{
		title: 'Game Feature', 
		description: "Displays menu Game ( List Menu )", 
		id: '.menu game'
		},
		{
		title: 'Music Feature', 
		description: "Displays menu Music ( List Menu )", 
		id: '.menu music'
	    }]
	    },
	    {
	    title: 'System Information ( info )', 
		highlight_label: 'Populer Plugins',
		rows: [{
	    title: 'Creator Bot',
    	description: `Bot owner info, who created it ( information )`, 
    	id: '.owner'
    	},
    	{
		title: 'Info System', 
		description: "Viewing System Info on Bot ( information )", 
		id: '.botstatus'
		},
		{
		title: 'Info Menu', 
		description: "Viewing menulist on Bot ( information )", 
		id: '.menulist'
		},
		{
		title: 'Script Info', 
		description: "Source Code Bot WhatsApp Info ( information )", 
		id: '.sc'
		},
		{
		title: 'Donate Info', 
		description: "Donate to Support Bot ( information )", 
		id: '.donate'
	    }]
     }]

let listMessage = {
    title: 'List Menu', 
    sections
};
//throw listMessage.sections[0].rows
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
        contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363288101737637@newsletter',
			newsletterName: 'Powered By Axell', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
            externalAdReply: {  
                title: 'AXELLDRAGNEEL', 
                thumbnailUrl: 'https://telegra.ph/file/9ee1cfa010df2cff8badf.jpg', 
                sourceUrl: '',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: tekss
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Powered By _WhatsApp_'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `*Hello, @${m.sender.replace(/@.+/g, '')}!*`,
            subtitle: "Axell",
            hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/9ee1cfa010df2cff8badf.jpg' } }, { upload: conn.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [              
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage) 
              },
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
      } else if (conn.menubot.id === 2) {
      await conn.reply(m.chat, 
      capt,
      m)           
      } else if (conn.menubot.id === 3) {
      await conn.sendMessage(m.chat, {
      text: Styles(capt), 
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true,
      title: namebot,
      thumbnailUrl: ppUrl,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      } else if (conn.menubot.id === 4) {
      let call = {
      scheduledCallCreationMessage: {
      callType: 2,
      scheduledTimestampMs:  Date.now(),
      title: capt
      }}
      await conn.relayMessage(m.chat, call, {})
      } else if (conn.menubot.id === 5) {
      await conn.relayMessage(m.chat, {
      requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: fsizedoc,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: capt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }
      }
      }
      }
      }
      }, {}); 
      } else if (conn.menubot.id === 6) {
      await conn.sendMessage(m.chat, {
      video: {
      url: 'https://telegra.ph/file/189063186f8e8478f1f05.mp4'
      },
      caption: capt,
      gifPlayback: true,
      gifAttribution: 1,
      contextInfo: {
      mentionedJid: [m.sender]
      }}, {quoted: m})
      } else if (conn.menubot.id === 7) {
      const dataBuffer = await new canvafy.Rank()
      .setAvatar(ppUrl)
      .setBackground("image", "https://telegra.ph/file/98225485a33fc4a5b47b2.jpg")
      .setUsername(`${name}`)
      .setBorder("#fff")
      .setRank(level, "LEVEL")
      .setRankColor({text:"#fff",number:"#fff"})
      .setCurrentXp(curr, color = "#000")
      .setRequiredXp(exp, color = "#000")
      .build();
      conn.sendMessage(m.chat, {
      document: {
      url: "https://wa.me/"
      },
      mimetype: minety, 
      pageCount: 2024,
      fileName: `Selamat ${ucap} ${name}`,
      fileLength: 100000000000000,
      jpegThumbnail: await conn.resize(dataBuffer, 300, 100),
      caption: Styles(capt),
      contextInfo: {
      mentionedJid: [m.sender],      
      isForwarded: true,      
      businessMessageForwardInfo: { businessOwnerJid: '6288980870067@s.whatsapp.net' }, 
      forwardedNewsletterMessageInfo: {
      newsletterJid: '120363233854307054@newsletter',
      newsletterName: 'Powered by : AxellDragneel',
      serverMessageId: -1
      },      
      forwardingScore: 2023,      
      }}, { quoted: fkontak })
      }
      return
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p,
      uptime,
      muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level,
      limit,
      name,
      weton,
      week,
      date,
      dateIslamic,
      time,
      module,
      totalreg,
      rtotalreg,
      role
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.reply(m.chat, Styles(text).trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^(menu|help|menunya|menuall|allmenu)$/i

handler.register = false;
handler.limit = true;
handler.register = true
handler.private = false

module.exports = handler;

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "Malam";
    if (time >= 4) {
        res = "Pagi";
    }
    if (time > 10) {
        res = "Siang";
    }
    if (time >= 15) {
        res = "Sore";
    }
    if (time >= 18) {
        res = "Malam";
    }
    return res;
}