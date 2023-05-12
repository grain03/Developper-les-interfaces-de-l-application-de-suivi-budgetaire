import "./App.css";
import { useState } from "react";
import Nav from "./componentes/Nav.jsx";
import Stats from "./componentes/Stats.jsx";
import Form from "./componentes/Form.jsx";
import History from "./componentes/History";

function App() {
  const [operation, setoperation] = useState([]);
  const [OpenPopup, setOpenPopup] = useState("off");
  const [incomes, setIncomes] = useState([]);
  const [expenses, setexpenses] = useState([]);

  console.log(incomes);

  return (
    <div>
      <Nav setOpenPopup={setOpenPopup} />
      <Stats operation={operation} incomes={incomes} expenses={expenses} />

      <History operation={operation} />
      {OpenPopup === "on" && (
        <Form
          operation={operation}
          setoperation={setoperation}
          setOpenPopup={setOpenPopup}
          setIncomes={setIncomes}
          setexpenses={setexpenses}
          incomes={incomes}
          expenses={expenses}
        />
      )}
    </div>
  );
}

export default App;
