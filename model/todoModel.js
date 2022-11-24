// ---- Creating a Model Of Todo having title and tasks --- //

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        require: [true, "tilte is Required"],
        trim: true,
        maxlength: [25, "Title must ne 25 ch Long"],
    },
    priority:{
        type:String,
        enum:[1,2,3,4],
        required:true,
        default:"1",
    },
    tasks: {
        type: [String],
        minlength: 3,
        maxlength: 255,
        
    },
    addedDate:{
        type:Date,
        default:Date.now(),
    }
   

}, );

module.exports = mongoose.model("Todo", TodoSchema)
