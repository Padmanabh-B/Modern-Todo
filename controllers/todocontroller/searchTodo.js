const Todo = require("../../model/todoModel")

exports.searchTodo = async (req, res) => {
    try {
        const search = req.query.search || "";
        const todos = await Todo.find({ title: { $regex: search, $options: "i" } })
        const total = await Todo.countDocuments({
            title: { $regex: search, $options: "i" }
        });

        const response = {
            total,
            todos
        }

        res.status(200).send(response);

    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;
    }
}