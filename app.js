var inquirer = require('inquirer');
var basicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");



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


function chooseACard() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseCard',
                message: 'What type of card would you like to make?',
                choices: [
                    "Basic",
                    "Cloze"
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
            } else {
                console.log("choose another choice");
                chooseACard();
            }
        });

}

chooseACard();

