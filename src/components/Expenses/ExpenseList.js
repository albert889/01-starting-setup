import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {  
  const selectedYearHandler = (selectedYear) => {    
    console.log("ExpenseList.js")
    console.log(selectedYear);    
  };  
  
  return (
    <div>
      <Card className="expenses-list">
        <ExpensesFilter onSelectedYear={selectedYearHandler}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default ExpenseList;
