import { useState } from "react";

export default function Ludo() {
  const [count, setCount] = useState({ blue: 0, red: 0, green: 0, pink: 0 });

  function addCount1() {
    setCount((prevCount) => {
      return { ...prevCount, blue: prevCount.blue + 1 };
    });
  }
  function addCount2() {
    setCount((prevCount) => {
      return { ...prevCount, red: prevCount.red + 1 };
    });
  }
  function addCount3() {
    setCount((prevCount) => {
      return { ...prevCount, green: prevCount.green + 1 };
    });
  }
  function addCount4() {
    setCount((prevCount) => {
      return { ...prevCount, pink: prevCount.pink + 1 };
    });
  }

  return (
    <>
      <div
        className="h-72 w-96 flex justify-center align-middle
        flex-col"
      >
        <p>Blue Count = {count.blue} </p>
        <button
          onClick={addCount1}
          className=""
          style={{ backgroundColor: "Blue" }}
        >
          +1
        </button>
        <p>Red Count = {count.red}</p>
        <button
          onClick={addCount2}
          className=""
          style={{ backgroundColor: "Red" }}
        >
          +1
        </button>
        <p>Green Count = {count.green} </p>
        <button
          onClick={addCount3}
          className=""
          style={{ backgroundColor: "Green" }}
        >
          +1
        </button>
        <p>Pink Count = {count.pink}</p>
        <button
          onClick={addCount4}
          className=""
          style={{ backgroundColor: "Pink" }}
        >
          +1
        </button>
      </div>
    </>
  );
}
