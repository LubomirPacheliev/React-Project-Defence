const router = require('express').Router();
const { createBook, getAllBooks } = require('../services/bookService');
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

router.get('/api/books', async (req, res) => {
    const books = await getAllBooks();
    res.json(books).end();
});

module.exports = router;