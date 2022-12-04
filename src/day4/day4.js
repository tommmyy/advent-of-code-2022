const parse = input =>
  input.split('\n').reduce((xs, next) => {
    if (next) {
      xs.push(next.split(',').map(x => x.split('-').map(Number)));
    }
    return xs;
  }, []);

export const part1 = input => {
  const len = ([a, b]) => b - a;
  const parsed = parse(input);

  let score = 0;

  for (let i = 0; i < parsed.length; i++) {
    const intervals = parsed[i];

    const shouldSwap = len(intervals[0]) > len(intervals[1]);
    const greater = +!shouldSwap;
    const smaller = +shouldSwap;

    score +=
      intervals[smaller][0] >= intervals[greater][0] &&
      intervals[smaller][1] <= intervals[greater][1];
  }

  return score;
};

export const part2 = input => {
  const parsed = parse(input);
  let score = 0;
  for (let i = 0; i < parsed.length; i++) {
    const intervals = parsed[i];
    const shouldSwap = intervals[0][0] > intervals[1][0];
    score += intervals[+shouldSwap][1] >= intervals[+!shouldSwap][0];
  }
  return score;
};
