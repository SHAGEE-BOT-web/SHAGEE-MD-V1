

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AOdwVT4R#G0h7_4IqxaMhxWcwEW_dCSy6iZn8MvMPlmcAifvFVhk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ec57b757c3c5890d510c3.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi SHAGEE-MD Is Online Now 💻\n*💻 Owner* - SHAGEE-MD\n\n*💻 Owner Number* -94710136994",
SUDO_NB: process.env.SUDO_NB || "94710136994",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true",
MONGODB: process.env.MONGODB || "enter mongodb here",
};
