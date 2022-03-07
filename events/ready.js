module.exports = async (client) => {
    console.log(`Success! Logged in as ${client.user.username}`);

    client.user.setPresence({
        status: "idle",
        activities: [{ name: 'Music' , type: 'LISTENING'}],
    });
};