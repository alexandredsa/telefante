class Chapter {
    constructor() {
        this.pages = [];
    }

    addPage(page) {
        this.pages.push(page);
    }

    getPages() {
        return this.pages;
    }
}

module.exports = Chapter;