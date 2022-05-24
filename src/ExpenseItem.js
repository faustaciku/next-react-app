import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem() {
  return (
    <div className="ExpenseItem">
      <div className="item-description">May 24th 2022</div>
      <h2>Car insurance</h2>
      <div className="item-price">$294.67</div>
    </div>
  );
}
