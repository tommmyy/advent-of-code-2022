import path from 'path';
import util from 'util';

import fs from 'fs-extra';

import { part1, part2 } from './day7';

const realData = fs.readFileSync(path.join(__dirname, './input.txt'), {
  encoding: 'utf-8',
});

describe('day5', () => {
  describe('1', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part1(input);
        // console.log(util.inspect(result, false, null, true));
        expect(result).toBe(expected);
      });

    testUtil(
      `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
      95437,
    );

    testUtil(realData, 1454188);
  });

  describe('2', () => {
    const testUtil = (input, expected) =>
      it(`should return ${expected}`, () => {
        const result = part2(input);
        // console.log(util.inspect(result, false, null, true));
        expect(result).toBe(expected);
      });
    testUtil(
      `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
      24933642,
    );

    testUtil(realData, 4183246);
  });
});
