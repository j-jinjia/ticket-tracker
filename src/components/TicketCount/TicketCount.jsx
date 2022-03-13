import React from "react";
import "./TicketCount.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

const TicketCount = ({
  count,
  handleDecrement,
  handleIncrement,
  handleClear,
}) => {
  return (
    <div className="ticket-counter">
      <div className="counter">
        <button
          className="counter__buttons counter__decrease"
          onClick={handleDecrement}
        >
          <TiArrowSortedDown className="icon" />
        </button>
        <p className="counter__tickets">{count}</p>
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
