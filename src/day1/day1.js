const getNumbers = input =>
  input.split('\n').map(x => (x === '' ? null : Number(x)));

export const getElf = input => {
  const numbers = getNumbers(input);

  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] == null) {
      max = sum > max ? sum : max;
      sum = 0;
    } else {
      sum += numbers[i];
    }
  }
  return max;
};

export const getElf2 = input => {
  const numbers = getNumbers(input);

  const sums = [];
  let sum = 0;

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] == null) {
      sums.push(sum);
      sum = 0;
    } else {
      sum += numbers[i];
    }
  }

  return sums
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((x, y) => x + y);
};
