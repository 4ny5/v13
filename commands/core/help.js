const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        const commands = client.commands.filter(x => x.showHelp !== false);


        embed.setColor('#36393F')
        embed.setTitle(`${commands.size} Available Commands`)
        embed.setDescription(commands.map(x => `**{ ${x.name} }** - *${x.aliases}*`).join('\n '));
    
        message.channel.send({ embeds: [embed] });
    },
};