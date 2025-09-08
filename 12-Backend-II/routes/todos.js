const express = require('express');

// creating instance of express router
const router = express.Router();

// import controller
const { createTodo } = require('../controllers/createTodo');
const { getAllTodos } = require('../controllers/getAllTodos');
const { updateTodo } = require('../controllers/updateTodo');
const { getTodoById } = require('../controllers/getTodoById');
const { deleteTodoById } = require('../controllers/deleteTodoById');

// define the routes
router.post('/createTodo', createTodo);
router.get('/getAllTodos', getAllTodos);
router.put('/updateTodo/:id', updateTodo);
router.get('/getTodoById/:id', getTodoById);
router.delete('/deleteTodoById/:id', deleteTodoById);

module.exports = router;