const runSimulation = require('../src/simulation');

test('Simulation runs correctly for a given road and time units', () => {
  const road = 'CCC.G...R...';
  const n = 16;
  
  const expected = [
    'CCC.G...R...', // 0 initial state
    '.CCCG...G...', // 1
    '..CCC...G...', // 2
    '...CCC..G...', // 3
    '....CCC.G...', // 4
    '....OCCCO...', // 5
    '....R.CCR...', // 6
    '....R..CR...', // 7
    '....R..CR...', // 8
    '....R..CR...', // 9
    '....R..CR...', // 10
    '....G...C...', // 11
    '....G...GC..', // 12
    '....G...G.C.', // 13
    '....G...G..C', // 14
    '....G...G...', // 15
    '....O...O...', // 16
  ];

  const result = runSimulation(road, n);

  expect(result).toEqual(expected);
});
