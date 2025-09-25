// Built-in modules
import { stdin } from 'process';

// Third-party module
import chalk from 'chalk';
import path from 'node:path';
// Custom modules
import { add, subtract, multiply, divide } from './my_modules/calculator.js';
import { formatUserInfo} from './formatInfo.js';

let number1 = null;
let number2 = null;
let opp = ''; 

console.log(chalk.bgBlue('BD/2025/TC3/104'));//display registration number
const filename = path.basename(import.meta.url);//basename of current file
console.log(chalk.bgGreen('Path',filename));


console.log(chalk.red('Enter first number:'));//input for first number
stdin.once('data', (Input) => {
number1 = parseInt(String(Input));

console.log(chalk.red('Enter Second number:'));
// Second input for second number
stdin.once('data', (Input) => {
number2 = parseInt(String(Input));


// Ask User to choose an operation
console.log(chalk.red('Choose an operation?'));
stdin.once('data', (Input) => {
opp = String(Input).trim();

switch (opp) {
case "+":
    const result = add(number1, number2);
    console.log(chalk.blueBright("Add",formatUserInfo(number1, opp, number2, result)));;
break;
case "-":
    const result1 = subtract(number1, number2);
    console.log(chalk.blueBright("Subtract",formatUserInfo(number1, opp, number2, result1)));;
break;
case "*":
    const result2 = multiply(number1, number2);
    console.log(chalk.blueBright("Multiply",formatUserInfo(number1, opp, number2, result2)));;
break;
case "/":
    if (number2 === 0) {
        console.log(chalk.bgRed('Cannot divide by zero'));
        process.exit();
    }else
    {
    const result3 = divide(number1, number2);
    console.log(chalk.blueBright("Divide",formatUserInfo(number1, opp, number2, result3)));;
    }
break;
default:
console.log(chalk.bgRed('Invalid Operation'));
} 
process.exit();
})
});
});