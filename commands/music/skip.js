module.exports = {
    name: 'skip',
    aliases: ['Skips the song.'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, Has been Skipped` : `${message.author}, Error something unexpected went wrong?`);
    },
};