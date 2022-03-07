import React from 'react';
import "./Employee.scss"

const EmployeeInformation = ({employeeArr}) => {
/*   const teamMember = employeeArr.map((employee)=>{
    return [employee.name, employee.role]
  })  */
  return employeeArr.map(({name,role,id})=>{
    
    return (
      <div key={id} className="employee__info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>


    )
  })
  
}

export default EmployeeInformation