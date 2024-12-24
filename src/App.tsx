import React from "react";
import "./App.css";
import Layout from "./layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddIncome from "./pages/AddIncome";
import AddExpense from "./pages/AddExpense";
import Topbar from "./layouts/components/Topbar";

function App() {
  return (
    <BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Topbar/>
    <div style={{display: "flex",flex: "1 1 0%",padding: "20px",justifyContent: "center"}}>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/addIncome" element={<AddIncome/>}/>
      <Route path="/addExpense" element={<AddExpense/>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
