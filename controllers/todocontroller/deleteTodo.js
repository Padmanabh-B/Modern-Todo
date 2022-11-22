const Todo = require("../../model/todoModel");

exports.deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: "Todo Deleted Successfully", })

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })

    }
}