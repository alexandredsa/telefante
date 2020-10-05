require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const { connect } = require('./commons/database');
const Book = require('./domains/Book');
const Page = require('./domains/Page');
const Chapter = require('./domains/Chapter');
const BookModel = require('./domains/models/BookModel');

const { DISCORD_TOKEN, MONGO_URI } = process.env;

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    await connect(MONGO_URI);
    await createBook();
});

client.on('message', async msg => {
    const me = client.users.get('515715585846542339');
    await me.send('sss');
    //  msg.guild.members.client.users Map
    // msg.attachments Map
});

const createBook = async () => {
    const chapterA = new Chapter();
    chapterA.addPage(new Page("teste", "TITLE", "alexandredsa")); 
    chapterA.addPage(new Page("teste2", "TITLE", "fabiofinatti")); 
    const book = new Book();
    book.addChapter(chapterA);
    const bookModel = new BookModel(book);
    await bookModel.save();
};



client.login(DISCORD_TOKEN);

