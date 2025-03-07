import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setNewTodos] = useState([]);
  const [newInput, setNewInput] = useState("");

  function addTodo() {
    setNewTodos([...todos, { task: newInput, id: uuidv4() }]);
    setNewInput("");
  }
  function updateInput(e) {
    setNewInput(e.target.value);
  }

  return (
    <div className="h-40 w-100 bg-gray-800 flex-col justify-center align-center">
      <input
        type="text"
        placeholder="Task"
        value={newInput}
        onChange={updateInput}
      />
      <button className="h-6 w-24 text-amber-50 bg-amber-950" onClick={addTodo}>
        Add Task
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
