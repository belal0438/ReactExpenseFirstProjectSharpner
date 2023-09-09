import React, { useEffect, useState } from "react";
import "./App.css";
import ExpensForm from "./components/ExpenseForm/ExpensForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const getlocalData = () => {
  const listData = localStorage.getItem("data");
  if (listData) {
    return JSON.parse(listData);
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState(getlocalData());

  const FormData = (formData) => {
    setFormData((prevData) => {
      return [...prevData, formData];
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="App">
      <ExpensForm sendtDataToApp={FormData} />
      <ExpenseList data={formData} />
    </div>
  );
}

export default App;
