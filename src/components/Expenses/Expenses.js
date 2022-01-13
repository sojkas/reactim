import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onSelectedYear={selectedYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
