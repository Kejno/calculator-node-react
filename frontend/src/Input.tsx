import React from 'react';

interface InputProps {
  value: string;
  label: string;
  onChange(e: React.SyntheticEvent): void;
}

const Input: React.FC<InputProps> = ({ value, label, onChange }) => (
  <div className="inputWrapper">
    <label htmlFor={value}>{label} </label>
    <input value={value} type="text" id="input1" onChange={onChange} required />
  </div>
);

export default Input;
