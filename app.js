// TODO
// * Outputs to a log file the text and word to be replaced. 
// Random card generator
// * Tie into app.js

// Add a multiple choice menu to see what they would like to do.
  // * create a card
  // * list cards
  // study (maybe?)

  // WEIRDNESS
    // appendFile is outputting NULL after being run.  No error messages and its still appending to the file correctly.



var inquirer = require('inquirer');
var basicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");
var list = require("./list.js");
var fs = require("fs");



function chooseACard() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseCard',
                message: "Welcome to the Flash Card Creator 5000!\n =======================================\n\n Choose your destiny young warrior!\n",
                choices: [
                    "Basic",
                    "Cloze",
                    "List Basic Cards",
                    "List Cloze Cards"
                ],
                filter: function (val) {
                    return val.toLowerCase();
                }
            }
        ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.chooseCard == "basic") {
                basicCard.creatBasicCard();
            } else if (inquirerResponse.chooseCard == "cloze") {
                clozeCard.creatClozeCard();
            } else if (inquirerResponse.chooseCard == "list basic cards") {
                console.log("===== THESE ARE YOUR BASIC CARDS SO FAR =====")
                list.listBasicCards();
            } else if (inquirerResponse.chooseCard == "list cloze cards") {
                console.log("===== THESE ARE YOUR CLOZE CARDS SO FAR =====")
                list.listClozeCards();          
            } else {
                console.log("choose another choice");
                chooseACard();
            }
        });

}

chooseACard();



// DONT NEED ===============================================

// // BASICCARD

// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front);

// // "George Washington"
// console.log(firstPresident.back);



// // CLOSECARD

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze);

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fulltext);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");