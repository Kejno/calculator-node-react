import React from "react";

const Input = ({ value, label, onChange }) => (
  <div className="inputWrapper">
    <label htmlFor={value}>{label} </label>
    <input value={value} type="number" id="input1" onChange={onChange} />
  </div>
);

export default Input;
