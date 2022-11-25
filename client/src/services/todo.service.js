import axios_api from "../axios";

const TodoService = {
  createTodo: async function (todo) {
    return axios_api.post("/todo/", todo);
    },
    
    getTodos: async function (todo) {
        return axios_api.get("/todo/", todo);
    },

    deleteTask: async function (id) {
        return axios_api.delete('/todo/'+id);
    }

};

export default TodoService ;
