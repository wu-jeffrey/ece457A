# Assignment 2

## Q2
All the raw code for each search algorithm implementation is available in files `Q2-A*.js`, `Q2-BFS.js` and `Q2-DFS.js`

The file `Q2-Maze.js` was pulled from Learn and the file `Q2-maze.html` is a self contained visualization of each search algorithm that contains slightly modified versions of each of the search algorithms in the aforementioned files.
The modifications are only for the visualization.

Note that all 3 algorithms share many of the same helper functions. I included them all in separate files instead of importing so that each file can be run standalone. A* has some extra methods pertaining to calculating heuristics and also stores the cost on each node.
I recommend using the visualization! Just open the HTML file into any web browser.

#### BFS & DFS
Both approaches are extremely simlar, the only difference is that BFS uses a FIFO queue as a fringe and DFS uses a LIFO stack. This enables BFS to add elements to the "fringe" at the same depth whereas DFS searches an entire branch before backtracking.

Note that due to the order that the elements are added into the fringe, the output may differ from other algoritms. All my algorithms add elements to the fringe in order of `right, left, upper, lower` nodes. As the lower/down node is added last, it is the first to leave the stack in DFS. This causes this implementation of DFS to preferentially search "downwards" first (i.e. increasing y value; upwards in the visualization since (0,0) is the lower left corner).

#### A*
The A* algorithm uses the same "template" as BFS, the only difference is that once the elements are added to the fringe (a queue in this case), that queue is sorted based on the evaluation function, `f(n)`, where,

```f(n) = g(n) + h(n)```

where `g(n)` and `h(n)` are the cost to reach the current node, and the heuristic function, respectively.

For the heuristic function, I initially wanted to use the euclidean distance (i.e. hypotenuse length), which would guarantee admissability since there's no shorter path between 2 points than a straight line. However, since we're constrained from travelling diagonally, I instead chose a `rise + run = deltaX + deltaY` approach. This is also admissable since there is no shorter way, even in a "staircase" path, which would be the constrained equivalent of a hypotenuse. This `rise + run` approach is actually a better heuristic than euclidean distance since it's greater than euclidean distance, yet still admissable.

## Q4

The performance of SA seems to be greatly affected by the choice of cooling schedule. As seen in the file `part-III-output.txt`, the `slow` cooling schedule had the highest performance (it had the most solutions that converged near the global min) with the randomly selected alphas, followed by the geometric variant and then linear.

I hypothesize this is because the slower cooling rate allowed the acceptance of neighbors to be higher for more iterations, enabling the SA algorithm to "explore" more of the search space.

Similarly, the initial temperature also had an effect on the performance, although it was less clear cut. 10 random initial temperatures ranging from `[100, 1000]` were chosen. Keeping the starting point constant and using a `linear` cooling schedule, trial and error was used and it was found that below values of `100`, the solution would rarely reach the global min. Above that value of `100`, there were up to 20% of the solutions that would find the global minimum. Raising the intial temperature above `1000` seemed to have little effect on the number of solutions that hit the global max; this may be because I set a hard iteration limit and the higher intial temps wouldn't have enough time to converge. Thus, the range `[100, 100]` was chosen. The output can be found in `part-II-output.txt`.

In this implementation, the initial starting point seemed to have little effect on the performance, however, that may be because the other parameters were so poorly tuned they dominated the end result. Theoretically, it makes sense that the closer the initial starting point is to the actual global minimum, the easier it would be to find said minimum. However, if the neighbourhood function and acceptance probability allow neighbors that are extremely far away, the SA algorithm might even "jump out" of the global min. The relevant output can be found in `part-I-output.txt`.

The best starting point found in part I was at `x1: 1, x2: -74`. The best initial temperature found in part II was `241`. The best solution found in part III was: `x1: 3.1419404777907105, x2: 3.142444467952014, Easom: 0.9999987301466876`, and used an alpha of `0.5472280881238891`.

These settings performed better than the others since the random point was relatively close to the desired `[pi, pi]` local min, (at least `x1` was), and the combination of temperature, alpha and cooling schedule were sufficient to allow the algorithm to sample more of the search space before freezing.
