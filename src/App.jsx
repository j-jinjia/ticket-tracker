import "./App.scss";
import EmployeeCard from "./assets/components/Employee/Employee";
import team from "./data/data";
import Navigation from "./assets/components/Navigation/Navigation";
import { useState } from "react";

/** PSEUDO CODE FOR TICKET TRACKER
 * COMPONENTS:
 * 1.- Showing name and role
 * 2.- Buttons to decrease/increase ticket count
 * 3.- Display ticket count
 * PROPS:
 * Imported from data.js. This object includdes and array an ID, name and role for each element. Remember to use a key for each element of the array.
 *
 */
const App = () => {
  const employee = team.map((teamEmployee) => {
    return (
      <>
        <div className="team">
          <EmployeeCard
            employeeName={teamEmployee.name}
            employeeRole={teamEmployee.role}
          />
        </div>
      </>
    );
  });
  const [user, setUser] = useState({
    firstName: "Jiazheng",
    lastName: "Jin Jia",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };

  return (
    <>
      <div className="nav">
        <Navigation
          userName={`${user.firstName} ${user.lastName}`}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="container">
        <h1 className="container__heading">
          Hello, <br /> {user.firstName} {user.lastName}! Welcome to your ticket
          tracker app!
        </h1>
        <div className="container__team">{employee}</div>
      </div>
    </>
  );
};

export default App;
