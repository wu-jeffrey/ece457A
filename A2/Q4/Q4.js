function SA(options = {}) {
  let stopTemperature = options.stopTemperature || 0
  let maxIterations = options.maxIterations || 1000000
  let startTemperature = options.startTemperature || 100
  let currentTemperature = startTemperature
  let coolingFunctionVariant = options.coolingFunctionVariant || 'slow'
  let coolingRate = options.coolingRate || 0.1

  let iterationsPerTemperature = options.iterationsPerTemperature || 10

  let initialPoint = options.initialPoint || { x: 0, y: 0, height: Easom(0, 0) }
  let currentNode = initialPoint
  let previousNode = null
  let currentHeight = currentNode.height

  let iterationCount = 0

  while (shouldContinue(iterationCount, maxIterations)) {
    for (let i = 0; i < iterationsPerTemperature; i++) {
      iterationCount++
      const neighborNode = generateNeighbor(currentNode)
      const newHeight = neighborNode.height

      if (stochasticAcceptanceFunction(currentHeight, newHeight, currentTemperature)) {
        previousNode = currentNode
        currentNode = neighborNode
        currentHeight = newHeight
      }
      // console.log('height: ', currentHeight)
      // console.log('x,y: ', currentNode.x, currentNode.y)
      // console.log('temp: ', currentTemperature)
      // console.log('iterationCount: ', iterationCount)
    }

    currentTemperature = coolingFunction(currentTemperature, coolingFunctionVariant, coolingRate)
  }

  return {
    startingTemperature: startTemperature,
    initialPoint: initialPoint,
    temperature: currentTemperature,
    height: currentHeight,
    node: currentNode,
    iterationCount: iterationCount,
    alpha: coolingRate,
  }
}

function shouldContinue(iterationCount, maxIterations) {
  if (iterationCount < maxIterations) return true
  return false
}

function Easom(x1, x2) {
  return (
    -Math.cos(x1) *
    Math.cos(x2) *
    Math.exp(-Math.pow(x1 - Math.PI, 2) - Math.pow(x2 - Math.PI, 2))
  )
}

function stochasticAcceptanceFunction(currentEnergy, newEnergy, currentTemperature) {
  const delta = newEnergy - currentEnergy

  if (delta < 0) return true // definitely accept because new height is lower
  if (Math.exp(-delta / currentTemperature) > Math.random()) return true // accept if RNG gods allow it

  return false
}

function coolingFunction(temperature, variant, coolingRate) {
  switch (variant) {
    case 'linear':
      return temperature - coolingRate
    case 'geometric':
      return temperature * coolingRate
    case 'slow':
      return (temperature / (1 + coolingRate))
  }
}

function generateNeighbor(node) {
  let x = node.x + (Math.random() * 2 - 1) // move randomly in X a distance (-1, 1)
  let y = node.y + (Math.random() * 2 - 1) // move randomly in Y a distance (-1, 1)

  return { x: x, y: y, height: Easom(x, y) }
}

function generateRandomPoints(numPoints = 10, bounds = { min: -100, max: 100 }) {
  let points = []
  for (let i = 0; i < numPoints; i++) {
    let x = Math.floor(Math.random() * (bounds.max - bounds.min + 1)) + bounds.min
    let y = Math.floor(Math.random() * (bounds.max - bounds.min + 1)) + bounds.min

    points.push(
      { x: x, y: y, height: Easom(x, y) }
    )
  }

  return points
}

function generateRandomNumberBetween(min, max) {
  // should've wrote this method sooner lol

  return Math.floor(Math.random() * (max - min + 1)) + min
}

function partI() {
  // Q4 i) initial points
  // let points = generateRandomPoints()
  let points = [ // These were the points generated when partI() was run initially
    { x: 10, y: -53, height: -0 },
    { x: -72, y: 46, height: -0 },
    { x: -8, y: 78, height: -0 },
    { x: 96, y: -58, height: 0 },
    { x: -7, y: 26, height: -1.2541161804682664e-272 },
    { x: -63, y: -82, height: -0 },
    { x: 63, y: -92, height: 0 },
    { x: 1, y: -74, height: -0 },
    { x: -34, y: 67, height: -0 },
    { x: 81, y: -99, height: -0 }
  ]

  let solutions = points.map((point) => {
    const options = {
      initialPoint: point,
      maxIterations: 300000,
    }
    return SA(options)
  })

  console.log('------------------------------------------------')
  console.log('-------------------- POINTS --------------------')
  console.log('------------------------------------------------')
  console.log(points);
  console.log('------------------------------------------------')
  console.log('------------------ SOLUTIONS -------------------')
  console.log('------------------------------------------------')
  console.log(solutions);
}

function partII() {
  // Q4 iI) initial temps

  let temps = [
    183, 808, 493, 392,
    241, 750, 166, 294,
    266, 721
  ] // these were the temps that were randomly generated when partII() was run initially
  // for (let i = 0; i < 10; i++) {
  //   temps.push(
  //     generateRandomNumberBetween(100, 1000)
  //   )
  // }

  let solutions = temps.map((temp) => {
    const options = {
      initialPoint: { x: 1, y: -74, height: -0 }, // best temp taken from partI()
      maxIterations: 300000,
      startTemperature: temp,
    }
    return SA(options)
  })

  console.log('------------------------------------------------')
  console.log('-------------------- TEMPS ---------------------')
  console.log('------------------------------------------------')
  console.log(temps);
  console.log('------------------------------------------------')
  console.log('------------------ SOLUTIONS -------------------')
  console.log('------------------------------------------------')
  console.log(solutions.sort((a, b) => a.node.height - b.node.height));
}

function partIII() {
  // Q4 iii) cooling schedules

  let alphas = []

  for (let i = 0; i < 10; i++) {
    alphas.push(Math.random())
  }

  ['linear', 'geometric', 'slow'].forEach((variant) => {
    let solutions = alphas.map((alpha) => {
      const options = {
        initialPoint: { x: 1, y: -74, height: -0 }, // best start point taken from partI()
        maxIterations: 300000,
        startTemperature: 241, // best temp from partII()
        coolingFunctionVariant: variant,
        coolingRate: alpha
      }
      return SA(options)
    })

    console.log('------------------------------------------------')
    console.log(`------------------- ${variant} ---------------------`)
    console.log('------------------------------------------------')
    console.log('------------------------------------------------')
    console.log('------------------- ALPHAS ---------------------')
    console.log('------------------------------------------------')
    console.log(alphas);
    console.log('------------------------------------------------')
    console.log('------------------ SOLUTIONS -------------------')
    console.log('------------------------------------------------')
    console.log(solutions.sort((a, b) => a.node.height - b.node.height));
  })
}

// partI()
// partII()
partIII()
