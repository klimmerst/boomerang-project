import inquirer from 'inquirer';

// Список игроков
const players = [
  { name: 'Player Fox', role:'🦊', level: 14 },
  { name: 'Player It_Mashina', role:'👨🏻‍💻', level: 100 },
  { name: 'Player Boss_Molocosos', role:'👶🏻', level: 0 }
];

// Функция для вывода игрока
function displayPlayer(player) {
  console.log(`You have selected ${player.name}`);
  console.log(`Role: ${player.role}`);
  console.log(`Level: ${player.level}`);
}

// Основная функция
async function choosePlayer() {
  // Выводим список игроков с помощью inquirer
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedPlayer',
      message: 'Choose your player:',
      choices: players.map((player, index) => ({
        name: player.name,
        value: index // Возвращаем индекс игрока для дальнейшего использования
      }))
    }
  ]);

  // Получаем выбранного игрока по индексу
  const selectedPlayer = players[answers.selectedPlayer];

  // Выводим выбранного игрока
  displayPlayer(selectedPlayer);
}

// Запускаем программу
choosePlayer();

// checking pr