const express = require('express');

const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bem vindo humano');
});

app.listen(3000, () => console.log('connected the the services, please check the above for the following steps'));
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//when its ready log it
client.on("ready", ()=>console.log("READY"));
//define welcome "package"
const welcome = require("./welcome");
welcome(client);
//start the bot
client.login(config.TOKEN);


client.on("ready", () => {
    console.log(`${client.user.tag} Está pronto.`)
    const server = client.voice.connections.size
    client.user.setActivity({ type: "WATCHING", name: `Humanos Entrar no Clã, Bem vindo Humano!` })
})
//NOTE:
/*
THis is the config.json File

"TOKEN"           ... is your Bot token
"CHANNEL_WELCOME" ... is the Channel ID of your welcome channel
"ROLES_WELCOME"   ... are all of the Role IDs you wanna add to the user when he joins the server, it must be an array and can be unlimited!

{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/