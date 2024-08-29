const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_MSG:  process.env.ALIVE_IMG || "https://telegra.ph/file/ec57b757c3c5890d510c3.jpg",
ALIVE_MSG:  process.env.ALIVE_MSG || "> ⭕𝗛𝗘𝗟𝗟𝗢 𝗕𝗨𝗗𝗗𝗬 𝗜'𝗺 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪
> ⭕𝗧𝗬𝗣𝗘 .𝗠𝗘𝗡𝗨 𝗔𝗟𝗟 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧
> σɯɳҽɾ ɳυɱႦҽɾ- 94717518710
> 𝐒𝐇𝐀𝐆𝐄𝐄-𝐌𝐃 𝐕1",
};
