import React, { useState } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <Summary expenses={expenses} />

      <AddExpense addExpense={addExpense} />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;