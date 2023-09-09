import React, { useState } from "react";
import "./App.css";
import ExpensForm from "./components/ExpenseForm/ExpensForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";

function App() {
  const [formData, setFormData] = useState([]);

  const FormData = (formData) => {
    setFormData((prevData) => {
      return [...prevData, formData];
    });
  };

  return (
    <div className="App">
      <ExpensForm sendtDataToApp={FormData} />
      <ExpenseList data={formData} />
    </div>
  );
}

export default App;
