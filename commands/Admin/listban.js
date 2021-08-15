const { MessageEmbed } = require("discord.js")
exports.run = async({ client, message, args, lang }) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.quote(lang.ban.perm);

    message.guild.fetchBans().then(banned => {
    let list = banned.map(user => user.user.tag).join('\n');
    var embed = new MessageEmbed().setTitle(`Lista de banidos:`).setDescription(list).setColor('RED').setTimestamp();
    message.channel.send(embed);
  })
  .catch(console.error);
}
exports.help = {
    name: "listban",
    aliases: ['listarban'],
    description: "Liste todos os banimentos do servidor.",
    usage: 'listban'
};
