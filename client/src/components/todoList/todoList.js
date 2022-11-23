import React, { useEffect, useState } from "react";
import TodoService from "../../services/todo.service";
import { useNavigate } from "react-router-dom";
// import {
//   generatePath,
//   useHistory,
// } from "react-router-dom";
import "./todoList.css";
function TodoList(props) {
  const [todos, settodos] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = () => {
    TodoService.getTodos().then(
      (res) => {
        console.log("todo list => ", res.data);
        settodos(res.data);
      },
      (err) => {
        console.log("Error todo list => ", err);
      }
    );
  };

  const handleTodo = (event) => {
    navigate(`/add-todo`);
  };

  const deleteTask = (id) => {
    console.log(id);
    TodoService.deleteTask(id).then(
      (res) => {
        getAllTodos();
      },
      (err) => {
        console.log("err on delete =>", err);
      }
    );
  };

  const editTask = (id) => {
    console.log(id);
     navigate(`/edit-todo/${id}`);
    //history.push("/edit-todo/:id", { id });    
    //navigation.navigate('/edit-todo', { id: `${id}` });
  };

  return (
    <div>
      <h2>All Todo</h2>
      <button onClick={handleTodo}>Add Todo</button>
      <div>
        <table id="todoTable">
          <thead>
            <th>Task</th>
            <th>Completed</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo._id}>
                <td> {todo.task} </td>
                <td> {todo.completed ? "yes" : "no"} </td>
                <td
                  onClick={() => {
                    deleteTask(todo._id);
                  }}
                  className="delete-text"
                >
                  Delete
                </td>
                <td
                  onClick={() => {
                    editTask(todo._id);
                    console.log("Edit Todo Task");
                  }}
                  className="edit-text"
                >
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
