import { SUM, SUB, MULTI, DIV } from "./constants.js";

export const calc = ({ operand, v1, v2 }) => {
  const value1 = +v1;
  const value2 = +v2;
  switch (operand) {
    case SUM:
      return value1 + value2;
    case SUB:
      return value1 - value2;
    case MULTI:
      return value1 * value2;
    case DIV:
      return value1 / value2;
    default:
      return;
  }
};
