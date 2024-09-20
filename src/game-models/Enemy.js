// Враг.

class Enemy {
  constructor() {
    this.generateSkin();

    this.positionX = 10;
    this.positionY = Math.floor(1 + Math.random() * (4 + 1 - 1));
  }

  generateSkin() {
    const skins = ['🐜', '🦗', '🦟', '🕷️', '🦂', '🐛', '💩', '🦠', '🧟', '🧛', '🧟', '🧙🏻‍♀️'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
