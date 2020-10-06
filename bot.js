require('dotenv').config();
const { Client, DMChannel } = require('discord.js');
const client = new Client();
const { connect } = require('./commons/database');
const Book = require('./domains/Book');
const Page = require('./domains/Page');
const Chapter = require('./domains/Chapter');
const BookModel = require('./domains/models/BookModel');
const Game = require('./domains/Game');

const { DISCORD_TOKEN, MONGO_URI } = process.env;
const { getCommand } = require('./commands');
const { VALID_SCOPES } = require('./commands/constants');

const runningGames = {};

const BOT_PREFIXES = [".telefante", ".tf"];

const hasBotPrefix = (str = '') => {
    return !!BOT_PREFIXES.find(pf => str.toLowerCase().startsWith(pf));
};

const isDirectMessage = (msg) => {
    const { channel } = msg;
    return channel instanceof DMChannel;
};
const isBot = (msg) => msg.author.bot;

const removePrefix = (str = '') => {
    const prefix = BOT_PREFIXES.find(pf => str.toLowerCase().startsWith(pf));
    return str.replace(prefix, '').trim();
}


client.on('ready', async () => {
    await connect(MONGO_URI);
});

client.on('message', async msg => {
    const { content } = msg;
    if (isBot(msg)) {
        return;
    }

    const sanitizedContent = removePrefix(content);
    const cmd = getCommand(sanitizedContent);

    if (!cmd) {
        await msg.author.send('Foi mal, brother... Não entendi');
        return;
    }

    if (isDirectMessage(msg)) {
        if (!cmd.worksOn().includes(VALID_SCOPES.DM)) {
            await msg.author.send('Amigo.. Isso aqui é só no canal. Nem vem com intimidade.');
        }
    } else {
        if (!hasBotPrefix(content)) {
            return;
        }

        if (!cmd.worksOn().includes(VALID_SCOPES.CHANNEL)) {
            await msg.author.send('Amigo.. Isso aqui é só no pvt. Não começa.');
            return;
        }
        cmd.run({ msg });
        await msg.channel.send('chamou xamps?');
    }
    //  msg.guild.members.client.users Map
    // msg.attachments Map
});


client.login(DISCORD_TOKEN);

