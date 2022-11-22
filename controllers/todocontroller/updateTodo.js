const Todo = require("../../model/todoModel");

exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({success: true, message: "Todo Updated Successfully", })

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })

    }
}