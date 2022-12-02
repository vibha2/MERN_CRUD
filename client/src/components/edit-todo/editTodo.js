import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import TodoService from "../../services/todo.service";
import { useNavigate } from "react-router-dom";
import { TodoDTO } from "../../models/todo";

export default function EditTodo(props) {
  const { todoId } = useParams(); //TO get the Active URL id
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("edit page fetched todoId from url=> ", todoId);
    getEditId();
  }, []);

  const getEditId = () => {
    TodoService.getTodoById(todoId).then((res) => {
      console.log("Fetched data for current todoId=> ", res.data[0]);
      setTask(res?.data[0].task);
      setCompleted(res?.data[0].completed ? true : false);
    });
  };

  const handleEdit = () => {
    const todoDto = new TodoDTO(task, completed);
    console.log("Edit model =>", todoDto);
    TodoService.updateTask(todoId,todoDto).then((res) => {
      if(res) navigate(`/`);
      else console.log("error =>", res)
    });
  };
  return (
    <div>
      <h2>Edit todo</h2>
      <label>Task: </label>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <br />
      task -{task}
      <br />
      completed-{completed ? "true" : "false"}
      <br />
      <input
        type="radio"
        name="completedRadioGroup"
        checked={completed ? true : false}
        onChange={(e) => setCompleted(true)}
      />
      <label>Yes</label>
      <br />
      <input
        type="radio"
        name="completedRadioGroup"
        checked={!completed ? true : false}
        onChange={(e) => setCompleted(false)}
      />
      <label>No</label>
      <br></br>
      <button onClick={handleEdit}>Submit</button>
    </div>
  );
}
