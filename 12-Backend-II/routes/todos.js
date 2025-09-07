const express = require('express');

// creating instance of express router
const router = express.Router();

// import controller
const { createTodo } = require('../controllers/createTodo');

// define the routes
router.post('/createTodo', createTodo);

module.exports = router;