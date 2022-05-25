import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../Card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle("Updated");
  }
  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="item-description">
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Change title</button>
      <div className="item-price">$ {props.amount}</div>
    </Card>
  );
}
