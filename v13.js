const { Player } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
let client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
})

client.on('', () => {
})

client.config = require('./settings/botconfigs');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};

readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${command.name} Has Successfully Loaded`);
        client.commands.set(command.name, command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});

player.on('trackAdd', (queue, track) => {
    const embed = new MessageEmbed();
    embed.setDescription(`**${track.title}** Has Been added to the playlist.`)
    embed.setColor('#36393F')
    queue.metadata.send({ embeds: [embed] });
});

player.on('botDisconnect', (queue) => {
    const embed = new MessageEmbed();
    embed.setTitle('Error, got disconnected from the voice channel.')
    embed.setColor('#36393F')
    queue.metadata.send({ embeds: [embed] });
});

player.on('channelEmpty', (queue) => {
    const embed = new MessageEmbed();
    embed.setTitle("I've left the voice channel, Becuase no one was currently inside of it.")
    embed.setColor('#36393F')
    queue.metadata.send({ embeds: [embed] });
});

if(client.config.TOKEN){
client.login(client.config.TOKEN).catch(e => {
console.log("Your Bot's INTENTS Are OFF!")
})
} else {
console.log("Invalid Bot Token")
}