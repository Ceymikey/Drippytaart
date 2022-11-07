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
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(4005, () =>
console.log(`Your app is listening a http://localhost`)
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
  closedTitle: "Information Confirmed | Mod mail has been closed",
  closedMessage: "A Staff Member has closed your Modmail. The Modmail Information has been saved.",
  staffOpenedTitle: "Someone opened a Mod Mail",
  staffOpenedMessage: "This user opened a modmail and is now in the queue to get a reply from the staff.",
  userOpenedTitle: "Moderator message send succesfully",
  userOpenedMessage: "Hey there. Thank you for reaching out for the CeysCrew moderation team. The Crew and moderators will reach out to you as soon as they are available.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
