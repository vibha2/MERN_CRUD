import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import TodoService from "../../services/todo.service";
import { TodoDTO } from "../../models/todo.js";
import { useNavigate } from "react-router-dom";

function AddTodo(props) {
  const [validated, setValidated] = useState(false);
    const [task, setTask] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      const todo = new TodoDTO(task);
      TodoService.createTodo(todo).then(
        (res) => {
          console.log("saved todo id =>",res);
          navigate(`/`);
        },
        (err) => {
          console.log("err=>", err);
        }
      );
    }
    setValidated(true);
  };

  return (
    <div>
      <h2>Add todo</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 mt-3">
          <Form.Group>
            <Form.Label>Sprint name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task name"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="mt-3 w-100">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
