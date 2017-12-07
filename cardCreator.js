

// TODO
// Outputs to a log file the text and word to be replaced. 
// Random card generator
// Tie into app.js

// Add a multiple choice menu to see what they would like to do.
  // create a card
  // list cards
  // study (maybe?)

var inquirer = require('inquirer');




// Create a "Prompt" with a series of questions.

if (process.argv[2] === "basiccard") {

    inquirer
        .prompt([
            // Front of flash card.
            {
                type: "input",
                message: "Type the question you want asked on the front of the flash card.",
                name: "flashcardFront"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            },
            // Back of flash card
            {
                type: "input",
                message: "Type the answer you would like on the back of the flash card.",
                name: "flashcardBack"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            },
        ])
        .then(function (inquirerResponse) {

            if (inquirerResponse.confirm) {
                flashcardFront = inquirerResponse.flashcardFront
                flashcardBack = inquirerResponse.flashcardBack

                console.log(flashcardFront + " , " + flashcardBack)
            }
            else {
                console.log("its broke...");
            }
        });

} else if (process.argv[2] === "clozecard") {

    inquirer
        .prompt([
            // Full text of flash card.
            {
                type: "input",
                message: "What would you like the full text of the card to read?",
                name: "fulltext"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            },
            // Text of flash card to be left out.
            {
                type: "input",
                message: "What word(s) would you like to leave out?",
                name: "cloze"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            },
        ])
        .then(function (inquirerResponse) {

            if (inquirerResponse.confirm) {
                fulltext = inquirerResponse.fulltext
                cloze = inquirerResponse.cloze

                console.log(fulltext + " , " + cloze)
            }
            else {
                console.log("its broke...");
            }
        });

} else {
    console.log("Enter a valid option.")
}