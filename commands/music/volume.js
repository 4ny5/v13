const maxVol = require("../../settings/botconfigs").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['Adjust Volume.'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Current volume: **${queue.volume}** 🔊\n**pick a number between \`1\` & \`${maxVol} Max Volume\`**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, The volume you want to change is already the current volume 😔`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **pick a number between \`1\` & \`${maxVol}\`**`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume has been set to **${vol}** 🔊` : `${message.author}, Error something unexpected went wrong.`) ;
    },
};