const Todo = require("../../model/todoModel");


exports.getAllTodos = async (req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(302).json({
            success:true,
            todos,
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}