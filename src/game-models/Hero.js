// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor() {
    this.skin = '🦊';
    this.positionX = 0;

    this.positionY = 2;
    this.boomerang = new Boomerang(this.positionY);
  }

  moveLeft() {
    // Идём влево.
    if (this.positionX === 0) {
      this.positionX === 0;
    } else {
      this.positionX -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    if (this.positionY === 30) {
      this.positionY === 30;
    } else {
      this.positionX += 1;
    }
  }

  moveUp() {
    // Идём вверх.
    if (this.positionY === 0) {
      this.positionY === 0;
    } else {
      this.positionY -= 1;
    }
  }

  moveDown() {
    // Идём вниз.
    if (this.positionY === 9) {
      this.positionY === 9;
    } else {
      this.positionY += 1;
    }
  }

  attack() {
    this.boomerang.positionX = this.positionX + 1;
    // this.boomerang.positionY = this.positionY;
    // this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
