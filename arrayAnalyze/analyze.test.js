import analyse from './analyze';

test('should return object with av, min, max, length', () => {
  expect(analyse([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});