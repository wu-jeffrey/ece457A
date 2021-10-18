const maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
]

let visitedNodes = {}

A({ x: 0, y: 0, parent: null, cost: 0 }, { x: 24, y: 24 })

function A(start, goal) {
  visitedNodes = {}
  let numNodesExplored = 0

  let queue = [start]
  while (queue.length > 0) {
    const currentNode = queue.shift() // FIFO take from front of array
    if (!isVisited(currentNode)) {
      numNodesExplored++
      markVisited(currentNode);
      if (compareNodes(currentNode, goal)) {
        // Path found!
        const path = backtracePath(currentNode)

        console.log('Solution Path: ', path)
        console.log('Cost: ', path.length - 1) // Cost doesn't include first node
        console.log('Cost stored: ', currentNode.cost) // Cost doesn't include first node
        console.log('Nodes Explored: ', numNodesExplored)
        return 'success'
      }

      let R = rightNode({
        ...currentNode, cost: currentNode.cost + 1, heuristic: calcHeuristic(currentNode, goal)
      })
      let L = leftNode({
        ...currentNode, cost: currentNode.cost + 1, heuristic: calcHeuristic(currentNode, goal)
      })
      let U = upNode({
        ...currentNode, cost: currentNode.cost + 1, heuristic: calcHeuristic(currentNode, goal)
      })
      let D = downNode({
        ...currentNode, cost: currentNode.cost + 1, heuristic: calcHeuristic(currentNode, goal)
      })

      // only add node if it exists and it is not an obstacle
      if (R && !isNodeObstacle(R)) { queue.push(R) }
      if (L && !isNodeObstacle(L)) { queue.push(L) }
      if (U && !isNodeObstacle(U)) { queue.push(U) }
      if (D && !isNodeObstacle(D)) { queue.push(D) }

      queue.sort(((a, b) => evalFunction(a) - evalFunction(b)))
      // if f(a) > f(b) this will put b in front of a in the queue
      // f(n) = h(n) + g(n) := heuristic + cost-to-get-to-node
    }
  }

  console.log('no path found')
}

////////////////////////////////////////////////////////////////////////////
////////// HELPER FUNCTIONS ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function calcHeuristic(N, goal) {
  // this rise + run is admissable since we cannot travel a diagonal.
  // It's also better than euclidean distance (i.e. hypotenuse) since
  // it's larger but still admissable, making it a better heuristic

  let delX = Math.abs(N.x - goal.x)
  let delY = Math.abs(N.y - goal.y)

  return delX + delY
}

function evalFunction(N) {
  // h(n) + g(n)
  return N.heuristic + N.cost
}

function nodeCoordinatesString(N) {
  if (!N) return
  return `${N.x}, ${N.y}`
}

function serializeNodeCoordinates(N) {
  return `${N.x}_${N.y}`
}

function markVisited(N) {
  visitedNodes[serializeNodeCoordinates(N)] = true
}

function isVisited(N) {
  return visitedNodes[serializeNodeCoordinates(N)]
}

function backtracePath(N) {
  let path = [nodeCoordinatesString(N)]
  parent = N.parent
  while (parent) {
    path.unshift(nodeCoordinatesString(parent)) // append to front of array
    parent = parent.parent
  }
  return path
}

function isNodeObstacle(N) {
  return maze[N.y][N.x]
}

function compareNodes(A, B) {
  if (!A || !B) return false

  return A.x == B.x && A.y == B.y
}

function rightNode(N) {
  if (N.x == maze[0].length - 1) return null // if x is at horizontal limit of maze

  return { ...N, x: N.x + 1, parent: N }
}

function leftNode(N) {
  if (N.x == 0) return null

  return { ...N, x: N.x - 1, parent: N }
}

function downNode(N) {
  if (N.y == 0) return null

  return { ...N, y: N.y - 1, parent: N }
}

function upNode(N) {
  if (N.y == maze.length - 1) return null

  return { ...N, y: N.y + 1, parent: N }
}
