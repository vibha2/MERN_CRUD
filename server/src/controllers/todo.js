//here we make endpoints of that model

const Todo = require("../models/todo.js");

exports.createTodo = (req, res) => {
  console.log("body => ", req.body);
  const { task, completed } = req.body;

  const todo = new Todo({
    task,
    completed,
  });

  todo.save((error, todo) => {
    if (error) return res.status(400).json({ error: error });
    if (todo) {
      return res.status(201).json({ id: todo._id });
    }
  });
};

exports.getAllTodos = (req, res) => {
  Todo.find((err, todo) => {
    if (err) return res.status(400).send(err);
    else return res.status(200).send(todo);
  });
};

exports.getTodoById = (req, res) => {
  Todo.find({ _id: req.params.todoId }, (err, todo) => {
    if (err) return res.status(400).send(err);
    else return res.status(200).send(todo);
  });
};

exports.deleteTodoById = (req, res) => {
  console.log("req.params =>", req.params.todoId);
  Todo.deleteOne({ _id: req.params.todoId }, (err, deleteRes) => {
    if (err) return res.status(400).send(err);
    else return res.status(200).send(deleteRes);
  });
};

exports.updateTodosById = (req, res) => {
  //console.log(req.body)
  //destructuring only completed flag because we are restricting user to update task name
  const { task, completed } = req.body;
  const todo = {
    task,
    completed,
  };

  Todo.findByIdAndUpdate({ _id: req.params.todoId }, todo, (err, updateRes) => {
    if (err) return res.status(400).send(err);
    else return res.status(201).send(updateRes);
  });
};
