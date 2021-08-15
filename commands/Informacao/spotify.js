module.exports.run = async ({ client, message, channel, args}) => {

    let usuario = message.mentions.users.first() || message.author
    
    if(usuario.presence.activities == "Spotify") {
    channel.startTyping()
    const spotifyInfo = message.author.presence.activities[0]
    const spotify = await client.utils.canvas.spotify({ spotifyInfo })
    channel.send(new client.utils.attach(spotify, 'spotify.png')).then(() => channel.stopTyping())
    }else {
        message.reply('Não esta escutando spotify!')
    }
}


exports.help = {
    name: "spotify",
    aliases: ['sp'],
    description: "Mostra informações da musica tocada no spotify",
    usage: "spotify (@user)"
};
