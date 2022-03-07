module.exports = {
    TOKEN: 'Place your token here',
    px: '-',

opt: {
    DJ: {
        enabled: false,
        roleName: 'DJ', 
        commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']
    },
    maxVol: 250,
    loopMessage: false, 
    discordPlayer: {
        ytdlOptions: {
            quality: 'highestaudio',
            highWaterMark: 1 << 25
        }
    }
}
};