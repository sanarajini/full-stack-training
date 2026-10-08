import React from "react";

function TodoDashboard({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <h2>Todo Dashboard</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
}

export default TodoDashboard;