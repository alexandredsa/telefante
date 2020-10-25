const { PAGE_STATUS } = require('../commons/constants');

class Page {
    constructor(contentType, author) {
        this.contentType = contentType;
        this.author = author;
        this.status = PAGE_STATUS.PENDING;
        this.content = null;
    }

    setContent(content) {
        this.content = content;
        this.status = PAGE_STATUS.DELIVERED;
    }
}

module.exports = Page;