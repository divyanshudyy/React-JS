import React from "react";
import { useState } from "react";

// NOT A GOOD PRACTICE TO ADD VALUE
// FOR INTERVIEW POV ONLY

function Button() {
  let [counter, setCounter] = useState(20);
  function addValue1() {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  function addValue2() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <h4>Counter Value: {counter}</h4>
      <button onClick={addValue1}>Add Value by 1</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={addValue2}>Add Value by 4</button>
    </>
  );
}

export default Button;
