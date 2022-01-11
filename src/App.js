import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Pojisteni auto",
      price: 8535,
      date: new Date(2021, 4, 27),
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
      date: new Date(2021, 9, 3),
    },
  ];

  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
