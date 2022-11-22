// ---- URL PATHs ----- //
const express = require("express");
const router = express.Router("express")
const app = express();
const {home} = require("../controllers/homeController")
const {createTodo} = require("../controllers/todocontroller/createTodo")
const {getAllTodos} = require("../controllers/todocontroller/getAllTodos")
const {getTodo} = require("../controllers/todocontroller/getTodo")
const {updateTodo} = require("../controllers/todocontroller/updateTodo")
const {deleteTodo} = require("../controllers/todocontroller/deleteTodo")
const {createTask} = require("../controllers/taskcontroller/createTask")
const {updateTask} = require("../controllers/taskcontroller/updateTask")
const {deleteTask} = require("../controllers/taskcontroller/deleteTask")


// --- Home Route --- //
router.get("/", home);


// ----- Routes : Todo Controller ----- //

router.get("/getAllTodos", getAllTodos);
router.get("/getTodo/:id", getTodo);
router.post("/createTodo", createTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//----- Routes : Task Controller ---- //

router.post("/createTask/:id", createTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;