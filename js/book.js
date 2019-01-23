// Book Object: Represents a book

function Book(title, author, imageLink, previewLink, isbn) {
  this.title = title;
  this.author = author;
  this.imageLink = imageLink;
  this.previewLink = previewLink;
  this.isbn = isbn;
}

module.exports = Book;
