const TrafficLight = require('../src/trafficLight');

test('Traffic light changes state correctly', () => {
  const light = new TrafficLight();
  
  // Estado inicial
  expect(light.state).toBe('G');
  
  // Pasar 5 unidades de tiempo, debería ser O (Orange)
  for (let i = 0; i < 5; i++) light.update();
  expect(light.state).toBe('O');

  // Pasar 1 unidad de tiempo, debería ser R (Red)
  light.update();
  expect(light.state).toBe('R');

  // Pasar 5 unidades de tiempo, debería volver a G (Green)
  for (let i = 0; i < 5; i++) light.update();
  expect(light.state).toBe('G');
});
