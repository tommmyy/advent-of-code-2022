import path from 'path';

import fs from 'fs-extra';

import { getElf, getElf2 } from './day1';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day1', () => {
  describe('getElf', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(getElf(input)).toBe(expected);
      });

    util(
      `1000
2000
3000
4000
5000
6000
7000
8000
9000
10000`,
      24000,
    );

    util(realData, 70720);
  });

  describe('getElf2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(getElf2(input)).toBe(expected);
      });

    util(
      `1000
2000
3000
4000
5000
6000
7000
8000
9000
10000`,
      45000,
    );

    util(realData, 207148);
  });
});
