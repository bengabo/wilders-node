/*
let wilders = ['Ben', 'Wamwam', 'You', 'Jon'];
let colors = [chalk.yellow, chalk.blue, chalk.green, chalk.red];
let bgColors = [bgMagenta, bgCyan, bgRed, bgGreen];

for (let i = 0; i < wilders.length; i++){
  const chalk = require('chalk');
  console.log(colors[i].bgColors[i](wilders[i]));
};
*/


const chalk = require('chalk');
console.log(chalk.yellow.bgBlue.bold('Bulma'));
console.log(chalk.blue.bgMagenta.bold('Chirac'));
console.log(chalk.green.bgRed.bold('Conan'));
console.log(chalk.yellowBright.bgGreen.bold('Dr Slump'));