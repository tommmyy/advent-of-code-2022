const parse = input => {
  const init = [];
  const moves = [];

  let numbersLine;
  input.split('\n').forEach((next, line) => {
    if (numbersLine == null) {
      if (next.slice(1, 2) === '1') {
        numbersLine = line;
      } else {
        for (let j = 0; j <= next.length; j += 4) {
          const crate = next[(j, j + 1)];
          const k = j / 4;
          (init[k] = init[k] || []).unshift(crate);
        }
      }
    } else if (next && line > numbersLine + 1) {
      const parts = next.split(' ');
      moves.push([Number(parts[1]), Number(parts[3]), Number(parts[5])]);
    }
  }, []);
  return [init.map(xs => xs.filter(x => x !== ' ')), moves];
};

export const part1 = input => {
  const parsed = parse(input);

  const [init, moves] = parsed;
  const state = init;

  for (let i = 0; i < moves.length; i++) {
    const [moveCount, from, to] = moves[i];
    for (let j = 0; j < moveCount; j++) {
      const crate = state[from - 1].pop();
      state[to - 1].push(crate);
    }
  }

  return state.reduce((acc, next) => acc + next.pop(), '');
};

export const part2 = input => {
  const parsed = parse(input);

  const [init, moves] = parsed;
  const state = init;

  for (let i = 0; i < moves.length; i++) {
    const [moveCount, from, to] = moves[i];
    const l = state[from - 1].length;
    const crates = state[from - 1].splice(l - moveCount, moveCount);
    state[to - 1].push(...crates);
  }

  return state.reduce((acc, next) => acc + next.pop(), '');
};
