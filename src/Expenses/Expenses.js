import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "../Card";

export default function Expenses(props) {
  const [year, setYear] = useState("2019");
  function saveYearHandler(selectedYear) {
    setYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveYear={saveYearHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
