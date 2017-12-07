var inquirer = require('inquirer');

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

                console.log(fulltext + " , " + cloze)
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


