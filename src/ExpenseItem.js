import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <div className="item-description">{props.date.toISOString()}</div>
      <h2>{props.title}</h2>
      <div className="item-price">$ {props.amount}</div>
    </div>
  );
}
