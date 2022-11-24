const Todo = require("../../model/todoModel")

exports.sortTodo = async (req, res) => {
    try {
        const priority = req.params.id;
        const prior = await Todo.find({priority})
        const sort = req.query.sort || priority;

        
        

        const listTodos = await Todo.find({ priority: { $regex: sort, $options: "x" } })
        .sort({priority:-1})
           

        const total = await Todo.countDocuments({
            listTodos: { $regex: sort, $options: "x" },
        });

        const response = {
            total,
			priority
		};

        res.status(200).json(response);

    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;

    }
}