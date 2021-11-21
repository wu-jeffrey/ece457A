# Assignment 1

## Q1
Note that the approach doubled the flows.

### PART 0: Running basic TS
The basic TS with no frequency based memory, no aspiration criterion, whole neighbourhood selection, a tabu size/tenure of 10 and a stopping condition of 1000 iterations was run. It's output can be found in `q1-part0-output.txt`

### PART 1: Varying the starting position
To generate 10 different initial solutions, the `matrixShuffle` function was used to scramble the elements inside the default initial solution matrix (figure 1 from the assignment instructions). The output can be found in `q1-part1-output.txt`

Different starting points resulted in different ending solutions. Intuitively, in a large search space, with a meta heuristic algorithm with low search diversity (such as this case of simple TS without frequency based memory), beginning closer to the optimal solution will likely allow the algorithm to converge and "get stuck" in the global optimum. In fact, one initial condition allowed the tabu search to get the optimal configuration with a doubled-flow cost of 2570 (as mentioned in the assignment instructions):

```
initialSolution: [
  [ 5, 2, 3, 1, 4 ],
  [ 6, 8, 9, 10, 7 ],
  [ 12, 11, 15, 14, 13 ],
  [ 18, 16, 17, 20, 19 ]
]

cost: 2570

solution:  [
  [ 6, 1, 7, 5, 17 ],
  [ 13, 8, 20, 15, 19 ],
  [ 16, 11, 12, 2, 4 ],
  [ 9, 3, 10, 14, 18 ]
]
```

### PART 2: Tabu Size
A tabu tenure of 3 and 25 were chosen, smaller and larger than the default size of 10, respectively. Note that the default initialSolution was used instead of the best one found in PART 1 since this variable was to be tested independently.
The smaller tabu size converged to the same solution as the default, (cost of 2680) whereas the larger taboo converged to a more optimal solution(lower cost of 2598). The larger tabu size enables a higher level of diversity as it may make a larger subset of a neighborhood taboo, forcing the algorithm to explore worse solutions and escape local optimums. It was found that tabu sizes less than 21 and the default initial solution resulted in being stuck in the cost; 2680 local optimum. The output can be found in `q1-part2-output.txt`

### PART 3: Dynamic Tabu Tenure
To increase the dynamic tabu tenure infrequently, a stochastic approach was taken, giving the tenure change a 1% probability of occuring each iteration. At the default stopping condition of 1000, this would mean 10 tenure changes. The integer range for the dynamic tabu was initially chosen to be `[1, 21]` then `[21,50]` and finally `[1,50]`. It was observed in PART 2 that tabu sizes lower than 21 used with the default initial solution resulted in getting trapped in a local optimum. As such, the former dynamic tabu range was chosen to undershoot, overshoot and overlap this inflection point. From the output, there doesn't seem to be a clear correlation between the ranges in and the optimality of the solution. This is likely due to the stochastic nature of the dynamic tabu size. However, it does allow for good diversification. The output can be found in `q1-part3-output.txt`.

### PART 4: Aspiration Criterion
Only setting an aspiration criterion initially was not enough to escape the local optimum near the default initial solution (cost of 2680). As such, the tabu tenure was also adjusted to aforementioned value of `21`.
Only the `bestSolutionSeen` was able to escape the 2680 local optimum. When using the `bestSolutionInNeighbourhood`, the algorithm was still utilizing the `whole neighbourhood selection`, i.e. all possible permutations possible were generated. Thus, the most optimal solution in that whole neighborhood would be the same as when no aspiration criterion was used, as such the value expectedly converged to the same 2680 local optimum. The aspiration criterion of `bestSolutionInNeighbourhood` used in conjuction with `whole neighbourhood selection` effectively functioned to ignore the tabu list. The output can be found in `q1-part4-output.txt`.

### PART 5: Less Than Whole Neighborhood
The less than whole neighbourhood allowed escaping the 2680 local optimum, even without modifying the tabu tenure above 21. This is likely due to the stochastic nature of the neighbourhood generation, as the `subset` of the `whole neighborhood (WN)` doesn't necessarily contain the most optimal solution in the WN. This allowed for slight diversification and escape of the the 2680 local optimum.

### PART 6: Frequency Based Memory
Using frequency based memory, the local minimum of 2680 however the value still gets stuck at a (better) local optimum of cost 2654. Frequency based memory definitely helped increase solution diversity enabling the escape of the local optimum

## Q2

