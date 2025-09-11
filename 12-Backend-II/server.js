const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./config/database');
const todoRoutes = require('./routes/todos');
const postRoutes = require('./routes/posts');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

// middleware to parse data from req.body
app.use(express.json());

// adding routes with versioning
app.use('/api/v1', todoRoutes);
app.use('/api/v1', postRoutes);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

// connecting with database
dbConnect();

// default route
app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`);
});