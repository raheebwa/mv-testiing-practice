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