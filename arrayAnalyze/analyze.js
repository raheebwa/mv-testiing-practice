const analyse = (arr) => {
  const analysis = {};

  analysis.length = arr.length;
  analysis.min = Math.min(...arr);
  analysis.max = Math.max(...arr);
  analysis.average = arr.reduce((a, b) => a + b, 0) / arr.length;

  return analysis;
};

export default analyse;