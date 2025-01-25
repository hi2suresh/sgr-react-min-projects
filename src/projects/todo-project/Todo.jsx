import { useState } from 'react';
import { v4 } from 'uuid';

import './Todo.css';
function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.length < 1) return;
    setTodos(
      todos.concat({
        todoText,
        id: v4(),
      })
    );
    setTodoText('');
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="New Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Add Todo
        </button>
      </form>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li className="todo" key={todo.id}>
            {todo.todoText}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
