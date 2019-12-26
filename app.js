const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

// Settings
var logToken = "YOURTOKEN"
var prefix = "!"

client.on("ready", () => {
  console.log(`\nBot has been ONLINE!\n>> Prefix: ${prefix}\n>> Servers: ${client.guilds.size}\n>> Founder: Vick`)
  client.user.setActivity(`Golden Ages [ESX]`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }

})

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', '📜добре-дошли');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | Име : ', `${member}`)
      .addField(':microphone2: | Добре дошъл!', `Приятно посрещане в server-a ни, ${member}`)
      .addField(':id: | Човек :', "**[" + `${member.id}` + "]**")
      .addField(':tada: | Ти си ', `${member.guild.memberCount} в server-a`)
      .addField("Име", `<@` + `${member.id}` + `>`, true)
      .setFooter(`${member.guild.name} @ All rights reserved`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {
  console.log(`${member}`, "влезе" + `${member.guild.name}`)
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', '📜довиждане');
  let channel = member.guild.channels.find('name', '📜довиждане');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Име:', `${member}`)
      .addField('Ни напусна', ';(')
      .addField('Чао Чао :(', 'Ще ни липсваш!')
      .addField('Общо Хора', `${member.guild.memberCount}` + " members")
      .setFooter(`**${member.guild.name}`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

client.on('guildMemberAdd', (guildMember) => {
  guildMember.addRole(guildMember.guild.roles.find(role => role.name === "[💑] Граждани"));
});


client.login(logToken);