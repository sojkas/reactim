import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpesesChart from "./ExpensesChart";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  
  const selectedYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  
  const filteredExpenses = (props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  }));

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onSelectedYear={selectedYearHandler}
      />
      <ExpesesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
