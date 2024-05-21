#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number 
// 2) user input form guessing number
// 3) campare user input with omputer generate number and show  result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
