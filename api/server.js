const app = require('express')();
const PORT = process.env.PORT || 3000;
const expressConfig = require('./config/express');
const dbConfig = require('./config/db');

(async () => {
    expressConfig(app);
    await dbConfig(app);

    app.get('/', (req, res) => {
        res.sendFile('./index.html');
    });

    app.listen(PORT, () => console.log(`Listening on ${PORT}. . .`));
})();