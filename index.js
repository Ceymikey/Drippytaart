/*
Created With char-mod-mail Package.
Created By Odd Coder.
Odd Coder Discord: https://discord.gg/7KtdeePrHV
Odd Coder Youtube: https://www.youtube.com/channel/UCwsiWQMSomXFjWWpRQbc35A
Thanks for using our coded bot.
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.on('ready', () => {
 client.user.setActivity('DM me | For Staff Support', { type: 'PLAYING' })
})

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 4005
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "960642052947857491", //put your guild id here
  categoryID: "1036710148841930873", //put your category id here
  staffRole: "960649824238190642", //put your staff role id here
  embedColor: "PURPLE", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Confirmed | Mod mail has been closed down",
  closedMessage: "A Staff Member has closed your Modmail.",
  staffOpenedTitle: "Someone opened a Mod Mail",
  staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
  userOpenedTitle: "Moderator message send succesfully",
  userOpenedMessage: "Hey there. Thank you for reaching out for the CeysCrew moderation team. The Crew or moderators will reach out for you as soon as they are available.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});