const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "clear",
    description: "To clear messages",
    usage: "[amount]",
    aliases: ["cl", "c"]
  },

  run: async function(client, message, args) {
        var allcmds = "";

  let embed = new MessageEmbed()
  if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }
      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`Pussy cleared \`${_message.size}\` messages :broom:`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });

      }
    }
}