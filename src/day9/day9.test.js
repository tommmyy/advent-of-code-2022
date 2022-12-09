import path from 'path';
import util from 'util';

import fs from 'fs-extra';

import { part1, part2 } from './day9';

const log = x => util.inspect(x, false, null, true);

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day9', () => {
  // describe('1', () => {
  //   const testUtil = (input, expected) =>
  //     it(`should return ${expected}`, () => {
  //       const result = part1(input);
  //       log(result);
  //       expect(result).toBe(expected);
  //     });

  //   testUtil(
  //     `R 4
  // U 4
  // L 3
  // D 1
  // R 4
  // D 1
  // L 5
  // R 2`,
  //     13,
  //   );

  //   testUtil(realData, 5695);
  // });

  describe('2', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part2(input);
        expect(result).toBe(expected);
      });
    testUtil(
      `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,
      1,
    );
    testUtil(
      `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`,
      36,
    );

    testUtil(realData, 2434);
  });
});
