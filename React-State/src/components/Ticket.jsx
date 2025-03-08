import TicketNum from "./TicketNum";

function Ticket({ ticket }) {
  return (
    <div>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}

export default Ticket;
