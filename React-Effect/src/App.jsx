import { useEffect, useState } from "react";
import "./App.css";
import RandomJoke from "./RandomJoke";

function App() {
  let [countX, setCountX] = useState(0);
  let [countY, setCountY] = useState(0);

  const handleChange1 = () => {
    setCountX((currValue) => currValue + 1);
  };
  const handleChange2 = () => {
    setCountY((currValue) => currValue + 1);
  };

  useEffect(() => console.log("+ 1"), [countX]);

  return (
    <>
      <div>
        <h2>Count X = {countX}</h2>
        <button onClick={handleChange1}>Add +1 </button>
        <h2>Count Y = {countY}</h2>
        <button onClick={handleChange2}>Add +1 </button>
      </div>
      <RandomJoke />
    </>
  );
}

export default App;
