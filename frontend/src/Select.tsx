import React from "react";

type SelectProps = {
  value: string;
  onChange: any;
};

const Select = ({ value, onChange }: SelectProps) => {
  return (
    <select
      style={{ padding: "5px" }}
      value={value}
      name="calc"
      onChange={onChange}
    >
      <option value="sum">+</option>
      <option value="sub">-</option>
      <option value="multi">*</option>
      <option value="div">/</option>
    </select>
  );
};

export default Select;
