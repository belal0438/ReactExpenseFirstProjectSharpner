import React from "react";
import Classes from "./Input.module.css";
// E:\ReactjsbySharpnerUdemyTrainer\TestQuestion1\expense\src\components\UI\Input\Input.css

const Input = (props) => {
  return (
    <div>
      <div className={`${Classes.formInput}`}>
        <label>{props.lebal}</label>
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
