import React from "react";
import { useState } from "react";
import "./TicketCount.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

const TicketCount = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleClear = () => {
    setCounter(0);
  };

  return (
    <div className="ticket-counter">
      <div className="counter">
        <button
          className="counter__buttons counter__decrease"
          onClick={handleDecrement}
        >
          <TiArrowSortedDown className="icon" />
        </button>
        <p className="counter__tickets">{counter}</p>
        <button
          className="counter__buttons counter__increase"
          onClick={handleIncrement}
        >
          <TiArrowSortedUp className="icon" />
        </button>
      </div>
      <div className="delete">
        <button className="delete__buttons " onClick={handleClear}>
          <MdDeleteForever className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TicketCount;
