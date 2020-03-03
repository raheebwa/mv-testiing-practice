const alphabetLowcase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpcase = alphabetLowcase.toUpperCase();

const caesar = {
  getIndex(alphabet, value) {
    return alphabet.indexOf(value); // you always pass a string with the alphabet
  },
  // the shift can also be to the left according to https://en.wikipedia.org/wiki/Caesar_cipher
  cipher(str, shift = 0) {
    let ciphered = '';

    str.split('').forEach((value, index) => {

      if (value.match(/[a-z]/)) { // you don't need to use str[ind]
        const indexAtAlphabet = caesar.getIndex(alphabetLowcase, value);

        if (indexAtAlphabet + shift >= 26) {
          ciphered += alphabetLowcase[(indexAtAlphabet + shift) % 26];
        } else if (indexAtAlphabet + shift < 0) {
          ciphered += alphabetLowcase[26 + indexAtAlphabet + shift];
          // for example, 'a' is at index 0, 0 - 1 = -1
          // and 26 - 1 = 25 and that gives 25
        } else {
          // just add the shift and swap
          ciphered += alphabetLowcase[shift + indexAtAlphabet];
        }
      } else if (value.match(/[A-Z]/)) {
        const indexAtAlphabet = caesar.getIndex(alphabetUpcase, value);

        if (indexAtAlphabet + shift >= 26) {
          ciphered += alphabetUpcase[(indexAtAlphabet + shift) % 26];
        } else if (indexAtAlphabet + shift < 0) {
          ciphered += alphabetUpcase[26 + indexAtAlphabet + shift];
        } else {
          ciphered += alphabetUpcase[shift + indexAtAlphabet];
        }
      }

    });

    // you only return the string because you are changing the
    // character itself in each iteration, and do not need to
    // create an unnecessary tracking collection
    return ciphered;
  },
};

export default caesar;

// console.log(caesar.cipher('AazZ', 1));