// STATE WITH HOOKS
// 

import { useState } from "react";
import Ludo from "./components/Ludo";
import Todo from "./components/Todo";
import Lottery from "./components/Lottery";

function App() {
  let [counter, setCounter] = useState(12);
  function addValue() {
    setCounter(counter + 1);
  }
  function removeValue() {
    if (counter != 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>React</h1>
      <p>Counter Value = {counter} </p>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <Ludo />
      <Todo />
      <Lottery />
    </>
  );
}

export default App;
