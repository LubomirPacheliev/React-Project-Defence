const app = require('express')();
const PORT = process.env.PORT || 3000;
const expressConfig = require('./config/express');
const dbConfig = require('./config/db');
const routes = require('./config/routes');

(async () => {
    expressConfig(app);
    await dbConfig(app);
    routes(app);

    app.listen(PORT, () => console.log(`Listening on ${PORT}. . .`));
})();