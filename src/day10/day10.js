import { addIndex, compose, filter, map, reduce, split } from 'ramda';

const parse = compose(
  map(compose(([x, y]) => (y ? [x, Number(y)] : [x]), split(' '))),
  filter(Boolean),
  split('\n'),
);

const compute = compose(
  addIndex(reduce)(
    ([x, signalSum], instruction, i) => {
      let newX = x;
      let newSignalSum = signalSum;

      if ((i + 21) % 40 === 0) {
        newSignalSum += (i + 1) * x;
      }
      if (instruction) {
        const [, arg] = instruction;
        newX += arg;
      }
      return [newX, newSignalSum];
    },
    [1, 0],
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

export const part1 = input => {
  const result = compose(compute)(input);
  // TODO
  return result;
};

export const part2 = input => {
  const result = compute(input);
  // TODO
  return result;
};
