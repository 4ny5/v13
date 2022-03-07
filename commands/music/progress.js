const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'progress',
    aliases: ['Shows you progress of the song.'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const embed = new MessageEmbed();
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        const track = queue.current;
        const methods = ['Disabled', 'Enabled'];


        if (timestamp.progress == 'Infinity') return message.channel.send(`Error, This song is a live stream no progress to display.`);
        embed.setTitle(`${track.title} - by ${queue.current.author}`)
        embed.setDescription(`${progress} { **${timestamp.progress}**% } \n*Requested* - **${track.requestedBy}** | *Audio Volume* - **%${queue.volume}** | *Loop* - **${methods[queue.repeatMode]}**`)
        embed.setThumbnail(track.thumbnail);
        embed.setColor('#36393F')
        message.channel.send({ embeds: [embed] });
    },
};