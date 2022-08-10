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

const editBook = async (data, id) => {
    const book = (await getBookByID(id))[0];
    const { title, description, image, author, price } = data;

    try {
        book.title = title;
        book.description = description;
        book.image = image;
        book.author = author;
        book.price = price;
        await book.save();
    } catch (e) {
        console.error(e);
    }
}

const deleteBookByID = async id => {
    return await bookModel.find({ _id: id }).deleteOne();
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
    editBook,
    deleteBookByID,
    getAllBooks,
    getBookByID
};