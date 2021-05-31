const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "tate",
    description: "Send randomly picture of tate",
    usage: "",
    aliases: ["TateMcRae"]
  },
  
  run: async function(client, message, args) {
    var tate = "";

const messages = ["https://images.squarespace-cdn.com/content/v1/572731df1bbee0567229919e/1601465488762-6DB4BG5B9IJ0ZL7C8AXA/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/unnamed-42.jpg?format=1000w", "https://hips.hearstapps.com/vidthumb/images/2020-elle-song-association-tate-mcrae-kk-v2-ap-v2-fb-1616600159.jpg", "https://assets.popbuzz.com/2021/05/where-did-tate-mcrae-go-to-school-1612458832-view-0.jpg", "https://pbs.twimg.com/media/EfTx_BSXYAAiMP8.jpg","https://media.gq-magazine.co.uk/photos/5f7f2cd4e26769403e7cd103/master/pass/tate-mcrae-1.jpg","https://upload.wikimedia.org/wikipedia/commons/3/3d/Tate_McRae%2C_Berlin%2C_1st_February_2020_%28cropped%29.jpg","https://i1.wp.com/outnowmagazine.com/wp-content/uploads/2021/03/Tate-McRae.png?fit=1200%2C628&ssl=1","https://assets.popbuzz.com/2021/05/what-is-tate-mcraes-net-worth-1612459333-view-0.jpg","https://assets.popbuzz.com/2021/05/how-tall-is-tate-mcrae-1612458722-view-0.jpg","https://i.pinimg.com/564x/26/08/66/26086619b9e09c9ac03bfb022df4e167.jpg","https://i.pinimg.com/564x/38/50/2c/38502c0630ba6ee863ca589fd98d5df9.jpg","https://i.pinimg.com/564x/8a/2a/28/8a2a28aafef74c6752f06a1327d1a8fa.jpg"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

console.log(randomMessage)
message.channel.send(randomMessage);

  },
};