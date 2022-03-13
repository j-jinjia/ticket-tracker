import React from "react";
import "./Employee.scss";
import TicketCount from "../TicketCount/TicketCount";

const EmployeeCard = ({ employeeName, employeeRole }) => {
  return (
    <div className="employee">
      <h3 className="employee__header">{employeeName}</h3>
      <p className="employee__role">{employeeRole}</p>
      <TicketCount />
    </div>
  );
};

export default EmployeeCard;
