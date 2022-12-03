const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const part1 = input => {
  const parse = input =>
    input.split('\n').reduce((xs, next) => {
      if (next) {
        const at = next.length / 2;

        xs.push([next.slice(0, at), next.slice(-at)]);
      }
      return xs;
    }, []);
  const parsed = parse(input);
  let score = 0;

  for (let i = 0; i < parsed.length; i++) {
    const [a, b] = parsed[i];
    const as = a.split('');
    const bs = b.split('');

    let common;
    let j = 0;
    while (!common) {
      if (bs.indexOf(as[j]) !== -1) {
        common = as[j];
      }
      j++;
    }
    score += str.indexOf(common) + 1;
  }

  return score;
};

export const part2 = input => {
  let i = 0;
  const parse = input =>
    input.split('\n').reduce((xs, next) => {
      if (next) {
        if (i % 3 === 0) {
          xs.push([]);
        }
        i++;
        xs[xs.length - 1].push(next.split(''));
      }
      return xs;
    }, []);

  const parsed = parse(input);

  const getF = (x, char) => (x.indexOf(char) === -1 ? 0 : 1);

  let score = 0;

  for (let i = 0, l = parsed.length; i < l; i++) {
    const [a, b, c] = parsed[i];
    let foundChar;

    for (let j = 0, l = a.length; j < l && foundChar == null; j++) {
      const char = a[j];
      if (getF(b, char) + getF(c, char) === 2) {
        foundChar = char;
      }
    }
    score += str.indexOf(foundChar) + 1;
  }

  return score;
};
