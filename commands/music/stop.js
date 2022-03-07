module.exports = {
    name: 'stop',
    aliases: ['Stops the song.'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing`);

        queue.destroy();

        message.channel.send(`The music successfully been stopped.`);
    },
};