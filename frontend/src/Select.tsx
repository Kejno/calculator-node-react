import React from 'react';

interface SelectProps {
  value: string;
  onChange(e: React.SyntheticEvent): void;
}

const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <select
      style={{ padding: '5px' }}
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
