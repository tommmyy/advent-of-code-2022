import path from 'path';
import util from 'util';

import fs from 'fs-extra';

import { part1, part2 } from './day10';

const log = x => util.inspect(x, false, null, true);

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day10', () => {
  // describe('1', () => {
  //   const testUtil = (input, expectedX, expectedSignal) =>
  //     it(`should return X: ${expectedX} and signal: ${expectedSignal}`, () => {
  //       const result = part1(input);

  //       expect(result).toEqual([expectedX, expectedSignal]);
  //     });

  //   testUtil(
  //     `noop
  // addx 3
  // addx -5`,
  //     -1,
  //     0,
  //   );
  //   testUtil(
  //     `addx 15
  // addx -11
  // addx 6
  // addx -3
  // addx 5
  // addx -1
  // addx -8
  // addx 13
  // addx 4
  // noop
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx -35
  // addx 1
  // addx 24
  // addx -19
  // addx 1
  // addx 16
  // addx -11
  // noop
  // noop
  // addx 21
  // addx -15
  // noop
  // noop
  // addx -3
  // addx 9
  // addx 1
  // addx -3
  // addx 8
  // addx 1
  // addx 5
  // noop
  // noop
  // noop
  // noop
  // noop
  // addx -36
  // noop
  // addx 1
  // addx 7
  // noop
  // noop
  // noop
  // addx 2
  // addx 6
  // noop
  // noop
  // noop
  // noop
  // noop
  // addx 1
  // noop
  // noop
  // addx 7
  // addx 1
  // noop
  // addx -13
  // addx 13
  // addx 7
  // noop
  // addx 1
  // addx -33
  // noop
  // noop
  // noop
  // addx 2
  // noop
  // noop
  // noop
  // addx 8
  // noop
  // addx -1
  // addx 2
  // addx 1
  // noop
  // addx 17
  // addx -9
  // addx 1
  // addx 1
  // addx -3
  // addx 11
  // noop
  // noop
  // addx 1
  // noop
  // addx 1
  // noop
  // noop
  // addx -13
  // addx -19
  // addx 1
  // addx 3
  // addx 26
  // addx -30
  // addx 12
  // addx -1
  // addx 3
  // addx 1
  // noop
  // noop
  // noop
  // addx -9
  // addx 18
  // addx 1
  // addx 2
  // noop
  // noop
  // addx 9
  // noop
  // noop
  // noop
  // addx -1
  // addx 2
  // addx -37
  // addx 1
  // addx 3
  // noop
  // addx 15
  // addx -21
  // addx 22
  // addx -6
  // addx 1
  // noop
  // addx 2
  // addx 1
  // noop
  // addx -10
  // noop
  // noop
  // addx 20
  // addx 1
  // addx 2
  // addx 2
  // addx -6
  // addx -11
  // noop
  // noop
  // noop`,
  //     17,
  //     13140,
  //   );
  //   testUtil(realData, 36, 11720);
  // });

  describe('2', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part2(input);
        console.log(result);
        expect(result).toBe(expected);
      });

    testUtil(
      `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,
      `##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....\n`,
    );

    testUtil(
      realData,
      `####.###...##..###..####.###...##....##.
#....#..#.#..#.#..#.#....#..#.#..#....#.
###..#..#.#....#..#.###..#..#.#.......#.
#....###..#....###..#....###..#.......#.
#....#.#..#..#.#.#..#....#....#..#.#..#.
####.#..#..##..#..#.####.#.....##...##..\n`,
    );
  });
});
