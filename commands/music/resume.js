module.exports = {
    name: 'resume',
    aliases: ['Resumes the song.'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author}, Error There's no song playing.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, The song continues to play.` : `${message.author}, Error something unexpected went wrong?`);
    },
};