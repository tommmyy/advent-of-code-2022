import path from 'path';

import fs from 'fs-extra';

import { part1, part2 } from './day4';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day4', () => {
  describe('1', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part1(input)).toBe(expected);
      });

    util(
      `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
      2,
    );

    util(realData, 464);
  });

  describe('2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part2(input)).toBe(expected);
      });
    util(
      `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
      4,
    );

    util(realData, 770);
  });
});
