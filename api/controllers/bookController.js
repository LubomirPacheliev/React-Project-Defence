const router = require('express').Router();
import { createBook } from '../services/bookService';
import { COOKIE_SESSION_NAME } from '../constants';
import { validateJWT } from './userService';

router.post('/api/create', async (req, res) => {
    const data = await req.json(req.body);
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

module.exports = router;