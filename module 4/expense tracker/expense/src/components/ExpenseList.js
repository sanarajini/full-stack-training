import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;