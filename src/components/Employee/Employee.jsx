import { React, useState } from "react";
import "./Employee.scss";
import TicketCount from "../TicketCount/TicketCount";

const EmployeeCard = ({ employeeName, employeeRole }) => {
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
    <div className="employee">
      <h3 className="employee__header">{employeeName}</h3>
      <p className="employee__role">{employeeRole}</p>
      <TicketCount
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleClear={handleClear}
        count={counter}
      />
    </div>
  );
};

export default EmployeeCard;
