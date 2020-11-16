import { SUM, SUB, MULTI, DIV } from './constants.js';

const isNumeric = (num) => !isNaN(parseFloat(num)) && isFinite(num);

export const calc = ({ operand, num1, num2 }, error = 'Invalid values') => {
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
          return 'Cannot divide by zero';
        }
        return value1 / value2;
      default:
        return error;
    }
  }
  return error;
};
