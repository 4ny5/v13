module.exports = {
    name: 'clear',
    aliases: ['Clears the queue.'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Error there's nothing in the queue to clear.`);

        await queue.clear();

        message.channel.send(`The queue has successfully been cleared. 🗑️`);
    },
};