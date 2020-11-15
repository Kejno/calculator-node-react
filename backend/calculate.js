import { SUM, SUB, MULTI, DIV } from './constants.js';

function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

export const calc = ({ operand, num1, num2 }) => {
  const value1 = +num1;
  const value2 = +num2;

  if (isNumeric(num1) && isNumeric(num2)) {
    switch (operand) {
      case SUM:
        return value1 + value2;
      case SUB:
        return value1 - value2;
      case MULTI:
        return value1 * value2;
      case DIV:
        if (value2 === 0) {
          return 'На 0 делить нельзя!!!';
        }
        return (value1 / value2).toFixed(3);
      default:
        return;
    }
  }
  return 'Invalid inputs';
};
