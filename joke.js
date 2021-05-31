const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "joke",
    description: "Tell you a joke",
    usage: "",
    aliases: ["PussyTalk"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    let embed = new MessageEmbed()
      .setAuthor(client.user.username, "https://media1.giphy.com/media/iEbKezemczoC9Tim6P/giphy.gif?cid=790b761170329b4bc7c68f8b18854d014a43676055cbb5d0&rid=giphy.gif&ct=g")
      .setImage("https://www.srugim.co.il/wp-content/uploads/2019/10/%D7%A8%D7%90%D7%A9-%D7%94%D7%A9%D7%A0%D7%94-%D7%91%D7%A8%D7%A9%D7%AA-19-640x391.jpg")
      .setColor("#004077")

    if (!args[0]) return message.channel.send(embed)
    else {
      if (!command) return message.channel.send("Unknown Command")
     
    }
  }
}
