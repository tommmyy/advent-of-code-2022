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
      if (sums.length) {
        let j = 0;
        while (sums[j] < sum) {
          j++;
        }
        sums.splice(j, 0, sum);
      } else {
        sums.push(sum);
      }
      sum = 0;
    } else {
      sum += numbers[i];
    }
  }

  return sums.slice(-3).reduce((x, y) => x + y);
};
