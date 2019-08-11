const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
var todoRoutes = require("./route/todoRoute");

let Todo = require("./models/todo.model");

app.use(cors());
app.use(bodyParser.json());

//database connect
mongoose.connect("mongodb://localhost:27017/mern-crud", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB connected successfully");
});

// for routing
app.use("/todos", todoRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT);
});
