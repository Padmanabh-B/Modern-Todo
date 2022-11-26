const Todo = require("../../model/todoModel")

exports.sortTodo = async (req, res) => {
    try {
        const priority = req.params.priority;
        const sort = req.query.sort || "priority";


        const listTodos = await Todo.find({ priority: { $regex: sort, $options: "i" } })
            


        const total = await Todo.countDocuments({
            priority: { $regex: sort, $options: "x" },
        });

        const response = {
            total,
            listTodos,
            
        };

        res.status(200).json(response);

    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;

    }
}