var fs = require("fs");


// List all Basic Cards created
function listBasicCards() {
    fs.readFile("./basicCard.txt", "utf-8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(data);
    })
};


// List all Cloze Cards created
function listClozeCards() {
    fs.readFile("./clozeCard.txt", "utf-8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(data);
    })
};



module.exports = {
    listBasicCards: listBasicCards,
    listClozeCards: listClozeCards
}