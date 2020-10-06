const Book = require("./Book");

class Game {
    constructor({ members }) {
        this._members = members;
        this._isRunning = false;
        this._book = new Book();
    }

    start({ msg }) {
        this._isRunning = true;
    }
}

module.exports = Game;