

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

