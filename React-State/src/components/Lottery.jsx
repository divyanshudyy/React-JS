import { useState } from "react";
import { genTicket, sum } from "../helper";
import Ticket from "./Ticket";

// State
export default function Lottery({n = 3, winningSum = 15}) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  function generate() {
    setTicket(genTicket(n));
  }

  return (
    <div className="h-50 w-100 bg-amber-800">
      <h2 className="text-2xl">Lottery</h2>
      <Ticket ticket={ticket} />
      <button className="px-8 bg-blue-500" onClick={generate}>
        Generate
      </button>
      <h3>{isWinning && "Congratulations , YOU WON"}</h3>
    </div>
  );
}
