
const Todo = require("../../model/todoModel")

exports.deleteTask= async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        console.log(todo);
         if (!todo) {
            return res.status(400).send('todo does not exist');
        }
        todo.tasks.pop()
        const deleted= await todo.save();
        res.status(200).json({ success: true, message: "Task Deleted Successfully", deleted })


    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;
    }

}

