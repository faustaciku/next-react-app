import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  const month = props.date.toLocaleString(`en-US`, { month: `long` });
  const day = props.date.toLocaleString(`en-US`, { day: `2-digit` });
  const year = props.date.getFullYear();
  return (
    <div className="ExpenseItem">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="item-description">
        <h2>{props.title}</h2>
      </div>
      <div className="item-price">$ {props.amount}</div>
    </div>
  );
}
