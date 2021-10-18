# Assignment 2

## Q2
All the raw code for each search algorithm implementation is available in files `Q2-A*.js`, `Q2-BFS.js` and `Q2-DFS.js`

The file `Q2-Maze.js` was pulled from Learn and the file `Q2-maze.html` is a self contained visualization of each search algorithm that contains slightly modified versions of each of the search algorithms in the aforementioned files.
The modifications are only for the visualization.

Note that all 3 algorithms share many of the same helper functions. I included them all in separate files instead of importing so that each file can be run standalone. A* has some extra methods pertaining to calculating heuristics and also stores the cost on each node.

#### BFS & DFS
Both approaches are extremely simlar, the only difference is that BFS uses a FIFO queue as a fringe and DFS uses a LIFO stack. This enables BFS to add elements to the "fringe" at the same depth whereas DFS searches an entire branch before backtracking.

Note that due to the order that the elements are added into the fringe, the output may differ from other algoritms. All my algorithms add elements to the fringe in order of `right, left, upper, lower` nodes. As the lower/down node is added last, it is the first to leave the stack in DFS. This causes this implementation of DFS to preferentially search "downwards" first (i.e. increasing y value; upwards in the visualization since (0,0) is the lower left corner).

#### A*
The A* algorithm uses the same "template" as BFS, the only difference is that once the elements are added to the fringe (a queue in this case), that queue is sorted based on the evaluation function, `f(n)`, where,

```f(n) = g(n) + h(n)```

where `g(n)` and `h(n)` are the cost to reach the current node, and the heuristic function, respectively.

For the heuristic function, I initially wanted to use the euclidean distance (i.e. hypotenuse length), which would guarantee admissability since there's no shorter path between 2 points than a straight line. However, since we're constrained from travelling diagonally, I instead chose a `rise + run = deltaX + deltaY` approach. This is also admissable since there is no shorter way, even in a "staircase" path, which would be the constrained equivalent of a hypotenuse. This `rise + run` approach is actually a better heuristic than euclidean distance since it's greater than euclidean distance, yet still admissable.
