const Todo = require('../models/Todo');

exports.getAllTodos = async(req, res) => {
    try{
        const todos = await Todo.find();
        if(!todos){
            return res.status(404).json({
                success: false,
                message: 'No todos found'
            });
        }

        return res.status(200).json({
            success: true,
            todos: todos,
            message: 'Todos fetched successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in fetching all todos'
        });
    }
}