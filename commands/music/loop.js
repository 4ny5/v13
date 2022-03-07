const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['Loops the song.'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, You should disable loop mode **(${client.config.px}loop)** `);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.sen(success ? `Loop: **${queue.repeatMode === 0 ? 'Disabled 🔁' : 'Enabled 🔂'}** ` : `${message.author}, Error something went unexpected went wrong.`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, In Loop mode you must disable before next queue **(${client.config.px}loop queue)**`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop: **${queue.repeatMode === 0 ? 'Disabled 🔁' : 'Enabled 🔂'}** ` : `${message.author}, Error something went unexpected went wrong.`);
};
    },
};