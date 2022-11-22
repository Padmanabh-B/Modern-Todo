const Todo = require("../../model/todoModel");


exports.getTodo = async (req,res)=>{
    try {
        const todoId = req.params.id;
        const todo = await Todo.find(todoId);
        res.status(302).json({
            success:true,
            todo,
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}