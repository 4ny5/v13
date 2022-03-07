const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['Shows the queue.'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Error the queue needs at least 2 songs to display.`);

        const embed = new MessageEmbed();
        const methods = ['🔁', '🔂'];

        embed.setColor('#36393F')
        embed.setTitle(`Queue ${methods[queue.repeatMode]}`);

        const tracks = queue.tracks.map((track, i) => `**${i + 1} )** - ${track.title} | ${track.author} (Requested by <@${track. requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `And **${songs - 5}** Other Songs` : `There are **${songs}** Song waiting in the Queue.`;

        embed.setDescription(`**Now Playing:** *\`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs }*`);
        message.channel.send({ embeds: [embed] });
    },
};