const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
console.log('Bot Connected/Logged in.')
// logs when bot is connected.
client.user.setGame('Tutorial Bot')

});
client.on('message', (msg) => {
if (msg.content === '!ping')
msg.channel.send(`Pong ${message.author}!`)

if (msg.content === '!help')
var help = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('My commands!')
.setDescription('In Development!')
.addField('!ping', 'Pings user.')
.addField('!help', 'Sends a list of commands!')
msg.channel.send(help)



client.login(process.env.TOKEN)
