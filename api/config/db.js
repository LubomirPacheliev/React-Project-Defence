const mongoose = require('mongoose');
const dbName = 'react-defence-2022';
const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async app => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true // TODO: Might be unnecessary and problematic
        });

        console.log('DB is connected.');

        mongoose.connection.on('error', error => {
            console.error('DB Error!');
            throw new Error(error);
        });
    } catch (error) {
        console.error(`We got an error, boys!!! Error: ${error}`);
        process.exit(1);
    }
}