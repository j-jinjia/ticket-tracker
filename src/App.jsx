
import './App.scss';
import EmployeeInformation from './assets/components/Employee/Employee';
import team from './data/data';


/** PSEUDO CODE FOR TICKET TRACKER
 * COMPONENTS:
 * 1.- Showing name and role
 * 2.- Buttons to decrease/increase ticket count
 * 3.- Display ticket count
 * PROPS:
 * Imported from data.js. This object includdes and array an ID, name and role for each element. Remember to use a key for each element of the array.
 * 
 */
const App = ()=> {
  return (
    <>
      <h1 className='header'>Ticket Tracker</h1>
      <div className="software-team">
        <EmployeeInformation employeeArr={team}/>
      </div>
    </>
  );
}

export default App;
