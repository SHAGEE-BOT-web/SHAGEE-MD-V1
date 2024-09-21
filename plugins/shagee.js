const {cmd , commands} = require('../command')

cmd({
    pattern: "shagee",
    desc: "wallpaper the bot",
    category: "main",
    react: "☠",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY SHAGEE WALLPAPER 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
