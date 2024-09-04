const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_MSG:  process.env.ALIVE_IMG || "https://telegra.ph/file/ec57b757c3c5890d510c3.jpg",
ALIVE_MSG:  process.env.ALIVE_MSG || "> ⭕𝗛𝗘𝗟𝗟𝗢 𝗕𝗨𝗗𝗗𝗬 𝐒𝐇𝐀𝐆𝐄𝐄-𝐌𝐃 ,𝗜'𝗺 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪 ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE:process.env.MODE || "public",
};
