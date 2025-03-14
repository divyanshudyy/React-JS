import { useSelector } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
