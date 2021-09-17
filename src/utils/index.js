export const handleSumTotal = (array) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = array.reduce(reducer, 0);
  return sum;
};

export const hola = 'hola';
