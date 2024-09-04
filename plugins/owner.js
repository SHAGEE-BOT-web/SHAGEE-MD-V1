const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: DINETH WISHMITHA*
*⚡ɴᴜᴍʙᴇʀ* -: 9477518710

*© SHAGEE-MD V1 by DINETH WISHMITHA*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
