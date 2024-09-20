// Враг.

class Enemy {
  constructor( positionX = 30, positionY = Math.floor(1 + Math.random() * (4 + 1 - 1))) {
    this.generateSkin();

    this.positionX = positionX;
    this.positionY = positionY;
  }

  generateSkin() {
    const skins = ['🐜', '🦗', '🦟', '🕷️', '🦂', '🐛', '💩', '🦠', '🧟', '🧛', '🧟', '🧙🏻‍♀️'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.positionX -= 1;
  }

  die() {
    this.positionX = 30;
    this.generateSkin();
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
