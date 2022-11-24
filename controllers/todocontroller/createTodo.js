
const Todo = require("../../model/todoModel");


// ---- Create TODO Functiom ---- //


exports.createTodo = async (req, res) => {
    try {
        const { title, priority } = req.body;
        if (!(title && priority)) {
            res.status(406).send("Title and Priority Should not be Empty") // Postman
            throw new Error(`Title And Priority Should not be Empty`)    // For VS Code
        }
        const todoTitle = await Todo.findOne({ title });
        if (todoTitle) {
            res.status(302).send("Todo Title Alredy Exits")   // Postman
            throw new Error(`Todo Title Alredy Exits`)         // For VS Code
        }

        if(priority > 4){
            res.status(302).send("Keep Priority Between 1 To 4")   // Postman
            throw new Error(`Keep Priority Between 1 To 4`)         // For VS Code
        }


        const newTodo = await Todo.create({ title, priority })
        res.status(200).json({  newTodo, success: true, message: "Todo Created Successfully", })
    }


    catch (error) {
        res.status(401).send('Something Went Wrong...!  Try Once Again')
        console.log(error);
        message: error.message;
    }

}