// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const fs = require('fs/promises');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(trackLength);
    this.view = new View();
    this.boomerang = new Boomerang(this.hero.position);
    this.track = [];
    this.regenerateTrack();
    this.enemyKilled = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.boomerang.fly();
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    // fs.appendFile('./logs.txt', `${this.enemy.position} + ${this.boomerang.position}`);
    if (this.enemy.position === this.boomerang.position) {
      this.enemyKilled += 1;
      this.enemy.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.enemyKilled);
    }, 100);
  }
}

module.exports = Game;
