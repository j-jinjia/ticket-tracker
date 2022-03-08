import React from 'react';
import "./Employee.scss";

const EmployeeCard = ({employeeName,employeeRole}) => {
  return (

    <div className='employee'>
      <h3 className='employee__header'>{employeeName}</h3>
      <p className='employee__role'>{employeeRole}</p>
    </div>
  )

}

export default EmployeeCard