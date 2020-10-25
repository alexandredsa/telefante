const Book = require("./Book");
const Chapter = require('./Chapter');
const Page = require('./Page');
const { CONTENT_TYPES } = require('../commons/constants');
const _ = require('lodash');
const BookModel = require('./models/BookModel');
const MessageRequest = require('./MessageRequest');

class Game {
    constructor({ members }) {
        this._members = members;
        this._isRunning = false;
        this._book = new Book();
    }

    async start() {
        const messageRequests = [];
        const { IMAGE, TEXT } = CONTENT_TYPES;
        this._members.forEach(member => {
            const chapter = new Chapter();
            const contentType = _.random(0, 1) === 1 ? IMAGE : TEXT;
            chapter.addPage(new Page(contentType, member));
            this._book.addChapter(chapter);
            const message = contentType === TEXT ? 'Digite um título' : 'Envie um desenho';
            messageRequests.push(new MessageRequest(member, message));
        });
        this._isRunning = true;
        this._book = await new BookModel(this._book).save();
        return messageRequests;
    }
}

module.exports = Game;