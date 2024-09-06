// TODO: remove export once I debugged this with vitest
export function expectedScore(
  oppositionRatings: number[],
  ownRating: number,
): number {
  console.assert(oppositionRatings.length > 0);
  // from wikipedia: https://en.wikipedia.org/wiki/Performance_rating_(chess)
  let expScores = oppositionRatings.map(
    (oppRating) => 1 / (1 + 10 ** ((oppRating - ownRating) / 400)),
  );
  const expScore = expScores.reduce((acc, n) => acc + n, 0);
  console.log("inside expectedScore function:", {
    oppositionRatings,
    ownRating,
    expScores,
    expScore,
  });
  return expScore;
}

// TODO: remove export once I debugged this with vitest
export function binarySearch(
  lo: number,
  hi: number,
  func: (x: number) => number,
  eps: number = 0.001,
): number {
  // func must be an increasing function. goal should be f(x) = 0
  let x: number = (lo + hi) / 2;
  while (hi - lo > eps) {
    x = (lo + hi) / 2;
    console.log("Logging x:", { x, "f(x)": func(x) });

    if (func(x) < 0) {
      lo = x;
    } else {
      hi = x;
    }
  }

  return Math.round(x);
}

// TODO: remove export once I debugged this with vitest
export function calcPerformanceRatingForIndividual(
  opponentsRatings: number[],
  actualScore: number,
): number {
  const func = (myRating: number) =>
    expectedScore(opponentsRatings, myRating) - actualScore;
  console.log("hmmm: ", {
    opponentsRatings,
    actualScore,
    "expectedScore with 2000": expectedScore(opponentsRatings, 2000),
  });
  return binarySearch(0, 4000, func);
}

/** Returns a list of ratings corresponding to the same scores.  */
export function calcPerformanceRatingForAll(
  scores: number[],
  prevRatings: number[] = [],
  maxIter: number = 10,
): number[] {
  if (scores.length !== prevRatings.length) {
    if (prevRatings.length !== 0) {
      console.warn(
        "Scores and ratings should be the same length. Falling back to default.",
      );
    }
    prevRatings = Array(scores.length).fill(2000);
  }
  if (scores.length < 2) {
    return scores;
  }

  // TODO: compare curRatings to prevRatings to maybe end early.
  let curRatings = [...prevRatings];
  for (let _ = 0; _ < maxIter; ++_) {
    for (let j = 0; j < curRatings.length; ++j) {
      const otherRatings = curRatings.toSpliced(j, 1);
      curRatings[j] = calcPerformanceRatingForIndividual(
        otherRatings,
        scores[j],
      );
    }
  }

  return curRatings;
}
