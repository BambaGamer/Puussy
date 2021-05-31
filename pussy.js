const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "Pussy",
    description: "Pussy Pic",
    usage: "",
    aliases: ["Pussy Bot"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    let embed = new MessageEmbed()
      message.channel.send("https://i.pinimg.com/564x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg")
      .setColor("#C90D06")
      .setDescription(Pussy)

    if (!args[0]) return message.channel.send(embed)
    else {
      if (!command) return message.channel.send("Unknown Command")
     
    }
  }
}