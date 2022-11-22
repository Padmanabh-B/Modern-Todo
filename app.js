require("dotenv").config();
require("./config/database").connect()
const express = require("express");
const todoRoutes = require("./routes/todoRoutes")

const app = express();

// --- Routes Setup ---- //


// --- Express Middlewares --- // 
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Root Route
app.use("/",todoRoutes);

module.exports = app;

