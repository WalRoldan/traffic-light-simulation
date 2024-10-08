class TrafficLight {
    constructor() {
      this.state = 'G';
      this.timer = 0;
    }
  
    update() {
      this.timer++;
      if (this.state === 'G' && this.timer >= 5) {
        this.state = 'O'; 
        this.timer = 0;
      } else if (this.state === 'O' && this.timer >= 1) {
        this.state = 'R'; 
        this.timer = 0;
      } else if (this.state === 'R' && this.timer >= 5) {
        this.state = 'G'; 
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
  