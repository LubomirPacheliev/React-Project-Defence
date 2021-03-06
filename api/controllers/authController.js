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
        res.json({ msg: e });
        console.error(e);
    }

    res.end();
});

router.post('/api/login', async (req, res) => {
    const { email, password } = await uriService.decodeURIBody(req.body); // TODO: This is prob the worst possible way to receive X-www-form-urlencoded

    try {
        const token = await userService.loginUser(email, password);
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
    } catch (e) {
        res.json({ msg: e });
        console.error(e);
    }

    res.end();
})

router.get('/api/logout', (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.end();
});

router.get('/api/validate', async (req, res) => {
    const cookies = req.cookies;
    const jwtCookie = cookies[COOKIE_SESSION_NAME];

    try {
        if (!jwtCookie) res.json({}).end();
        const decoded = (await userService.validateJWT(jwtCookie))[0];
        if (!decoded) res.json({ msg: "Auth cookie is not valid." }).end();
        res.json({ validated: decoded }); // ! TODO: Make sure it's okay to return a decoded version
    } catch (e) {
        console.error(e);
    }

    res.end();
});

module.exports = router;