// Creation of the Post class with the properties tittle, author, text (the content of the post), one array to storage every comment in this post, date when this was created and a method to add one comment to this
class Post {
    constructor(tittle, author, text) {
        this.author = author
        this.tittle = tittle
        this.text = text
        this.comments = []
        this.createdAt = new Date()
    }

    addNewComment(newComent){
        this.comments.push(newComent)
    }
}

// Class export
module.exports = Post