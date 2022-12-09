import { compose, map, split } from 'ramda';

const lineToNumbers = compose(map(Number), split(''));

const parse = compose(map(lineToNumbers), split('\n'));

export const part1 = input => {
  const visible = new Set();
  const decide = (input, x, y, state, slice) => {
    const value = input[y][x];
    if (input[y][x] > state[slice]) {
      visible.add(`${x}-${y}`);
      state[slice] = value;
    }
  };

  const parsed = parse(input);

  for (let y = 0; y < parsed.length; y++) {
    const state = Array(4).fill(-Infinity);

    for (let x = 0; x < parsed[y].length; x++) {
      const revX = parsed[y].length - x - 1;

      decide(parsed, x, y, state, 0);
      decide(parsed, revX, y, state, 1);
      decide(parsed, y, x, state, 2);
      decide(parsed, y, revX, state, 3);
    }
  }

  return visible.size;
};
export const part2 = input => {
  const scores = {};

  const decide = (input, x, y, step) => {
    let score = 0;

    const value = input[y][x];
    for (
      let offset = x;
      input[y][offset] != null && value >= input[y][offset];
      offset += step, score++
    ) {}

    console.log({ score, x, y });
    scores[`${x}-${y}`] = (scores[`${x}-${y}`] || 1) * score;
  };

  const parsed = parse(input);

  for (let y = 0; y < parsed.length; y++) {
    for (let x = 0; x < parsed[y].length; x++) {
      const revX = parsed[y].length - x - 1;

      decide(parsed, x, y, -1);
      // decide(parsed, revX, y, 1);
      // decide(parsed, y, x, -1);
      // decide(parsed, y, revX, 1);
    }
  }
  return Math.max(...Object.values(scores));
};
