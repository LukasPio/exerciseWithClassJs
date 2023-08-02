// Creation of the Author Class with the properties name, post and a method newPost to add one post to this author
class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    newPost(post) {
        this.posts.push(post)
        return post
    }
}

// Class export
module.exports = Author