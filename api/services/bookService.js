const bookModel = require('../models/Book');

const createBook = async (data, user) => {
    data.owner = user._id;

    try {
        const book = new bookModel(data);
        await book.save();
    } catch (e) {
        console.error(e);
    }
}

const getAllBooks = async () => {
    const books = await bookModel.find({});
    return books;
}

const getBookByID = async id => {
    const book = await bookModel.find({ _id: id });
    return book;
}

module.exports = {
    createBook,
    getAllBooks,
    getBookByID
};