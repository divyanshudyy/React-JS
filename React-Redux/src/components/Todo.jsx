import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleMarkAsDone(id) {
    dispatch(markAsDone(id));
    console.log(id);
  }

  return (
    <>
      <ol>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.isDone ? { textDecoration: "line-through" } : {}}
          >
            {todo.task}
            &nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => handleMarkAsDone(todo.id)}>
              Mark As Done
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
