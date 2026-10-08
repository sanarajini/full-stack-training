import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || department === "") {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      id: Date.now(),
      name: name,
      email: email,
      department: department
    };

    addEmployee(employee);

    setName("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;