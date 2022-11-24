const Todo = require("../../model/todoModel")

exports.searchTasks = async (req, res) => {
    try {
        const search = req.query.search || "";
        const listTasks = await Todo.find()
        const mytasks = await Todo.find({ tasks: { $regex: search, $options: "i" } })

        const total = await Todo.countDocuments({
            tasks: { $regex: search, $options: "i" },
        });

        const response = {
            total,
            mytasks,
        }

        res.status(200).send(response);

    } catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;
    }
}