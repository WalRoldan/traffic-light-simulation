class Car {
    constructor(position) {
      this.position = position; // Posición inicial del coche en la carretera
    }
  
    move() {
      this.position += 1; // El coche se mueve una posición hacia la derecha
    }
  }
  
  module.exports = Car;
  