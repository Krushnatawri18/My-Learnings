const Todo = require('../models/Todo');


exports.deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete id'
            });
        }

        // returns deleted document if stored in variable
        await Todo.findByIdAndDelete({ _id: id });

        return res.status(200).json({
            success: true,
            message: 'Todo deleted successfully'
        });

    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in deleting a todo'
        });
    }
}