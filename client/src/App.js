import './App.css';
import TodoList from "./components/todoList/todoList";
import AddTodo from './components/add-todo/addTodo';
import EditTodo from './components/edit-todo/editTodo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route path='/add-todo' element={<AddTodo />} />
        <Route path='/edit-todo/:todoId' element={<EditTodo />} />
            {/* <Route exact path='/board/:boardId/register-user' element={<RegisterUser />} />
            <Route exact path='/board/:boardId/register-user/:userId' element={<PokerBoard />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
