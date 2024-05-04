#! /usr/bin/node env
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.bgBlueBright.italic.white("  Welcome to the Rock Paper Scissor Game created by REHAN KHAN. I welcome you to this game with the bottom of my heart. This game that you will play, will be between you and the computer. So play it and remember me in your prayers. "));
while (condition) {
    const userChoice = await inquirer.prompt({
        name: "askUser",
        type: "list",
        message: chalk.greenBright("Select your choice :"),
        choices: ["Rock", "Paper", "Scissor"],
    });
    let arr = ["Rock", "Paper", "Scissor"];
    // This function will select the element randomly from the array.
    function computerChoice(arr) {
        let randomElement = Math.floor(Math.random() * 3);
        return arr[randomElement];
    }
    let computer = computerChoice(arr);
    console.log(chalk.bgWhite.black.underline(` You chooses ${userChoice.askUser} & Computer chooses ${computer}.`));
    // Making Conditions using else if statements:
    if (userChoice.askUser === computer) {
        console.log(chalk.blue.underline.bgWhite.bold("It's a tie match."));
    }
    else if ((userChoice.askUser === "Paper" && computer === "Rock") ||
        (userChoice.askUser === "Rock" && computer === "Scissor") ||
        (userChoice.askUser === "Scissor" && computer === "Paper")) {
        console.log(chalk.bgYellow.white.bold `Congratulations!. You won the match from the computer.`);
    }
    else {
        console.log(chalk.blue.bgWhite.bold `Sorry! Computer wins the game from you.`);
    }
    const moreGame = await inquirer.prompt({
        name: "Question",
        message: "Do you want to Play again?",
        type: 'confirm',
        default: true,
    });
    condition = moreGame.Question;
}
// LAST MESSAGE
console.log(chalk.yellowBright.italic.bold('THANKS! for playing this game. I wish that you might succeed in your life and make your parents as well as Pakistan proud.'));
