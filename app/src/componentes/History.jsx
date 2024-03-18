import React from "react";
import "./styles/history.css";

function History({ operation }) {
  return (
    <>
      <div className="history">
        <h1 className="title">History</h1>
        <div className="history_header">
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Type</h1>
          <h1>Category</h1>
          <p>Description</p>
          <h1>Date</h1>
        </div>
        {operation.map((op) => (
          <div
            className="histories"
            style={
              op.type === "income"
                ? { backgroundColor: "#219dbc76" }
                : { backgroundColor: "#d095836a" }
            }
          >
            <h1>{op.name}</h1>
            <h1>{op.amount}</h1>
            <h1>{op.type}</h1>
            <h1>{op.category}</h1>
            <p>{op.desc}</p>
            <h1>{op.date}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default History;
