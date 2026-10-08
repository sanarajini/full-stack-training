import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Task Manager</h2>;
}

function Tasks({ tasks, setTasks }) {
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <p>
              {index + 1}. {task.name}{" "}
              {task.completed ? "✅ Completed" : "⏳ Pending"}
            </p>

            <button onClick={() => completeTask(index)}>
              {task.completed ? "Mark Pending" : "Complete"}
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

function AddTask({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      name: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <div>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

function Dashboard({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  return (
    <div>
      <h2>Task Dashboard</h2>

      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Pending Tasks: {pending}</p>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <h1>Task Manager</h1>

      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/tasks">Tasks</Link> {" | "}
        <Link to="/add-task">Add Task</Link> {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />

        <Route
          path="/add-task"
          element={<AddTask tasks={tasks} setTasks={setTasks} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard tasks={tasks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;