import axios_api from "../axios";

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
    }

};

export default TodoService ;
