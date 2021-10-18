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

// This is a 2D list in Python. Note that the first row in the 2D list is the y = 0 row (i.e. bottom-most row in the maze figure). '1' indicates that the node is blocked, '0' indicates that it is free.
// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
//   [0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
// ]

// [
//   ["_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_", "_"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
//   ["x", "x", "x", "x", "x", "_", "_", "_", "x", "_", "_", "_", "_", "_", "x", "x", "x", "x", "x", "x", "x", "_", "_", "_", "_"],
//   ["_", "_", "_", "x", "x", "x", "_", "_", "x", "_", "_", "_", "_", "_", "x", "x", "x", "x", "x", "x", "x", "_", "_", "_", "_"],
//   ["_", "_", "_", "x", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "x", "x", "x", "x", "x", "x", "x", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "x", "_", "_", "_", "x", "x", "x", "x", "x", "x", "x", "_", "_", "_", "_"],
//   ["x", "x", "x", "x", "x", "x", "x", "_", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "x", "x", "x", "_", "_", "x", "x", "_", "_", "_", "_", "_", "x", "x", "x"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "x", "x", "x", "x"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "_", "_", "x", "x", "_", "x", "_", "_", "x", "_", "_", "x"],
//   ["_", "_", "_", "_", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "_", "x", "_", "_", "x", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "_", "x", "_", "_", "x", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "x", "_", "_", "_"],
//   ["_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "_", "_", "x", "_", "_", "_"],
//   ["_", "_", "x", "x", "x", "_", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "_", "_", "_", "_", "_", "_"],
//   ["_", "_", "x", "_", "_", "_", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "x", "x", "x", "x", "x", "_"],
//   ["x", "x", "x", "_", "_", "_", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "x", "x", "x", "_", "_", "_"],
//   ["x", "x", "x", "_", "_", "_", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "x", "x", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "x", "_", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "x", "x", "_", "_", "_", "_", "_"],
//   ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
// ]

// [
//   [" ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " ", " "],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//   ["x", "x", "x", "x", "x", " ", " ", " ", "x", " ", " ", " ", " ", " ", "x", "x", "x", "x", "x", "x", "x", " ", " ", " ", " "],
//   [" ", " ", " ", "x", "x", "x", " ", " ", "x", " ", " ", " ", " ", " ", "x", "x", "x", "x", "x", "x", "x", " ", " ", " ", " "],
//   [" ", " ", " ", "x", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", "x", "x", "x", "x", "x", "x", "x", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", "x", "x", "x", " ", " ", " ", "x", "x", "x", "x", "x", "x", "x", " ", " ", " ", " "],
//   ["x", "x", "x", "x", "x", "x", "x", " ", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x"],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x"],
//   [" ", " ", " ", " ", " ", " ", " ", " ", "x", "x", "x", "x", "x", " ", " ", "x", "x", " ", " ", " ", " ", " ", "x", "x", "x"],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", "x", "x", "x", "x"],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", " ", " ", "x", "x", " ", "x", " ", " ", "x", " ", " ", "x"],
//   [" ", " ", " ", " ", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x", " ", "x", " ", " ", "x", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x", " ", "x", " ", " ", "x", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", "x", " ", " ", " "],
//   [" ", " ", "x", "x", "x", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", " ", " ", "x", " ", " ", " "],
//   [" ", " ", "x", "x", "x", " ", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", " ", " ", " ", " ", " ", " "],
//   [" ", " ", "x", " ", " ", " ", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", "x", "x", "x", "x", "x", " "],
//   ["x", "x", "x", " ", " ", " ", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", "x", "x", "x", " ", " ", " "],
//   ["x", "x", "x", " ", " ", " ", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", "x", "x", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "x", "x", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
// ]