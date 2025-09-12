const mongoose = require('mongoose');

// loads all environment variables into process object
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {})
        .then(() => console.log('DB connection successful'))
        .catch((err) => {
            console.log('DB connection unsuccessful', err);
            process.exit(1);
        });
}

module.exports = dbConnect;