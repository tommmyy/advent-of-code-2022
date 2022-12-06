const parse = input => input.split('');

const compute = (input, scanNumberOfChars) => {
  const parsed = parse(input);
  a: for (let i = scanNumberOfChars - 1; i < parsed.length; i++) {
    const cache = { [parsed[i]]: true };
    for (let j = i - scanNumberOfChars + 1; j < i; j++) {
      if (cache[parsed[j]]) {
        continue a;
      }
      cache[parsed[j]] = true;
    }
    return i + 1;
  }
};

export const part1 = input => compute(input, 4);
export const part2 = input => compute(input, 14);
