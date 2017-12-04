function ClozeCard(fulltext, cloze) {
    this.cloze = cloze,
    this.partial = fulltext.replace(cloze, " ... "),
    this.fulltext = fulltext
};




module.exports = ClozeCard;