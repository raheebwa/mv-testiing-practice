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

test('With Shift 2, az should become cb (Test Wrap)', () => {
  expect(ceasar.cipher('az', 2)).toBe('cb');
});


test('With Shift 3, AZ should become CB (Test Wrap)', () => {
  expect(ceasar.cipher('AZ', 2)).toBe('CB');
});


test('With Shift 3, abcdeFghijklmnopqrstuvwxyz should return defghijklmnopqrstuvwxyzabc (Can Wrap)', () => {
  expect(ceasar.cipher('abcdeFghijklmnopqrstuvwxyz', 3)).toBe('defghIjklmnopqrstuvwxyzabc');
});

test('Hello, World! returns Mjqqt, Ctwqi!', () => {
  expect(ceasar.cipher('Hello, Zorld!', 5)).toBe('Mjqqt, Btwqi!');
});