import { useState } from "react";
import { genTicket, sum } from "../helper";

// State
export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  function generate() {
    setTicket(() => genTicket(3));
  }

  return (
    <div className="h-50 w-100 bg-amber-800">
      <h2 className="text-2xl">Lottery</h2>
      <p>
        Ticket Number :<span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </p>
      <button className="px-8 bg-blue-500" onClick={generate}>
        Generate
      </button>
      <h3>{isWinning && "Congratulations , YOU WON"}</h3>
    </div>
  );
}
