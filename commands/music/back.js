module.exports = {
    name: 'back',
    aliases: ['Plays previous Song.'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Error sorry but there wasn't any music playing before.`);

        await queue.back();

        message.channel.send(`Previous Song started playing again.`);
    },
};