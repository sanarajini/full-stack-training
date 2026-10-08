import React from "react";

function TodoList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      <h2>Todo List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name}{" "}

              <button onClick={() => onComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>{" "}

              <button onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;