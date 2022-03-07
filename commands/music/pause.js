module.exports = {
    name: 'pause',
    aliases: ['Pauses the song.'],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error there's currently nothing playing.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `The Music **${queue.current.title}** has stopped.` : `${message.author}, Error something unexpected went wrong?`);
    },
};