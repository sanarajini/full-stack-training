import React from "react";

function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div>
      <h2>Summary</h2>
      <h3>Total Expenses: ₹{total}</h3>
      <p>Number of Expenses: {expenses.length}</p>
    </div>
  );
}

export default Summary;