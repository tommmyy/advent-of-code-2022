import path from 'path';

import fs from 'fs-extra';

import { getScore, getScore2 } from './day2';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day2', () => {
  describe('getScore', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(getScore(input)).toBe(expected);
      });

    util(
      `A Y
B X
C Z`,
      15,
    );

    util(realData, 10816);
  });

  describe('getScore2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(getScore2(input)).toBe(expected);
      });

    util(
      `A Y
B X
C Z`,
      12,
    );

    util(realData, 11657);
  });
});
