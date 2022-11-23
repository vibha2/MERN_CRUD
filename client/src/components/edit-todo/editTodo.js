import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import TodoService from "../../services/todo.service";

export default function EditTodo(props) {

    const { todoId } = useParams(); //TO get the Active URL id
    const [todos, settodos] = useState();
    
    useEffect(() => {
        console.log("edit todo page=> ",todoId);
        getAllTodos();
        //todoId
      }, []);
    
      const getAllTodos = () => {
       TodoService.getTodoById(todoId).then(
        (res) => {
            console.log("Edit data=> ",res.data);
        }
       )
        // TodoService.getTodos().then(
        //   (res) => {
        //     console.log("todo list => ", res.data);
        //     res.data.map( (data) =>{
                
        //         if(data._id === todoId)
        //         {
        //             settodos(res.data);
        //         }
        //         console.log("Edit todo=> ",todos);
        //     });
            
        //   },
        //   (err) => {
        //     console.log("Error todo list => ", err);
        //   }
        // );
      };
    const handleEdit = (event) => {
        console.log("Edit");
    }
  return (
    <div>
    <h2>Edit todo</h2>
    <Form noValidate onSubmit={handleEdit}>
        <Row className="mb-3 mt-3">
          <Form.Group>
            <Form.Label>Task name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task name"
            //   value={task}
            //   onChange={(e) => {
            //     setTask(e.target.value);
            //   }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="mt-3 w-100">
          Save
        </Button>
      </Form>

    </div>
  )
}
