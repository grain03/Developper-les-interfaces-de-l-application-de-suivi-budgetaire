import React from "react";
import "./styles/Form.css";
import { useState } from "react";

function Form({
  operation,
  setoperation,
  setOpenPopup,
  setIncomes,
  setexpenses,
  incomes,
  expenses,
  setnewcat,
  categories,
}) {
  const today = new Date();
  let newcat;
  console.log(categories);

  const [errmessage, setmessage] = useState("");

  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
  const [type, settype] = useState("");
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");

  const [date, setdate] = useState(
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  );
  let newcategory;
  let add;
  function formSubmit(e) {
    e.preventDefault();
    if (
      name == "" ||
      amount == 0 ||
      type == "false" ||
      category == "false" ||
      desc == ""
    ) {
      setmessage("Nb: All inputs must be filled!");
    } else {
      setoperation([
        ...operation,
        {
          name: name,
          amount: amount,
          type: type,
          category: category,
          desc: desc,
          date: date,
        },
      ]);
      setOpenPopup("off");
    }

    if (type == "income") {
      setIncomes([...incomes, { amount: amount }]);
    }
    if (type == "expense") {
      setexpenses([...expenses, { amount: amount }]);
    }
  }

  return (
    <div className="Form">
      <form onSubmit={(e) => formSubmit(e)}>
        <div className="form_header">
          <h1>Add a new operation</h1>
          <button onClick={() => setOpenPopup("off")}>X</button>
        </div>
        {errmessage !== "" ? <p className="message">{errmessage}</p> : null}

        <input
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Name this operation"
        />
        <input
          type="number"
          onChange={(e) => setamount(e.target.value)}
          placeholder="Amount"
        />
        <select onChange={(e) => settype(e.target.value)}>
          <option value="false" selected disabled>
            Type
          </option>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        <div className="add_category">
          <input
            onChange={(e) => {
              newcategory = e.target.value;
              newcategory == "" ? (add = false) : (add = true);
            }}
            placeholder="Add New category"
            type="text"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              add !== true
                ? setmessage("Nb: Category cannot be empty")
                : setnewcat([...categories, { category: newcategory }]);
            }}
          >
            New
          </button>
        </div>
        <select onChange={(e) => setcategory(e.target.value)}>
          <option value="false" selected disabled>
            Category
          </option>
          {categories.map((cat) => (
            <option value={cat.category}>{cat.category}</option>
          ))}
        </select>
        <input
          type="text"
          onChange={(e) => setdesc(e.target.value)}
          placeholder="Description"
        />
        <button onClick={formSubmit} className="submite">
          Add this operation
        </button>
      </form>
    </div>
  );
}

export default Form;
