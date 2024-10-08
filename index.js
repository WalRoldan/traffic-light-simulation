const runSimulation = require('./src/simulation');

const road = 'CCC.G...R...'; // Define la carretera inicial
const n = 16; // Define el número de unidades de tiempo a simular

const result = runSimulation(road, n);

// Imprime el resultado de cada iteración
console.log(result.join('\n'));
