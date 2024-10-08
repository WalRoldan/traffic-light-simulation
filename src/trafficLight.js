class TrafficLight {
    constructor() {
      this.state = 'G'; // Estado inicial: Green
      this.timer = 0;
    }
  
    update() {
      // Avanza el ciclo del semáforo
      this.timer++;
      if (this.state === 'G' && this.timer >= 5) {
        this.state = 'O'; // Pasa a Orange
        this.timer = 0;
      } else if (this.state === 'O' && this.timer >= 1) {
        this.state = 'R'; // Pasa a Red
        this.timer = 0;
      } else if (this.state === 'R' && this.timer >= 5) {
        this.state = 'G'; // Pasa a Green
        this.timer = 0;
      }
    }
  
    isGreen() {
      return this.state === 'G';
    }
  
    isRed() {
      return this.state === 'R';
    }
  }
  
  module.exports = TrafficLight;
  