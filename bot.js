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
                '**Install Process for Conquest Reforged 1.15.2 Alpha:**\n\n' +

                '1. Run Minecraft 1.15.2 at least once\n\n' +

                '2. Download and install Forge 1.15.2 "Latest" (https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html)\n\n' +

                '3. Open the Minecraft launcher. Click "Installations" around the top left. Click "New" which is just below "Installations". Put in any name you want.' + 
                'For versions, click on the drop down and select the version of forge you just installed (eg: `release 1.15.2-forge-31-2-47`).' +
                ' You\'ll also want to hit "MORE OPTIONS", scroll down, and change the Java arguments to allocate more RAM to the game entering, say, `-Xmx8G`.' +
                ' You can change the number in this argument to allocate more or less gigabytes of RAM to the game. *6G is the recommended minimum.* Finally, hit create, and try launching your new installation which should now accessible through the "Play" menu\'s drop down selection on bottom left.\n' +
                '4. Download the "Alpha" .jar file from the respective link in the <#663934871202430976> channel.\n\n' +

                '5. Download Optifine 1.15.2 preview version (https://optifine.net/adloadx?f=preview_OptiFine_1.15.2_HD_U_G5_pre1.jar).\n\n' +

                '6. Navigate to your folder at `C:\\Users\\<user-name>\\AppData\\Roaming\\.minecraft\\mods` and drop the Alpha .jar file and the Optifine file into it.\n\n' +

                '7. Download the Conquest Reforged Resourcepack from the "AlphaRP" link in <#663934871202430976>. Drop it into your folder at `C:\\Users\\<user-name>\\AppData\\Roaming\\.minecraft\\resourcepacks` You\'ll have to enable the resourcepack once the game has launched and enable connected textures in Video Options.\n\n\n' +

                
                'You\'re done! If a screen comes up showing you\'re missing dependencies, you may have installed Optifine incorrectly, or you just need to enable the resourcepack after continuing past this screen.'
                
                )
            case 'createServer':
                msg.channel.send(
                    '**How to set up a server using Conquest Reforged server:**\n\n' +

                    'If you are renting a server from a Minecraft server host, you may want to consult their documentation for getting set up. Also, Minecraft Realms do not work with mods.' +
                    '1. You need a working Forge server installation (https://minecraft.gamepedia.com/Tutorials/Setting_up_a_Minecraft_Forge_server)\n\n' +

                    '2. You\'ll need to add the Conquest Reforged mod jar file to your server\'s mods folder *NB: Do not use the Conquest Reforged launcher jar file for this!*\n\n' +

                    '3. Ensure you\'re running your server with Forge and the correct Conquest Reforged jar. If not, you will see missing blocks in-game, no modded blocks in your creative inventory, and so on'
                )
            case 'CTM':
                msg.channel.send(
                    '**Why are my Connected Textures (oftened called CTM) not working?**\n\n' +

                    'There are a few possible reasons: \n' +
                    '```1. You haven\'t installed and enabled the Conquest Reforged resourcepack. If you have installed a resourcepack, you may have installed the Vanilla Conquest resourcepack. Conquest Reforged and Vanilla Conquest are two very different things!```\n' +
                    '```2. You haven\'t enabled Connected Textures by setting them to "Fancy" in the video settings.```\n' +
                    '```3. If you\'re running Minecraft 1.12.2 and have added or removed other block-adding mods, there will no longer be parity between the order in which your game sets each block\'s ID and the order in which your world-save\'s IDs have been set.' +
                    'If you must continue with your existing world, you can try pressing "f3 + t" to reload textures and CTM. If that doesn\'t work, the best option is to start a fresh world with all the block-adding mods you intend on using.' + 
                    '*NB: The Conquest Reforged 1.12.2-1.15.2 converter, out of the box, will not support converting the blocks of other mods or in some cases worlds that have added other block-adding mods.```\n' +
                    'Please note that block transition textures from Vanilla Conquest are not implemented in Conquest Reforged. They are buggy and will only be implemented in later versions of the mod as needed.\n' +
                    'Conquest Reforged resourcepack download: https://www.curseforge.com/minecraft/texture-packs/conquest-reforged-resource-pack'
                )
            case 'help':
                msg.channel.send('``!installMod1.15`` ``!createServer`` ``!CTM``')
        }
    }
})