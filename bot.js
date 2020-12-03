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
                'Install Process for Conquest Reforged 1.15.2 Alpha:\n\n' +
                '1. Run Minecraft 1.15.2 at least once\n' +
                '2. Download and install Forge 1.15.2 "Latest" (https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html)\n' +
                '3. Open the Minecraft launcher. Click "Installations" around the top left. Click "New" which is just below "Installations". Put in any name you want.' + 
                'For versions, click on the drop down and select the version of forge you just installed (eg: `release 1.15.2-forge-31-2-47`).' +
                ' You\'ll also want to hit "MORE OPTIONS", scroll down, and change the Java arguments to allocate more RAM to the game entering, say, `-Xmx8G`.' +
                ' You can change the number in this argument to allocate more or less gigabytes of RAM to the game. *6G is the recommended minimum.* Finally, hit create, and try launching your new installation which should now accessible through the "Play" menu\'s drop down selection on bottom left.\n' +
                '4. Download the "Alpha" .jar file from the respective link in the <#663934871202430976> channel.\n' +
                '5. Download Optifine 1.15.2 preview version (https://optifine.net/adloadx?f=preview_OptiFine_1.15.2_HD_U_G5_pre1.jar).\n' +
                '6. Navigate to your folder at `C:\\Users\\<user-name>\\AppData\\Roaming\\.minecraft\\mods` and drop the Alpha .jar file and the Optifine file into it.\n' +
                '7. Download the Conquest Reforged Resourcepack from the "AlphaRP" link in <#663934871202430976>. Drop it into your folder at `C:\\Users\\<user-name>\\AppData\\Roaming\\.minecraft\\resourcepacks` You\'ll have to enable the resourcepack once the game has launched and enable connected textures in Video Options.\n\n' +
                
                'You\'re done! If a screen comes up showing you\'re missing dependencies, you may have installed Optifine incorrectly, or you just need to enable the resourcepack after continuing past this screen.'
                
                )
            //case 'createServer'
        }
    }
})