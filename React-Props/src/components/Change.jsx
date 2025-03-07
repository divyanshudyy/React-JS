import { useState } from "react";
import React from "react";

function Change() {
  const [color, setColor] = useState("Black");

  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen -z-10 duration-500"
        style={{ backgroundColor: color }}
      ></div>
      <div className="h-auto w-70 bg-amber-950 my-10 mx-15 py-2 rounded-2xl flex justify-around">
        <button className=" rounded-2xl " onClick={() => setColor("red")}>
          Red
        </button>
        <button className=" rounded-3xl" onClick={() => setColor("blue")}>
          Blue
        </button>
      </div>
    </>
  );
}

export default Change;
