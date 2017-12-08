var inquirer = require('inquirer');
var fs = require("fs");

function ClozeCard(fulltext, cloze) {
    this.cloze = cloze,
        this.partial = fulltext.replace(cloze, " ... "),
        this.fulltext = fulltext
};


// Prompt to create a Cloze Card
function creatClozeCard() {
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

                console.log("Full Text: " + fulltext + " Cloze: " + cloze)

                // Add the cloze card created to clozeCard.txt
                fs.appendFile("./clozeCard.txt", "\nFull Text: " + fulltext + " Cloze: " + cloze, function(error) {
                    if (error) {
                        console.log("Something went horribly wrong...");
                    } return console.log(error);
                })
            }
            else {
                console.log("its broke...");
            }
        });
}



module.exports = {
    creatClozeCard: creatClozeCard,
    ClozeCard: ClozeCard

}


