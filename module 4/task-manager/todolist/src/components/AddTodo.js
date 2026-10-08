import React, { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim() !== "") {
      alert("Todo added: " + todo);
      setTodo("");
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>

      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;