const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    client.user.setPresence({
      status: 'dnd',
      game: { 
         type: 0,
         name: 'Surprise Mother Fucker :) ',
         details: `I'm : KBOOSH - Developer and Programmer`,
         url: 'http://twitch.tv/Streammingg',
         state: `Åäú áóãú ÊóÌöÏ áßú ÍÂÞÏú ÅÚáãú Ãäúß ÅäÓÂä ÝÂÔöáú`,
        application_id: '281376075802476544',
         assets: {
            small_image: `366835431037337600`,
            small_text: ' Take This ! ' ,
            large_image: `370451271133429760`,
            large_text: `??? FOREVER ?` }
    
      }
        });
    });
    

client.login("process.env.BOT_TOKEN");
