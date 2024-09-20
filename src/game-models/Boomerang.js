// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(positionY) {
    this.skin = '💩';
    this.positionX = NaN;
    this.positionY = positionY;
    this.direction = 'right';
  }

  fly() {

    this.moveRight();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.positionX += 1;
  }
}

module.exports = Boomerang;
