const Todo = require('../models/Todo');

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete todo information'
            });
        }

        const todo = await Todo.findById({ _id: id });
        if (!todo) {
            return res.status(500).json({
                success: false,
                message: 'Invalid id'
            });
        }

        return res.status(200).json({
            success: true,
            todos: todo,
            message: 'Todos fetched successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in fetching all todos'
        });
    }
}