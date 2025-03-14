import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  return (
    <>
      <h1>Redux Todo</h1>
      <Provider store={store}>
        <TodoForm />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
