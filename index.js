const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('message', async message => {
    if (!message.guild) return;

    if (message.content === 'we love you izumi') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        } else {
            message.reply('saang vc ako tatambay?')
        }
    }
})

// client.login(process.env.IZUMI_TOKEN)
client.login(config.token)
