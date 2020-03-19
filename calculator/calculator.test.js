import calc from './calculator';

test('sum of 1 and 2 to be 3', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('diff of 4 and 1 to be 3', () => {
  expect(calc.diff(4, 1)).toBe(3);
});

test('Product of 12 and 2 to be 24', () => {
  expect(calc.pdt(12, 2)).toBe(24);
});

test('Quotient of 44 and 2 to be 22', () => {
  expect(calc.qtt(44, 2)).toBe(22);
});