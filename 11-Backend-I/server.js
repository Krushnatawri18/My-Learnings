// creating a single instance of express
const express = require('express');

// instantiated express server as app
const app = express();

// creating instance of body-parser to parse req.body, used in post and put req types
const bodyParser = require('body-parser');

// telling app server to use bodyParser to parse json data and add into req.body object
// can use express.json() also
app.use(bodyParser.json()); 

// server app is activated on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// routes
// creating get route which fetches some string in response
app.get('/', (req, res) => {
    res.send('Welcome to home of server');
});

// sending some data to server in request.body
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send('Car data submitted successfully !');
});

// connecting server with mongodb with mongoose
const mongoose = require('mongoose');

// returns a promise whether connection is resolved or rejected
mongoose.connect('mongodb://localhost:27017/myDatabase', {})
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("DB connection unsuccessfull", err))