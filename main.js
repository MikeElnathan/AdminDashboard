
function Book(Title, Author, Pages, Read){
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
}

Book.prototype.logPage = function() {
    console.log(this.Pages)
}

const LOTR = new  Book("Lord of the ring", "JRR Tolkien", 12, false)

LOTR.valueOf()
