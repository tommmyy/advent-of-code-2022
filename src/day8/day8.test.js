import path from 'path';
import util from 'util';

import fs from 'fs-extra';

import { part1, part2 } from './day8';

const log = x => util.inspect(x, false, null, true);

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day8', () => {
  describe('1', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part1(input);
        log(result);
        expect(result).toBe(expected);
      });

    testUtil(
      `input
`,
      95437,
    );

    testUtil(realData, 1454188);
  });

  describe('2', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part2(input);
        expect(result).toBe(expected);
      });

    testUtil(
      `input
`,
      95437,
    );

    testUtil(realData, 1454188);
  });
});
