import React from "react";
import "./styles/navbar.css";
import logo from "../assets/leaf+1.png";

function Nav({ setOpenPopup }) {
  const date = new Date();

  return (
    <div className="nav">
      <h1>
        {date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear()}
      </h1>
      <button onClick={() => setOpenPopup("on")}>Add an operation +</button>
    </div>
  );
}
export default Nav;
