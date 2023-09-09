import React, { useState } from "react";
import "./ExpensForm.css";
import Classes from "../UI/Input/Input.module.css";
import Input from "../UI/Input/Input";

const ExpensForm = (props) => {
  const [enterdId, setEnterdId] = useState("");
  const [enterdPrice, setEnterdPrice] = useState("");
  const [enterdProduct, setEnterdProduct] = useState("");
  const [enterdCategory, setEnterdCategory] = useState("Food Item");

  const enterdIdHandler = (event) => {
    setEnterdId(event.target.value);
  };

  const enterdPriceHandler = (event) => {
    setEnterdPrice(event.target.value);
  };
  const enterProductdHandler = (event) => {
    setEnterdProduct(event.target.value);
  };

  const selectorItemHandler = (eve) => {
    setEnterdCategory(eve.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let obj = {
      id: enterdId,
      price: enterdPrice,
      product: enterdProduct,
      category: enterdCategory,
    };
    // console.log(obj);

    if (obj.id === "" || obj.price === "" || obj.product === "") {
      return alert("Pleasse Fill All Value");
    } else {
      props.sendtDataToApp(obj);
      setEnterdId("");
      setEnterdPrice("");
      setEnterdProduct("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          lebal="ID"
          type="type"
          value={enterdId}
          onChange={enterdIdHandler}
        />
        <Input
          lebal="Selling Price"
          type="number"
          value={enterdPrice}
          onChange={enterdPriceHandler}
        />
        <Input
          lebal="Product Name"
          type="text"
          value={enterdProduct}
          onChange={enterProductdHandler}
        />
        <div className={`${Classes.formInput}`}>
          <label>Category:</label>
          <select value={enterdCategory} onChange={selectorItemHandler}>
            <option value="Food Item">Food Item</option>
            <option value="Electronic Item">Electronic Item</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ExpensForm;
