class Game {
    constructor({ client, members }) {
        this._client = client;
        this._members = members;
        this._isRunning = false;
        this._members = [];
        this._chapters = new Map();
    }

    start() {
        
    }

    askForChapterTitle() {

    }

    askForChapterDraw() {

    }

    deliveryChapterTitle() {

    }

    deliveryChapters() { }

    isRunning() {
        return this._isRunning;
    }
}

module.exports = Game;