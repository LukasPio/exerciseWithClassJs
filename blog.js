// Import section

const Post = require('./Post')
const Coment = require('./Coment')
const Author = require('./Author')

// Creation of one author of one post and two authors of comments
const postAuthor = new Author('Lucas')
const comentAuthor = new Author ('Jorge')
const comentAuthor2 = new Author ('Pedro')

// Creation of the comments and the post
const post = new Post('lorem ipsum dolor', postAuthor, 'sit amet')
const coment = new Coment(comentAuthor, 'consectetur')
const coment2 = new Coment(comentAuthor2, 'adipiscing')

// Add the post to him author and the comments to him authors
postAuthor.newPost(post)
post.addNewComment(coment)
post.addNewComment(coment2)

// return result of the post in console
console.log(post)



