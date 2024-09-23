const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://unitedcamps.in/Images/file_2135.jpg' },
    { key: 'ALIVE_MSG', value: '||```HEY DEAR I AM ALIVE NOW...💀❗``` || \n\n`🪄🛠️OUR WHATSAPP CHANEL ;`\n\n_https://whatsapp.com/channel/0029VaivwGS96H4baEiYFE1s_🤖🇱🇰_\n\n`|| *🪄🛠️OUR YOUTUBE CHANEL ;`\n\nhttps://youtube.com/@dasaamodz?si=RtIun0tWKTIofm0k_🤖🇱🇰_ \n\n`||🪄🛠️BOT OWNER NUMBER ;`\n\n94776005813 🤖🇱🇰\n\n || `°°Powered By PODI DASSA MD°°`' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
