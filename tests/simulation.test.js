const runSimulation = require('../src/simulation');

test('Simulation runs correctly for a given road and time units', () => {
  const road = 'CCC.G...R...';
  const n = 16;
  
  const expected = [
    'CCC.G...R...', 
    '..CCC...G...', 
    '.CCCG...G...', 
    '...CCC..G...', 
    '....CCC.G...', 
    '....OCCCO...', 
    '....R.CCR...', 
    '....R..CR...', 
    '....R..CR...', 
    '....R..CR...', 
    '....R..CR...',
    '....G...C...',
    '....G...GC..',
    '....G...G.C.',
    '....G...G..C',
    '....G...G...',
    '....O...O...',
  ];

  const result = runSimulation(road, n);

  expect(result).toEqual(expected);
});
