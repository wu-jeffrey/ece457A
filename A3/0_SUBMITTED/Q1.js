////////////////////////////////////////////////////////////////////////////
////////// GIVENS //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const flow = [
  [0, 0, 5, 0, 5, 2, 10, 3, 1, 5, 5, 5, 0, 0, 5, 4, 4, 0, 0, 1],
  [0, 0, 3, 10, 5, 1, 5, 1, 2, 4, 2, 5, 0, 10, 10, 3, 0, 5, 10, 5],
  [5, 3, 0, 2, 0, 5, 2, 4, 4, 5, 0, 0, 0, 5, 1, 0, 0, 5, 0, 0],
  [0, 10, 2, 0, 1, 0, 5, 2, 1, 0, 10, 2, 2, 0, 2, 1, 5, 2, 5, 5],
  [5, 5, 0, 1, 0, 5, 6, 5, 2, 5, 2, 0, 5, 1, 1, 1, 5, 2, 5, 1],
  [2, 1, 5, 0, 5, 0, 5, 2, 1, 6, 0, 0, 10, 0, 2, 0, 1, 0, 1, 5],
  [10, 5, 2, 5, 6, 5, 0, 0, 0, 0, 5, 10, 2, 2, 5, 1, 2, 1, 0, 10],
  [3, 1, 4, 2, 5, 2, 0, 0, 1, 1, 10, 10, 2, 0, 10, 2, 5, 2, 2, 10],
  [1, 2, 4, 1, 2, 1, 0, 1, 0, 2, 0, 3, 5, 5, 0, 5, 0, 0, 0, 2],
  [5, 4, 5, 0, 5, 6, 0, 1, 2, 0, 5, 5, 0, 5, 1, 0, 0, 5, 5, 2],
  [5, 2, 0, 10, 2, 0, 5, 10, 0, 5, 0, 5, 2, 5, 1, 10, 0, 2, 2, 5],
  [5, 5, 0, 2, 0, 0, 10, 10, 3, 5, 5, 0, 2, 10, 5, 0, 1, 1, 2, 5],
  [0, 0, 0, 2, 5, 10, 2, 2, 5, 0, 2, 2, 0, 2, 2, 1, 0, 0, 0, 5],
  [0, 10, 5, 0, 1, 0, 2, 0, 5, 5, 5, 10, 2, 0, 5, 5, 1, 5, 5, 0],
  [5, 10, 1, 2, 1, 2, 5, 10, 0, 1, 1, 5, 2, 5, 0, 3, 0, 5, 10, 10],
  [4, 3, 0, 1, 1, 0, 1, 2, 5, 0, 10, 0, 1, 5, 3, 0, 0, 0, 2, 0],
  [4, 0, 0, 5, 5, 1, 2, 5, 0, 0, 0, 1, 0, 1, 0, 0, 0, 5, 2, 0],
  [0, 5, 5, 2, 2, 0, 1, 2, 0, 5, 2, 1, 0, 5, 5, 0, 5, 0, 1, 1],
  [0, 10, 0, 5, 5, 1, 0, 2, 0, 5, 2, 2, 0, 5, 10, 2, 2, 1, 0, 6],
  [1, 5, 0, 5, 1, 5, 10, 10, 2, 2, 5, 5, 5, 0, 10, 0, 0, 1, 6, 0]
]

const distance = [
  [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7],
  [1, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 4, 5, 4, 3, 4, 5, 6],
  [2, 1, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 4, 5, 4, 3, 4, 5],
  [3, 2, 1, 0, 1, 4, 3, 2, 1, 2, 5, 4, 3, 2, 3, 6, 5, 4, 3, 4],
  [4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3],
  [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6],
  [2, 1, 2, 3, 4, 1, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 4, 5],
  [3, 2, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 4],
  [4, 3, 2, 1, 2, 3, 2, 1, 0, 1, 4, 3, 2, 1, 2, 5, 4, 3, 2, 3],
  [5, 4, 3, 2, 1, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2],
  [2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 1, 2, 3, 4, 5],
  [3, 2, 3, 4, 5, 2, 1, 2, 3, 4, 1, 0, 1, 2, 3, 2, 1, 2, 3, 4],
  [4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 2, 3],
  [5, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 0, 1, 4, 3, 2, 1, 2],
  [6, 5, 4, 3, 2, 5, 4, 3, 2, 1, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1],
  [3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4],
  [4, 3, 4, 5, 6, 3, 2, 3, 4, 5, 2, 1, 2, 3, 4, 1, 0, 1, 2, 3],
  [5, 4, 3, 4, 5, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 0, 1, 2],
  [6, 5, 4, 3, 4, 5, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 0, 1],
  [7, 6, 5, 4, 3, 6, 5, 4, 3, 2, 5, 4, 3, 2, 1, 4, 3, 2, 1, 0],
]

// 5x4 matrix
const MAT_DIM_H = 5;
const MAT_DIM_V = 4;

function q1(_options) {
  options = {
    ...{
      tabuTenure: 10,
      useFrequencyTabu: false,
      useAspiration: false,
      maxIterations: 1000,
      dynamicTenureChangeProbability: 1, // 1% chance tabu tenure will change => 10 tenure changes over 1k iterations
      selectWholeNeighbourhood: true,
      neighborhoodSize: 100,
      initialSolution: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
      ],
    },
    ..._options
  }

  const tabuTenure = options.tabuTenure;
  const useFrequencyTabu = options.useFrequencyTabu;
  const useAspiration = options.useAspiration;
  const selectWholeNeighbourhood = options.selectWholeNeighbourhood;
  const neighborhoodSize = options.neighborhoodSize;
  const maxIterations = options.maxIterations;
  const initialSolution = options.initialSolution;
  const dynamicTenureChangeProbability = options.dynamicTenureChangeProbability;

  let dynamicTenure;
  if (Array.isArray(tabuTenure)) {

    dynamicTenure = randomNumberBetween(tabuTenure[0], tabuTenure[1])
  }

  tabuSearch();

  ////////////////////////////////////////////////////////////////////////////
  ////////// MAIN ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  function tabuSearch() {
    let tabuList = {};
    let frequencyList = {};
    let aspiration = Infinity;
    let currentSolution = initialSolution;
    let cost = Infinity;
    let iterations = 0;

    while (iterations < maxIterations) {
      // console.log('----------');
      // console.log('iteration: ', iterations);
      // console.log('solution: ', currentSolution);
      // console.log('cost: ', cost);

      const candidates = generatePermutations(currentSolution, frequencyList);
      let chosen = pickCandidate(candidates, tabuList, aspiration);
      updateTabuList(tabuList, chosen.swap);
      updateFrequencyList(frequencyList, chosen.swap);
      cost = chosen.cost;
      currentSolution = chosen.solution;

      if (useAspiration == 'bestSolutionSeen' && cost < aspiration) {
        aspiration = cost;
      }

      iterations++;
    }
    console.log('---- FINAL SOLUTION ----');
    console.log('iterations: ', iterations);
    console.log('solution: ', currentSolution);
    console.log('cost: ', cost);
  }

  ////////////////////////////////////////////////////////////////////////////
  ////////// TABU SEARCH FUNCTIONS ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  function generatePermutations(currentSolution, frequencyList) {
    candidates = [];
    for (let i1 = 0; i1 < MAT_DIM_H; i1++) {
      for (let j1 = 0; j1 < MAT_DIM_V; j1++) {
        for (let i2 = 0; i2 < MAT_DIM_H; i2++) {
          for (let j2 = 0; j2 < MAT_DIM_V; j2++) {
            const newSolution = swap(currentSolution, { i: i1, j: j1 }, { i: i2, j: j2 });
            const newCost = calculateCost(newSolution);
            const swapped = [currentSolution[j1][i1], currentSolution[j2][i2]].sort().join('-');

            candidates.push({ solution: newSolution, cost: newCost, swap: swapped, penalty: (frequencyList[swapped] || 0) });
          }
        }
      }
    }
    if (!selectWholeNeighbourhood) {
      // super-inefficient way of getting a subset of values. Ideally we don't need to generate the whole set
      // to find the subset, but I think this works to save time
      const shuffled = candidates.sort(() => 0.5 - Math.random());
      shuffled.slice(0, neighborhoodSize);
    }

    return candidates;
  }

  function pickCandidate(candidates, tabuList, aspiration) {
    let _candidates = [...candidates];

    let best = null;
    while (!best) {
      let minCostPen = Math.min(..._candidates.map(c => c.cost + c.penalty));
      bestIndex = _candidates.findIndex(c => (c.cost + c.penalty) == minCostPen);
      best = _candidates[bestIndex];

      if (tabuList[best.swap] && _candidates.length > 0) {
        if (!meetsAspirationCriterion(best, aspiration, _candidates)) {
          best = null
          _candidates.splice(bestIndex, 1) // Remove candidate and keep searching for next best
        }
      }
    }

    return best
  }

  function meetsAspirationCriterion(candidate, aspiration) {
    if (useAspiration == 'bestInNeighbourhood') {
      return true // algorithm already selects best in neighborhood, this will effectively just ignore the tabu list
    } else if (useAspiration == 'bestSolutionSeen') {
      return candidate.cost < aspiration;
    } else {
      return false;
    }
  }

  function updateTabuList(list, swap) {
    Object.keys(list).forEach(key => {
      if (list[key] > 0) {
        list[key] -= 1;
      }
    })

    if (Array.isArray(tabuTenure)) {
      if (randomNumberBetween(0, 100) < dynamicTenureChangeProbability) {
        dynamicTenure = randomNumberBetween(tabuTenure[0], tabuTenure[1])
      }

      list[swap] = dynamicTenure;
    } else {
      list[swap] = tabuTenure;
    }
  }

  function updateFrequencyList(list, swap) {
    if (!useFrequencyTabu) return;

    if (list[swap]) {
      list[swap] += 1
    } else {
      list[swap] = 1
    }
  }

  function calculateCost(matrix) {
    let cost = 0;

    for (let i1 = 0; i1 < MAT_DIM_H; i1++) {
      for (let j1 = 0; j1 < MAT_DIM_V; j1++) {
        for (let i2 = 0; i2 < MAT_DIM_H; i2++) {
          for (let j2 = 0; j2 < MAT_DIM_V; j2++) {
            n1 = matrix[j1][i1] - 1; // Index doesn't start at 1
            n2 = matrix[j2][i2] - 1;

            cost += flow[n1][n2] * manhattanDistance(i1, i2, j1, j2);
          }
        }
      }
    }

    return cost;
  }
}

////////////////////////////////////////////////////////////////////////////
////////// HELPER FUNCTIONS ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function manhattanDistance(Ax, Bx, Ay, By) {
  let delX = Math.abs(Ax - Bx)
  let delY = Math.abs(Ay - By)

  return delX + delY
}

function matrixClone(mat) {
  newMat = []
  mat.forEach((row) => {
    newMat.push([...row])
  })

  return newMat;
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function swap(matrix, elem1, elem2) {
  let e1_val = matrix[elem1.j][elem1.i];
  let e2_val = matrix[elem2.j][elem2.i];

  let temp = matrixClone(matrix); // create copy of matrix

  temp[elem1.j][elem1.i] = e2_val;
  temp[elem2.j][elem2.i] = e1_val;

  return temp;
}

function matrixShuffle(matrix) {
  for (var k = 0; k < matrix.length; k++) {
    var i = matrix[k].length;
    if (i == 0)
      return false;
    else {
      while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempi = matrix[k][i];
        var tempj = matrix[k][j];
        matrix[k][i] = tempj;
        matrix[k][j] = tempi;
      }
    }
  }
  return matrix
}

////////////////////////////////////////////////////////////////////////////
////////// EXECUTION ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

////// BASIC TABU SEARCH
////// PART 0: BASIC TS
q1();

////// PART 1: VARYING INITIAL SOLUTION
for (let i = 0; i < 10; i++) {
  let initialSolution = matrixShuffle(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
    ]
  )
  console.log('------------------------');
  console.log('------------------------');
  console.log('--- INITIAL SOLUTION ---');
  console.log(initialSolution);
  q1({ initialSolution: initialSolution });
}

////// PART 2: VARYING TABU SIZE
console.log('------------------------');
console.log('--- Tabu Tenure 3 ---');
q1({ tabuTenure: 3 });
console.log('------------------------');
console.log('--- Tabu Tenure 25 ---');
q1({ tabuTenure: 25 });

////// PART 3: DYNAMIC TABU SIZE
console.log('------------------------');
console.log('--- Dynamic Tabu Range [1,21] ---');
q1({ tabuTenure: [1, 21] })
console.log('------------------------');
console.log('--- Dynamic Tabu Range [21, 50] ---');
q1({ tabuTenure: [21, 50] })
console.log('------------------------');
console.log('--- Dynamic Tabu Range [21, 50] ---');
q1({ tabuTenure: [1, 50] })

// ////// PART 4: ASPIRATION CRITERION
console.log('------------------------');
console.log('--- bestSolutionSeen ---');
q1({ useAspiration: 'bestSolutionSeen' })
console.log('------------------------');
console.log('--- bestInNeighbourhood ---');
q1({ useAspiration: 'bestInNeighbourhood' })
console.log('------------------------');
console.log('--- bestSolutionSeen + 21 TabuTenure ---');
q1({ tabuTenure: 21, useAspiration: 'bestSolutionSeen' })
console.log('------------------------');
console.log('--- bestInNeighbourhood + 21 TabuTenure ---');
q1({ tabuTenure: 21, useAspiration: 'bestInNeighbourhood' })

////// PART 5: LESS THAN WHOLE NEIGHBOURHOOD
console.log('------------------------');
console.log('--- partialNeighbourhood, size of 100 ---');
q1({ selectWholeNeighbourhood: false, neighborhoodSize: 100 })

////// PART 6: FREQUENCY BASED MEMORY
q1({ useFrequencyTabu: true })
