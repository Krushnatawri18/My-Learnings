const mongoose = require('mongoose');

// loads all environment variables into process object
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
        .then(() => console.log('DB connection successful'))
        .catch((err) => {
            console.log('DB connection unsuccessful', err);
            // existing code due to some application error, error in configuration or failure in connection
            process.exit(1);
        });
}

module.exports = dbConnect;