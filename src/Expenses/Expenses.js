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
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveYear={saveYearHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
