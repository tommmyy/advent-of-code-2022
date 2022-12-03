import path from 'path';

import fs from 'fs-extra';

import { part1, part2 } from './day3';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day3', () => {
  describe('1', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part1(input)).toBe(expected);
      });

    util(
      `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
      157,
    );

    util(realData, 8394);
  });

  describe('2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part2(input)).toBe(expected);
      });

    util(
      `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`,
      18,
    );
    util(
      `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
      52,
    );
    util(
      `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
      70,
    );

    util(realData, 2413);
  });
});
