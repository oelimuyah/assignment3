import chalk from 'chalk';//third party module



let myURL = import.meta.url;//

let a = 10;
let b = 3;

import { add, subtract, multiply, divide } from './calculator.js';//local module
import { url } from 'node:inspector';

console.log(chalk.bgYellow('Welcome to Calculator Application'));//third party module

console.log(chalk.bgBlue('BD/2025/TC3/104'));
console.log(chalk.bgGreen(myURL)); //core module

console.log(chalk.blue('Addition: ' + add(a, b)));
console.log(chalk.green('Subtraction: ' + subtract(a, b)));
console.log(chalk.yellow('Multiplication: ' + multiply(a, b)));
console.log(chalk.red('Division: ' + divide(a, b).toFixed(2)));