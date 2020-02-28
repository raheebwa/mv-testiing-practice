const refLower = 'abcdefghijklmnopqrstuvwxyz';
const refUpper = refLower.toUpperCase();

const ceasar = {
  getIndex(arr, value) {
    return arr.split('').indexOf(value);
  },
  cipher(str, shift = 1) {
    const ciphered = [];
    str = str.split('');
    str.forEach((val, ind) => {
      if (str[ind].match(/[a-z]/)) {
        if (ceasar.getIndex(refLower, str[ind]) >= 26 - shift) {
          str[ind] = refLower[ind % (26 - shift)];
        } else {
          val = val.toLowerCase();
          str[ind] = refLower[shift + ceasar.getIndex(refLower, val)];
        }
      } else if (str[ind].match(/[A-Z]/)) {
        if (ceasar.getIndex(refUpper, str[ind]) >= 26 - shift) {
          str[ind] = refUpper[ind % (26 - shift)];
        } else {
          val = val.toUpperCase();
          str[ind] = refUpper[shift + ceasar.getIndex(refUpper, val)];
        }
      }
      ciphered.push(str[ind]);
    });

    return ciphered.join('');
  },
  decipher() {

  },
};

export default ceasar;

// console.log(ceasar.cipher('AazZ'))