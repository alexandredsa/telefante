const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        enum: ['TITLE', 'IMAGE']
    },
    author: {
        type: String,
        required: true,
    }
});

const ChapterSchema = mongoose.Schema({
    pages: [PageSchema],
});

const BookSchema = mongoose.Schema(
    {
        chapters: [ChapterSchema],
    }
);

const BookModel = mongoose.model('Book', BookSchema);
module.exports = BookModel;