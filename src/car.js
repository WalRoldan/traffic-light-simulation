class Car {
    constructor(position) {
      this.position = position;
    }
  
    move() {
      this.position += 1;
    }
  }
  
  module.exports = Car;
  