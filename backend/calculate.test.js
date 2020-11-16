import { calc } from './calculate';
test('Calculate should return sum of two values', () => {
  expect(calc({ operand: 'sum', num1: '5', num2: '23' })).toBe(28);
  expect(calc({ operand: 'sum', num1: 12, num2: 34 })).toBe(46);
  expect(calc({ operand: 'sum', num1: 0.2, num2: 0.5 })).toBe(0.7);
  expect(calc({ operand: 'sum', num1: 6, num2: '23' })).toBe(29);
  expect(calc({ operand: '  sum ', num1: 6, num2: 4 })).toBe('Invalid values');
  expect(calc({ operand: 'sum', num1: '        5', num2: '11' })).toBe(16);
  expect(calc({ operand: 'sum', num1: null, num2: '23' })).toBe(
    'Invalid values'
  );
  expect(calc({ operand: 'sum', num1: '6gg', num2: '23' })).toBe(
    'Invalid values'
  );
});

test('Calculate should return sub of two values', () => {
  expect(calc({ operand: 'sub', num1: '5', num2: '10' })).toBe(-5);
  expect(calc({ operand: 'sub', num1: 43, num2: 33 })).toBe(10);
  expect(calc({ operand: 'sub', num1: null, num2: '23v' })).toBe(
    'Invalid values'
  );
});

test('Calculate should return multiply of two values', () => {
  expect(calc({ operand: 'multi', num1: '5', num2: '20' })).toBe(100);
  expect(calc({ operand: 'multi', num1: 1.43, num2: 2.3 })).toBeCloseTo(3.289);
  expect(calc({ operand: 'multi', num1: null, num2: '23v' })).toBe(
    'Invalid values'
  );
});

test('Calculate should return devide of two values', () => {
  expect(calc({ operand: 'div', num1: '20', num2: '5' })).toBeCloseTo(4);
  expect(calc({ operand: 'div', num1: 50, num2: '10' })).toBe(5);
  expect(calc({ operand: 'div', num1: 50, num2: 0 })).toBe(
    'Cannot divide by zero'
  );
  expect(calc({ operand: 'div', num1: 4.8, num2: '2' })).toBeCloseTo(2.4);
  expect(calc({ operand: 'div', num1: null, num2: '23v' })).toBe(
    'Invalid values'
  );
});
