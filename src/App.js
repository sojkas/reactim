import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummy_data = [
  {
    id: "e1",
    title: "Pojisteni auto",
    price: 8535,
    date: new Date(2022, 4, 27),
  },
  {
    id: "e2",
    title: "Nova televize",
    price: 25328,
    date: new Date(2020, 1, 12),
  },
  { id: "e3", title: "Sedacka", price: 11254, date: new Date(2021, 8, 18) },
  {
    id: "e4",
    title: "Skrin na saty",
    price: 5587,
    date: new Date(2022, 9, 3),
  },
];
const App = () => {
  const [expenses, setExpences] = useState(dummy_data);

  const saveExpenseHandler = (expense) => {
    setExpences((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={saveExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
