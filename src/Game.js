// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.fillTrack();
  }

  fillTrack() {
    for (let i = 1; i <= 5; i += 1) {
      this.track.push((new Array(this.trackLength)).fill(' '));
    }
  }

  regenerateTrack() {
    this.track = [];
    this.fillTrack();
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track[this.hero.positionY][this.hero.positionX] = this.hero.skin;
    this.track[this.enemy.positionY][this.enemy.positionX] = this.enemy.skin;
  }

  check() {
    if (this.hero.positionX === this.enemy.positionX && this.hero.positionY === this.enemy.positionY) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.hero);
    }, 100);
  }
}

module.exports = Game;

