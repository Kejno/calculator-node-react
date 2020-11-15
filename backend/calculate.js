import { SUM, SUB, MULTI, DIV } from "./constants.js";

export const calc = ({ operand, num1, num2 }) => {
  const value1 = +num1;
  const value2 = +num2;
  switch (operand) {
    case SUM:
      return value1 + value2;
    case SUB:
      return value1 - value2;
    case MULTI:
      return value1 * value2;
    case DIV:
      if (value2 === 0) {
        return "На 0 делить нельзя!!!";
      }
      return value1 / value2;
    default:
      return;
  }
};
