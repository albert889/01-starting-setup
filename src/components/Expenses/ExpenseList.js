import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);

    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses-list">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectedYear={selectedYearHandler}
        />
        {props.expenses
          .filter(
            (expense) => expense.date.getFullYear() === parseInt(selectedYear)
          )
          .map((expense) => (
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

export default ExpenseList;
