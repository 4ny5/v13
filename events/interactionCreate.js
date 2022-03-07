module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `No music currently playing.`, ephemeral: true, components: [] });

            int.member.send(`**Track Saved: \`${queue.current.title}\` | Posted by \`${queue.current.author}\`, Saved Server: \`${int.member.guild.name}\`**`).then(() => {
                return int.reply({ content: `I sent the name of the music via private message`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: ` Unable to send you a private message open your dms`, ephemeral: true, components: [] });
            });
        }
    }
};