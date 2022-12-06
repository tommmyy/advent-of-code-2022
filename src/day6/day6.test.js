import path from 'path';

import fs from 'fs-extra';

import { part1, part2 } from './day6';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day5', () => {
  describe('1', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part1(input)).toBe(expected);
      });

    util('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7);
    util('bvwbjplbgvbhsrlpgdmjqwftvncz', 5);
    util('nppdvjthqldpwncqszvftbrmjlhg', 6);
    util('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10);
    util('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11);

    util(realData, 1623);
  });

  describe('2', () => {
    const util = (input, expected) =>
      it(`should return ${expected}`, () => {
        expect(part2(input)).toBe(expected);
      });

    util('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 19);
    util('bvwbjplbgvbhsrlpgdmjqwftvncz', 23);
    util('nppdvjthqldpwncqszvftbrmjlhg', 23);
    util('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29);
    util('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26);

    util(realData, 3774);
  });
});
