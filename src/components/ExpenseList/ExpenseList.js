import React from "react";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const foodItem = props.data.filter((ele) => {
    if (ele.category === "Food Item") {
      return ele;
    } else {
      return false;
    }
  });

  const electronicItem = props.data.filter((ele) => {
    if (ele.category === "Electronic Item") {
      return ele;
    } else {
      return false;
    }
  });

  return (
    <div className="items">
      <ul className="items-list">
        <h3>Food Item</h3>
        {foodItem.map((data) => (
          <li key={Math.random().toString()}>
            {" "}
            Price {data.price} Product {data.product}
          </li>
        ))}
        <h3>Electronic Item</h3>
        {electronicItem.map((data) => (
          <li key={Math.random().toString()}>
            {" "}
            Price {data.price} Product {data.product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
