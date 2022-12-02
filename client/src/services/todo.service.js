import axios_api from "../axios";
import { TodoDTO } from "../models/todo";

const TodoService = {
  createTodo: async function (todo) {
    return axios_api.post("/todo/", todo);
    },
    
    getTodos: async function () {
        return axios_api.get("/todo/");
    },

    getTodoById: async function (todoId) {
        return axios_api.get(`/todo/${todoId}`);
    },

    deleteTask: async function (id) {
        return axios_api.delete('/todo/'+id);
    },

    //while updating we send data as parameter to axios.put function because our server is expecting req.body
    //same as post 
    updateTask: async function (id, todo) {
        return axios_api.put(`/todo/${id}`,todo);
    }

};

export default TodoService ;
