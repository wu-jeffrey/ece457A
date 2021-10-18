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

const visitedNodes = {}

DFS({ x: 0, y: 0, parent: null }, { x: 24, y: 24 })

function DFS(start, goal) {
  let numNodesExplored = 0

  let stack = [start]
  while (stack.length > 0) {
    const currentNode = stack.pop() // LIFO take from back of array (i.e. top of stack)
    if (!isVisited(currentNode)) {
      numNodesExplored++
      markVisited(currentNode);
      if (compareNodes(currentNode, goal)) {
        // Path found!
        const path = backtracePath(currentNode)

        console.log('Solution Path: ', path)
        console.log('Cost: ', path.length - 1) // Cost doesn't include first node
        console.log('Nodes Explored: ', numNodesExplored)
        return 'success'
      }

      let R = rightNode(currentNode)
      let L = leftNode(currentNode)
      let U = upNode(currentNode)
      let D = downNode(currentNode)

      // only add node if it exists and it is not an obstacle
      if (R && !isNodeObstacle(R)) { stack.push(R) }
      if (L && !isNodeObstacle(L)) { stack.push(L) }
      if (U && !isNodeObstacle(U)) { stack.push(U) }
      if (D && !isNodeObstacle(D)) { stack.push(D) }
    }
  }

  console.log('no path found')
}

////////////////////////////////////////////////////////////////////////////
////////// HELPER FUNCTIONS ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
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
