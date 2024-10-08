const TrafficLight = require('../src/trafficLight');

test('Traffic light changes state correctly', () => {
  const light = new TrafficLight();
  
  expect(light.state).toBe('G');
  
  for (let i = 0; i < 5; i++) light.update();
  expect(light.state).toBe('O');

  light.update();
  expect(light.state).toBe('R');

  for (let i = 0; i < 5; i++) light.update();
  expect(light.state).toBe('G');
});
