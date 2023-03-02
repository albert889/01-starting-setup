import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEneteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isShown, setIsShown] = useState(false);

  const titleChangeHandler = (event) => {
    setEneteredtitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEneteredtitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showNewExpenseFormHandler = () => {
    setIsShown(true);
  };

  const hideNewExpenseFormHandler = () => {
    setIsShown(false);
  };

  let newExpenseForm;
  let hideNewExpenseBtn;
  let addNewExpenseBtn = (
    <div className="add-new-expense__actions" onClick={showNewExpenseFormHandler}>
      <button>Add New Expense</button>
    </div>
  );
  
  if (isShown) {
    addNewExpenseBtn = hideNewExpenseBtn;
    newExpenseForm = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideNewExpenseFormHandler}>Cancel</button>
          <button type="submit" onSubmit={hideNewExpenseFormHandler}>Add Expense</button>
        </div>
      </form>
    );    
  }

  return (
    <div>
      {addNewExpenseBtn}
      {newExpenseForm}       
    </div>
  );
}

export default ExpenseForm;
