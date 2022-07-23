const router = require('express').Router();
const userService = require('../services/userService');
const uriService = require('../services/uriService');
const { COOKIE_SESSION_NAME } = require('../constants');

router.post('/api/register', async (req, res) => {
    const { username, email, password, repassword } = await uriService.decodeURIBody(req.body); // TODO: This is prob the worst possible way to receive X-www-form-urlencoded
    if (password !== repassword) throw new Error('Password mismatch.');

    try {
        const token = await userService.registerUser(username, email, password);
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
    } catch (e) {
        console.error(e);
    }

    res.end();
});

router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.loginUser(email, password);
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
    } catch (e) {
        console.error(e);
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
});

module.exports = router;