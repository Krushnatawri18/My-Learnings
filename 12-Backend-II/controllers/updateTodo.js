const Todo = require('../models/Todo');


exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        if (!id) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete id'
            });
        }

        const updatedTodo = await Todo.findByIdAndUpdate({ _id: id }, { title, description, updatedAt: Date.now() });

        return res.status(200).json({
            success: true,
            updatedTodo: updatedTodo,
            message: 'Todo updated successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in updating a todo'
        });
    }
}