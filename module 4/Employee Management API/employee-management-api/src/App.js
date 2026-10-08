import React, { useState } from "react";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>

      <AddEmployee addEmployee={addEmployee} />

      <h2>Total Employees: {employees.length}</h2>
    </div>
  );
}

export default App;