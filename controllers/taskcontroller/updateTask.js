
const Todo = require("../../model/todoModel")

exports.updateTask= async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
         if (!todo) {
            return res.status(400).send('todo does not exist');
        }

        let { text } = req.body;
        
        const updatedTodo = await todo.save();
        res.status(200).json({ success: true, message: "Task Updated Successfully", updatedTodo })


    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;
    }

}

