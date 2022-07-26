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

const findBookByOwner = async owner => {
    const book = await bookModel.find({ owner: owner });
    return book;
}

module.exports = {
    createBook,
    getAllBooks
};