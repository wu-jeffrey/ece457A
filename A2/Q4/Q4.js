function SA(options = {}) {
  let stopTemperature = options.stopTemperature || 0;
  let startTemperature = options.startTemperature || 1000;
  let currentTemperature = startTemperature;

  let currentNode = options.initialPoint || { x: 0, y: 0, height: Easom(0, 0) };

  while (startTemperature > stopTemperature) {
    const neighbor = generateNeighbor(currentNode);
    const newHeight = neighbor.height;

    if (stochasticAcceptanceFunction(currentHeight, newHeight)) {
      currentNode = neighbor;
      currentHeight = height;
    }

    currentTemperature = coolingFunction(currentTemperature);
  }
}

function Easom(x1, x2) {
  return (
    -1 *
    Math.cos(x1) *
    Math.cos(x2) *
    Math.exp(-Math.pow(x1 - Math.PI, 2) - Math.pow(x2 - Math.PI, 2))
  );
}

function stochasticAcceptanceFunction(currentEnergy, newEnergy) {
  const delta = newEnergy - currentEnergy;

  if (delta < 0) return true; // accept because new height is lower
}
