class Book {
    constructor() {
        this.chapters = [];
    }

    addChapter(chapter) {
        this.chapters.push(chapter);
    }
}

module.exports = Book;