require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Conquest Bot is ready!')
})

client.login(process.env.BOT_TOKEN)

client.on('message', msg => {

    if (msg.content.substring(0, 1) === '!') {
        var args = msg.content.substring(1).split(' ')
        var cmd = args[0]

        args = args.splice(1)
        switch(cmd) {
            case 'installMod1.15':
                msg.channel.send( 
                'Install Process for Conquest Reforged 1.15.2 Alpha:\n' +
                '1. download and install Forge 1.15.2 Latest (https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html)\n' +
                '2. Launch the game using your forge profile (regular minecraft launcher)\n' +
                '3. drop the Alpha .jar in there\n' +
                '4. download optifine 1.15.2 preview version and drop it into that mods folder\n' +
                '5. download and install conquest reforged resourcepack\n' +
                '6. allocate +6gb ram to your forge launcher profile\n'
                )
        }
    }
})