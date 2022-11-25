const express = require("express");
const { createTodo, getAllTodos, getAllTodosById, deleteTodoById  } = require("../controllers/todo.js");

var todoRouter = express.Router();

todoRouter.post("/todo/", createTodo);
todoRouter.get("/todo/", getAllTodos);
todoRouter.get("/todo/:todoId", getAllTodosById);
todoRouter.delete("/todo/:todoId", deleteTodoById );

module.exports = todoRouter;
