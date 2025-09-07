// import the schema
const Todo = require('../models/Todo');

// define route handler
// write async function so not to block main js thread
exports.createTodo = async (req, res) => {
    try {
        // extracting data from req.body
        const { title, description } = req.body;

        // validation 
        if (!title || !description) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete todo information'
            });
        }

        // inserting new todo
        const response = await Todo.create({ title, description });

        return res.status(200).json({
            success: true,
            data: response,
            message: 'Todo created successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in creating a todo'
        });
    }
}