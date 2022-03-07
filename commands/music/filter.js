const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'filter',
    aliases: ['Fliters the song theme.'],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

   if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error there's no song playing.`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author} Pick one \`bassboost | 8D | nightcore\``);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author} Pick one \`bassboost | 8D | nightcore\``);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);
        const embed = new MessageEmbed();
        embed.setTitle(`**${filter} Has Been Applied**, Status: **${queue.getFiltersEnabled().includes(filter) ? 'Active 👍' : 'Inactive 👎'}**`)
        embed.setColor('#36393F')
        message.channel.send({ embeds: [embed] });
    },
};