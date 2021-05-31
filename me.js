const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "me",
    description: "To Shows your profile",
    usage: "",
    aliases: ["profile pic"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    let embed = new MessageEmbed()
      .setAuthor(message.author.username + "'s profile ") 
      .setImage("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg")
      .setTimestamp(new Date())
      .setColor("#4286f4")
      .addField("Username :", `${message.author.username}`, inline = true)
      .addField("Role :", "Admin" , inline = true);

    if (!args[0]) return message.channel.send(embed)
    else {
      if (!command) return message.channel.send("Unknown Command")
     
    }
  }
}