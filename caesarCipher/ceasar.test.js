import ceasar from './ceasar';


test('abcd should return bcde', () => {
  expect(ceasar.cipher('abcd')).toBe('bcde');
});

test('abcd ef!! should return bcde fg!! (Minding punctuation)', () => {
  expect(ceasar.cipher('abcd ef1!')).toBe('bcde fg1!');
});

test('Abcd Ee should return Bcde Ff (Minding case)', () => {
  expect(ceasar.cipher('Abcd Ee')).toBe('Bcde Ff');
});

test('abcdefghijklmnopqrstuvwxyz should return bcdefghijklmnopqrstuvwxyza (Can Wrap)', () => {
  expect(ceasar.cipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('With Shift 2, abcd should become cdef', () => {
  expect(ceasar.cipher('abcd', 2)).toBe('cdef');
});

test('With Shift 2, abcdz should become cdefb (Test Wrap)', () => {
  expect(ceasar.cipher('abcdz', 2)).toBe('cdefb');
});

test('With Shift 2, AAbcdzZ should become CCdefbZ (Test Wrap)', () => {
  expect(ceasar.cipher('AAbcdzZ', 2)).toBe('CCdefbB');
});
