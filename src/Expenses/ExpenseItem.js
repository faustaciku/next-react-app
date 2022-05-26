import React from "react";
import "./ExpenseItem.css";
import Card from "../Card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="item-description">
        <h2>{props.title}</h2>
      </div>
      <div className="item-price">$ {props.amount}</div>
    </Card>
  );
}
