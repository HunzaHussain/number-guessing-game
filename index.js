#!/user/bin/env node
import inquirer from "inquirer";
// Compute will generate a random number
// Use input for guessing number
// Compare user input with computerenerated number and show result
const randonNumber = Math.floor(Math.random() * 10 + 1);
console.log(randonNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "please guess a number 1-10:",
    },
]);
console.log(answer);
if (answer.userGuessnumber === randonNumber) {
    console.log("Congrajulation!you guess right number.");
}
else {
    console.log("You guessed wrong number");
}
