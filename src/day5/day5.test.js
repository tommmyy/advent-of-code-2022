import path from 'path';

import fs from 'fs-extra';

import { part1, part2 } from './day5';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day5', () => {
  describe('1', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part1(input)).toBe(expected);
      });

    util(
      `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
      'CMZ',
    );

    util(realData, 'WSFTMRHPP');
  });

  describe('2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part2(input)).toBe(expected);
      });

    util(
      `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
      'MCD',
    );

    util(realData, 'GSLCMFBRP');
  });
});
