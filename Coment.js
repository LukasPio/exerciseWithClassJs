// Creation of the Coment Class with the properties author, text (content of the comment) and the date when it was created
class Coment {
    constructor(author, text) {
        this.author = author.name;
        this.text = text;
        this.createdAt = new Date()
    }
}

// Class export
module.exports = Coment;