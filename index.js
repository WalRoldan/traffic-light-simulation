const runSimulation = require('./src/simulation');

const road = 'CCC.G...R...'; 
const n = 16;

const result = runSimulation(road, n);

console.log(result.join('\n'));
