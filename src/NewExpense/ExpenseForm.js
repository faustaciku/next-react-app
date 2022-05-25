import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  function titleChangeHandler(event) {
    setTitleValue(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmountValue(event.target.value);
  }
  function dateChangeHandler(event) {
    setDateValue(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    console.log(expenseData);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={titleValue} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            value={amountValue}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            value={dateValue}
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
