/* eslint-disable no-console */
import { compose, filter, map, reduce, split, times } from 'ramda';

const parse = compose(
  map(compose(([a, b]) => [a, Number(b)], split(' '))),
  filter(Boolean),
  split('\n'),
);

const DIR_DIFF = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
const follow = (h, t) => {
  const diffX = t[0] - h[0];
  const diffY = t[1] - h[1];
  if (Math.abs(diffY) > 1 && Math.abs(diffX) > 1) {
    t[0] = t[0] - diffX / Math.abs(diffX);
    t[1] = t[1] - diffY / Math.abs(diffY);
  } else if (Math.abs(diffY) > 1) {
    t[0] = h[0];
    t[1] -= diffY / Math.abs(diffY);
  } else if (Math.abs(diffX) > 1) {
    t[0] -= diffX / Math.abs(diffX);
    t[1] = h[1];
  }
};

export const part1 = input => {
  const parsed = parse(input);

  const output = parsed.reduce(
    (state, [direction, steps]) => {
      const { t, h, positions } = state;
      for (let i = 0; i < steps; i++) {
        const diff = DIR_DIFF[direction];
        h[0] += diff[0];
        h[1] += diff[1];
        follow(h, t);
        positions.add(`${t[0]};${t[1]}`);
      }

      return state;
    },
    {
      ts: times(() => [0, 0], 10),
      positions: ['0;0'],
    },
  );

  return output.positions.size;
};

// const CHARS = 5;
// const draw = ts => {
//   let s = '';

//   for (let y = 0; y <= CHARS; y++) {
//     let row = '';
//     for (let x = 0; x <= CHARS; x++) {
//       let found = null;
//       for (let z = 0; z < ts.length; z++) {
//         if (ts[z][0] === x && ts[z][1] === y) {
//           found = `${z}`;
//         }
//       }
//       row += found != null ? found : '.';
//     }
//     s = `${row}\n${s}`;
//   }
//   console.log(s);
// };

export const part2 = compose(
  x => x.positions.length,
  reduce(
    (state, [direction, steps]) => {
      const ts = map(x => [...x], state.ts);
      const positions = [...state.positions];

      for (let i = 0; i < steps; i++) {
        const diff = DIR_DIFF[direction];
        ts[0][0] += diff[0];
        ts[0][1] += diff[1];
        for (let i = 1; i < ts.length; i++) {
          follow(ts[i - 1], ts[i]);
          // draw(ts)
        }
        const key = `${ts[9][0]};${ts[9][1]}`;

        if (positions.indexOf(key) === -1) {
          positions.push(key);
        }
      }
      return { ts, positions };
    },
    {
      ts: times(() => [0, 0], 10),
      positions: ['0;0'],
    },
  ),
  parse,
);
