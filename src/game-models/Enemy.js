// Враг.

class Enemy {
  constructor( positionX, positionY ) {
    this.generateSkin();

    this.positionX = 30;
    this.positionY = Math.floor(1 + Math.random() * (4 + 1 - 1));
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
    this.positionX = '?';
    this.generateSkin();
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
