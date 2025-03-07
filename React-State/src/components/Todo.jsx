import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setNewTodos] = useState([]);
  const [newInput, setNewInput] = useState("");

  function addTodo() {
    setNewTodos((prevTodo) => {
      return [...prevTodo, { task: newInput, id: uuidv4(), isDone: false }];
    });
    setNewInput("");
  }
  function updateInput(e) {
    setNewInput(e.target.value);
  }

  function deleteTodo(id) {
    setNewTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
  }

  function upperCaseAll() {
    setNewTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  }

  function upperCaseOne(id) {
    setNewTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  }

  function markAsDone(id) {
    setNewTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDOne: (todo.isDone = true),
          };
        } else {
          return todo;
        }
      })
    );
  }

  function markAsDoneAll() {
    setNewTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: (todo.isDone = true),
        };
      })
    );
  }

  return (
    <div className="h-40 w-140 bg-gray-800 flex-col justify-center align-center">
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
          <li
            key={todo.id}
            style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
          >
            {todo.task}
            {todo.isDone}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => deleteTodo(todo.id)}
              className="h-6 w-24 text-amber-50 bg-amber-950"
            >
              Delete
            </button>
            <button
              onClick={() => upperCaseOne(todo.id)}
              className="h-6 w-24 text-amber-50 bg-amber-950"
            >
              UpperCase
            </button>
            <button
              onClick={() => markAsDone(todo.id)}
              className="h-6 w-34 text-amber-50 bg-amber-950"
            >
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
      <br />
      <button
        className="h-6 w-34 text-amber-50 bg-amber-950"
        onClick={upperCaseAll}
      >
        Upper Case All
      </button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        className="h-6 w-34 text-amber-50 bg-amber-950"
        onClick={markAsDoneAll}
      >
        Mark As All Done
      </button>
    </div>
  );
}
