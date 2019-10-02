/* let wilders = ['Ben', 'Wamwam', 'You', 'Jon'];
let colors = [yellow, blue, green, red];
let bgColors = [bgMagenta, bgCyan , bgRed, bgGreen];

for (let i = 0; i < wilders.length; i++){
  const chalk = require('chalk');
  console.log(chalk.colors[i].bgColors[i](wilders[i]));
} */

const chalk = require('chalk');

console.log(chalk.yellow.bgBlue.bold('B'));
console.log(chalk.blue.bgMagenta.bold('H'))
console.log(chalk.green.bgRed.bold('M'))
console.log(chalk.yellowBright.bgGreen.bold('A'));