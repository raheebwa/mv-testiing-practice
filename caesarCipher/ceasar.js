const refLower = 'abcdefghijklmnopqrstuvwxyz';
const refUpper = refLower.toUpperCase();

const caesar = {
  getIndex(ref, value) {
    return ref.indexOf(value);
  },
  cipher(str, shift = 1) {
    let ciphered = '';

    str.split('').forEach((value) => {
      if (value.match(/[a-z]/)) {
        const indexAtStr = caesar.getIndex(refLower, value);

        if (indexAtStr + shift >= 26) {
          ciphered += refLower[(indexAtStr + shift) % 26];
        } else if (indexAtStr + shift < 0) {
          ciphered += refLower[26 + indexAtStr + shift];
        } else {
          ciphered += refLower[shift + indexAtStr];
        }
      } else if (value.match(/[A-Z]/)) {
        const indexAtStr = caesar.getIndex(refUpper, value);

        if (indexAtStr + shift >= 26) {
          ciphered += refUpper[(indexAtStr + shift) % 26];
        } else if (indexAtStr + shift < 0) {
          ciphered += refUpper[26 + indexAtStr + shift];
        } else {
          ciphered += refUpper[shift + indexAtStr];
        }
      } else {
        ciphered += value;
      }
    });
    return ciphered;
  },
};

export default caesar;