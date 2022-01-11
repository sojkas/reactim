import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseDate = new Date(2021, 4, 27);
  const expenseTitle = "Pojisteni auta";
  const expensePrice = 8535;
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        date={expenseDate.toLocaleDateString()}
        title={expenseTitle}
        amount={expensePrice}
      ></ExpenseItem>
    </div>
  );
}

export default App;
