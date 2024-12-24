import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <nav>
        <Link className="topbar-link" to="/">Home</Link>
        <Link className="topbar-link" to="/addIncome">Add Income</Link>
        <Link className="topbar-link" to="/addExpense">Add Expense</Link>
      </nav>
      {/* <label>Home</label>
      <label>Add Expense</label>
      <label>Add Income</label> */}
    </div>
  );
};

export default Topbar;
