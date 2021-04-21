client.on("message", msg => {

    if(msg.content === "server") {
    const embed = new Discord.MessageEmbed()
    .setColor("#01ffc2")
    .setThumbnail(msg.guild.iconURL())
    .setFooter("Created bY dedo lol")
    .addField("sunglassesOwnerSHip" , msg.guild.owner)
    .addField("sunglassesServer Region" , msg.guild.region)
    .addField("alarm_clockcreatedAT" , msg.guild.createdAt.toLocaleDateString())
    .addField("astonishedMembers" , msg.guild.memberCount)
    .setTitle("support server")
    .setImage("https://cdn.discordapp.com/attachments/748871717618843739/750038793125494815/tenor.gif")
    .setURL("https://discord.gg/KPyKuj")
    .addField("partnered Server? " ,msg.guild.partnered)
    .addField( "verified Server?" ,msg.guild.verified)
    .addField("AFK " , msg.guild.afkChannel)
    
    msg.channel.send(embed)
    
  
    }
  
        })
    
  
               }
  
                        })
                        
client.on('message', message => {
//ARBELE
if(message.content.includes("discord.gg")){
if(!message.member.hasPermission('ADMINISTRATOR')){
message.delete(); 
message.reply("‎!تكایه‌ ڕیكلام مه‌كه‌")
}
//ARBELE
}
//ARBELE
});   

client.login ("NzUwMzY3ODg2ODMyNTY2NDAy.X05gjQ.YlVV-XetvAhoYtE9vFCZlvnUNko")
