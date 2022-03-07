const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'save',
    aliases: ['Saves the song.'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
        const track = queue.current;

  if (!queue || !queue.playing) return message.channel.send(`${message.author}, Error There's no song playing.`);

            const embed2 = new MessageEmbed();
            embed2.setTitle(`Saved Track: *"${queue.current.title}"* - by *"${queue.current.author}"* || Requested From: ${message.guild.name} ||`)
            embed2.setColor('#36393F')
            message.author.send({ embeds: [embed2] }).then(() => {

            const embed1 = new MessageEmbed();
            embed1.setTitle(`Success, Check dms / prviate messages. `)
            embed1.setColor('#36393F')
            message.channel.send({ embeds: [embed1] });
        }).catch(Error => {
            message.channel.send(`${message.author}, Erorr Unable to dm you please turn on your dms first!`);
        });
    },
};