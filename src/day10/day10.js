import { addIndex, compose, filter, last, map, reduce, split } from 'ramda';

const parse = compose(
  map(compose(([x, y]) => (y ? [x, Number(y)] : [x]), split(' '))),
  filter(Boolean),
  split('\n'),
);

const compute = compose(
  addIndex(reduce)(
    (xs, instruction) => {
      let newX = last(xs);
      if (instruction) {
        const [, arg] = instruction;
        newX += arg;
      }
      return [...xs, newX];
    },
    [1],
  ),
  reduce((state, instruction) => {
    const [command] = instruction;
    if (command === 'noop') {
      state = [...state, null];
    } else if (command === 'addx') {
      state = [...state, null, instruction];
    }
    return state;
  }, []),
  parse,
);

export const part1 = compose(
  ([xs, signal]) => [last(xs), signal],
  addIndex(reduce)(
    ([xs, signal], x, i) => [
      [...xs, x],
      signal + ((i + 21) % 40 === 0 ? (i + 1) * x : 0),
    ],
    [[], 0],
  ),
  compute,
);

export const part2 = compose(
  addIndex(reduce)((output, x, i) => {
    if (i > 239) {
      return output;
    }
    const shouldDraw = i % 40 >= x - 1 && i % 40 <= x + 1;
    const sign = shouldDraw ? '#' : '.';
    return output + ((i + 1) % 40 === 0 ? `${sign}\n` : sign);
  }, ''),
  compute,
);
