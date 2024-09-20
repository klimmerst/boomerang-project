// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, enemyKilled) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log('Hello folks! \n');
    console.log(track.join(''));
    console.log(enemyKilled);
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
