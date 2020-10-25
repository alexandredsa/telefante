const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    content: {
        type: String,
    },
    contentType: {
        type: String,
        enum: ['TEXT', 'IMAGE']
    },
    author: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'DELIVERED']
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