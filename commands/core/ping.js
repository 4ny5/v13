const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['Checks Bots Latency'],
    utilisation: '{prefix}ping',

    execute(client, message) {
        const embed = new MessageEmbed();
        embed.setColor('#36393F')
        embed.setTitle(`**latency - ${client.ws.ping}ms** 🛰️`)
        message.channel.send({ embeds: [embed] });
    },
};