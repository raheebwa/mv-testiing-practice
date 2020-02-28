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
        if (str[ind] === 'z') {
          str[ind] = refLower[shift - 1 + ceasar.getIndex(refLower, 'a')];
        } else {
          val = val.toLowerCase();
          str[ind] = refLower[shift + ceasar.getIndex(refLower, val)];
        }
      } else if (str[ind].match(/[A-Z]/)) {
        if (str[ind] === 'Z') {
          str[ind] = refUpper[shift - 1 + ceasar.getIndex(refUpper, 'A')];
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