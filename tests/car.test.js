const Car = require('../src/car');

test('Car moves correctly', () => {
  const car = new Car(0);
  
  car.move();
  expect(car.position).toBe(1);

  car.move();
  expect(car.position).toBe(2);
});
