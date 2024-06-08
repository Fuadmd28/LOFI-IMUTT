let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Owner
global.owner = [
  ['6282147781510'],
  ['6282147781510'],
  ['6282147781510', 'Axell Dragneel', 'axellxyzz@gmail.com', true]
] // Put your number here
global.mods = ['6282147781510'] // Moderator
global.prems = ['6282147781510'] // Premium
global.rose = 'yaU7nZmhh1tFirAE07TvJRl0yGD459jKF0EGKsvYCh7o1Jr9ojy3Zr3XlmB3mkro';
global.xyro = 'ClaraKeyOfficial';
global.btc = 'Rizalzllk';
global.xzn = 'katz';
global.lolkey = 'base-dumes';
global.yanz = 'Fardankey';
global.alya = 'AxellDev';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    yanz: 'https://api.yanzbotz.my.id',
    xfarr: 'https://api.xfarr.com',
    alya: 'https://api.alyachan.dev',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.rest',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.yanzbotz.my.id': 'Fardankey',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'Gata_Dios',
    'https://api.itsrose.rest': 'yaU7nZmhh1tFirAE07TvJRl0yGD459jKF0EGKsvYCh7o1Jr9ojy3Zr3XlmB3mkro',
    'https://skizo.tech': 'katz',
}

global.set = {
  bot: 'Poki - Kawai',
  wm: `© Poki - Kawai v3.0.0`,
  footer: 'sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀxᴇʟʟʏᴢ',
  version: `3.0.0`,
  packname: 'Sticker By',
  author: 'Poki - Kawai'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Poki - Kawai'
  var sticker_author = 'Axell Dragneel'
} else {
  var sticker_name = 'Poki - Kawai'
  var sticker_author = 'Axell Dragneel'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'salsa'
global.gcbot = 'https://chat.whatsapp.com/BrsXR4ZheCn8WcFcWSzbMM'
global.instagram = 'https://instagram.com/ldvcaaa_'
global.namebot = '© Poki - Kawai v5.0.3 (Public Bot)'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'

global.qris = 'https://telegra.ph/file/bcb93fafb22f139ff1512.jpg'
global.email = 'axellxyzz@gmail.com'
global.creator = "6288289338073@s.whatsapp.net"
global.nomorbot = '6285828383506'
global.nomorown = '6288289338073'

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = 'https://veyyyzdzz.panellprivate.my.id' // Domain Web
global.apikey = 'ptla_Jr4Thc9i6pg7ncHktjkplSrujMSzBilVdA4deV7JN5D' // Key PTLA
global.c_apikey = 'ptlc_nWaVwvaQMCtdhqDfG7KgvILkiG9LuFEquF7E1XSUQdq' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Atlantic Pedia Api
global.atlaapi = 'jiKgbG6XBgU3E0zL0UjeXdELK5ExfzDycILGo5JWQYwITQ0UAZCoNZFd1MAOC2OY1I5qBFRdSV4wHzTUZl19e6T7IZF5ciLHn1MK'

// Medan Pedia Api
global.medan = ''
global.medanid = ''

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/BrsXR4ZheCn8WcFcWSzbMM'
global.swa = 'https://wa.me/6288289338073'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'Poki - Kawai'
global.author = 'Axell'
global.wm = '© Poki.js'
global.wm2 = 'Axell Javanese'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Status Request :```' + ' `Succes`'
global.packname = 'Poki - Kawai'
global.author = 'Axell'
global.nameown = 'AxellDragneel'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '───「' // Hiasan kiri
global.htka = '」──' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//