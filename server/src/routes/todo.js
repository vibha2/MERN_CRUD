const express = require("express");
const { createTodo, getAllTodos, getTodoById: getTodoById, deleteTodoById, updateTodosById  } = require("../controllers/todo.js");

var todoRouter = express.Router();

todoRouter.post("/todo/", createTodo);
todoRouter.get("/todo/", getAllTodos);
todoRouter.get("/todo/:todoId", getTodoById);
todoRouter.delete("/todo/:todoId", deleteTodoById);
todoRouter.put("/todo/:todoId", updateTodosById );

module.exports = todoRouter;
