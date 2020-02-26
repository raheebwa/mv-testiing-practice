
const capitalize = (myString) => {
  const strArr = myString.split('');
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join('');
};

export default capitalize;