const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employee');
const dbConnect = require('./config/database');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use('/api/v1', employeeRoutes);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

dbConnect();

app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`);
});