const parse = input =>
  input.split('\n').reduce((xs, next) => {
    if (next) {
      xs.push(next.split(/\s+/));
    }
    return xs;
  }, []);

const Scores = {
  A: 1,
  B: 2,
  C: 3,
};
const Translation = {
  X: 'A',
  Y: 'B',
  Z: 'C',
};

const computeScore = (movePlayer, moveOpponnent) => {
  let score = 0;

  const scoreMovePlayer = Scores[movePlayer];
  const scoreMoveOpponent = Scores[moveOpponnent];

  score += scoreMovePlayer;

  // 1 beats 3
  // 2 beats 1
  // 3 beats 2
  if (scoreMovePlayer === scoreMoveOpponent) {
    score += 3;
  } else if ((scoreMovePlayer + 2) % 3 === scoreMoveOpponent % 3) {
    // win
    score += 6;
  } else {
  }
  return score;
};

export const getScore = input => {
  const rounds = parse(input);
  let score = 0;

  for (let i = 0; i < rounds.length; i++) {
    const [moveOpponnent, movePlayer] = rounds[i];

    score += computeScore(Translation[movePlayer], moveOpponnent);
  }
  return score;
};

export const getScore2 = input => {
  // x - loose
  // y - draw
  // z - win
  const rounds = parse(input);
  const ScoresResult = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  let score = 0;
  for (let i = 0; i < rounds.length; i++) {
    const [moveOpponent, shouldResult] = rounds[i];

    score += ScoresResult[shouldResult];
    const O = Scores[moveOpponent];
    const P =
      ((O + (shouldResult === 'X' ? 1 : shouldResult === 'Y' ? 2 : 0)) % 3) + 1;

    score += P;
  }
  return score;
};
