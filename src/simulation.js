const TrafficLight = require('./trafficLight');
const Car = require('./car');

function runSimulation(road, n) {
  const roadArray = road.split('');
  const cars = [];
  const lights = [];

  // Inicializar coches y semáforos
  for (let i = 0; i < roadArray.length; i++) {
    if (roadArray[i] === 'C') {
      cars.push(new Car(i));
    } else if (roadArray[i] === 'G' || roadArray[i] === 'R') {
      lights.push({ position: i, light: new TrafficLight() });
    }
  }

  const iterations = [road]; // Guardamos el estado inicial

  for (let time = 1; time <= n; time++) {
    // Actualizar semáforos
    lights.forEach(({ light }) => light.update());

    // Mover coches (si es posible)
    cars.forEach((car) => {
      let nextPosition = car.position + 1;
      
      // Comprobar si el coche está en una intersección
      const trafficLight = lights.find(({ position }) => position === nextPosition);
      
      if (!trafficLight || (trafficLight && trafficLight.light.isGreen())) {
        // Si no hay semáforo o está verde, el coche se mueve
        car.move();
      }
    });

    // Actualizar estado del camino
    const newRoad = Array(roadArray.length).fill('.');
    cars.forEach(car => {
      if (car.position < roadArray.length) {
        newRoad[car.position] = 'C';
      }
    });
    lights.forEach(({ position, light }) => {
      if (newRoad[position] !== 'C') {
        newRoad[position] = light.state;
      }
    });
    iterations.push(newRoad.join(''));
  }

  return iterations;
}

module.exports = runSimulation;
