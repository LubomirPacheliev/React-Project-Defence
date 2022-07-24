const authController = require('../controllers/authController');
const bookController = require('../controllers/bookController');

module.exports = app => {
    app.use(authController);
    app.use(bookController);
}