// Create card constructor
// Asks questions 
// Outputs to a log file the text and word to be replaced. 
// Random card generator

var inquirer = require('inquirer');

function CardCreator() {

};

// Create a "Prompt" with a series of questions.
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
.then(function(inquirerResponse) {

  if (inquirerResponse.confirm) {
    flashcardFront = inquirerResponse.flashcardFront
    flashcardBack = inquirerResponse.flashcardBack
    
    console.log(flashcardFront + " , " + flashcardBack)
  }
  else {
    console.log("its broke...");
  }
});