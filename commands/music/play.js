const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['Plays a song.'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
if (!args[0]) return message.channel.send(`${message.author}, Error you didn't justify what song you wanted to play.`);

        const res = await client.player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, Error There aren't any results regarding that.`);

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await client.player.deleteQueue(message.guild.id);
            return message.channel.send(`${message.author}, Error something happened while trying to join the voice channel.`);
        }
        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);
        if (!queue.playing) await queue.play();
    },
};