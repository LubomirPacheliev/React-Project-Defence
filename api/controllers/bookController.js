const router = require('express').Router();
const { createBook, editBook, deleteBookByID, getAllBooks, getBookByID } = require('../services/bookService');
const { COOKIE_SESSION_NAME } = require('../constants');
const { validateJWT } = require('../services/userService');

router.post('/api/create', async (req, res) => {
    const data = await req.body;
    const cookie = req.cookies[COOKIE_SESSION_NAME];

    try {
        const user = (await validateJWT(cookie))[0];
        if (!user) throw new Error('Invalid cookie.');
        await createBook(data, user);
    } catch (e) {
        res.json({ msg: e });
        console.error(e);
    }

    res.end();
});

router.post('/api/edit/:id', async (req, res) => {
    const data = await req.body;
    const id = req.params.id;

    try {
        await editBook(data, id);
    } catch (e) {
        res.json({ msg: e });
        console.error(e);
    }

    res.end();
});

router.get('/api/books', async (req, res) => {
    const books = await getAllBooks();
    res.json(books).end();
});

router.get('/api/books/:id', async (req, res) => {
    const id = req.params.id;
    const book = await getBookByID(id);
    res.json(book).end();
});

router.get('/api/books/:id/delete', async (req, res) => {
    const id = req.params.id;
    await deleteBookByID(id);
    res.end();
});

module.exports = router;