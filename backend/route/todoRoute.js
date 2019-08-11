var express = require("express");
var router = express.Router();

var todoObj = require("../models/todo.model");

// create todo
router.post("/createtodo", function(req, res) {
  //   console.log(req.body);
  todoObj.create(req.body, function(err, todoCreated) {
    if (err) {
      var message = { Success: 0, Message: "Some error found" };
      //   console.log(message);
      res.send(message);
    } else {
      var message = { Success: 1, todolist: todoCreated };
      //   console.log(message);
      res.send(message);
    }
  });
});

// get todo list
router.get("/todolist", function(req, res) {
  //   console.log(req.body);
  todoObj.find(function(err, todoList) {
    if (err) {
      var message = { Success: 0, Message: "Some error found" };
      //   console.log(message);
      res.send(message);
    } else {
      var message = { Success: 1, todolist: todoList };
      //   console.log(message);
      res.send(message);
    }
  });
});

// get todo by id
router.get("/gettodo/:id", function(req, res) {
  //   console.log(req.body);
  todoObj.find({ _id: req.params.id }).exec(function(err, todoList) {
    if (err) {
      var message = { Success: 0, Message: "Some error found" };
      //   console.log(message);
      res.send(message);
    } else {
      var message = { Success: 1, todolist: todoList };
      //   console.log(message);
      res.send(message);
    }
  });
});

// update todo by id
router.post("/updatetodo", function(req, res) {
  //   console.log(req.body);
  todoObj.update(
    { _id: req.body.id },
    {
      $set: {
        todo_description: req.body.edit_todo_description,
        todo_responsible: req.body.edit_todo_responsible,
        todo_priority: req.body.edit_todo_priority,
        todo_completed: req.body.edit_todo_completed
      }
    },
    function(err, todoList) {
      if (err) {
        var message = { Success: 0, Message: "Some error found" };
        //   console.log(message);
        res.send(message);
      } else {
        var message = { Success: 1, todolist: todoList };
        //   console.log(message);
        res.send(message);
      }
    }
  );
});

module.exports = router;
