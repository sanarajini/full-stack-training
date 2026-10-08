```jsx
import React, { useState } from "react";

function EmployeeProfileUpdate({ employees, updateEmployee }) {
  const [selectedId, setSelectedId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);

    const employee = employees.find((emp) => emp.id === id);

    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setDepartment(employee.department);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      id: selectedId,
      name: name,
      email: email,
      department: department
    };

    updateEmployee(updatedEmployee);

    alert("Employee updated successfully!");
  };

  return (
    <div>
      <h2>Employee Profile Update</h2>

      <select value={selectedId} onChange={handleSelect}>
        <option value="">Select Employee</option>

        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>

      {selectedId && (
        <form onSubmit={handleUpdate}>
          <br /><br />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <br /><br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br /><br />

          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Department"
          />

          <br /><br />

          <button type="submit">
            Update Employee
          </button>
        </form>
      )}
    </div>
  );
}

export default EmployeeProfileUpdate;
```
