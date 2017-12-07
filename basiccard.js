var inquirer = require('inquirer');


var ClozeCard = require("./clozecard.js")

function BasicCard(front, back) {
    this.front = front,
        this.back = back
};


// Prompt to create a Basic Card.
function creatBasicCard() {
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

}
module.exports = {
    BasicCard: BasicCard,
    creatBasicCard: creatBasicCard


}