import React from "react";
import "./styles/Stats.css";
import { useState } from "react";

function Stats({ operation, expenses, incomes }) {
  
  var sum_income = incomes.reduce(function (acc, obj) {
    return parseInt(acc) + parseInt(obj.amount);
  }, 0);

  var sum_expense = expenses.reduce(function (acc, obj) {
    return parseInt(acc) + parseInt(obj.amount);
  }, 0);

  let expenses_percentage = (sum_expense * 100) / sum_income;
  let incomes_percentage = 100 - expenses_percentage;
  let total_percentage = "80%";

  console.log(sum_income);
  const incomes_style = {
    width: incomes_percentage + "%",
  };
  const expenses_style = {
    width: expenses_percentage + "%",
  };
  // operation.forEach((op) => {
  //   console.log(incomes);
  // });
  return (
    <div className="Stats">
      <div className="Stat incomes">
        <h3>{sum_income} MAD</h3>
        <h5>Incomes</h5>
        <span style={incomes_style} className="counter counter_incomes"></span>
      </div>
      <div className="Stat expenses">
        <h3>{sum_expense} MAD</h3>
        <h5>Expenses</h5>
        <span
          style={expenses_style}
          className="counter counter_expenses"
        ></span>
      </div>
      <div className="Stat total">
        <h3>{sum_income - sum_expense} MAD</h3>
        <h5>Total</h5>
        <span style={incomes_style} className="counter counter_total"></span>
      </div>
    </div>
  );
}

export default Stats;
