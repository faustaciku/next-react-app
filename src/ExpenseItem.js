import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="item-description">
        <h2>{props.title}</h2>
      </div>
      <div className="item-price">$ {props.amount}</div>
    </div>
  );
}
