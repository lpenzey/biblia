// Book Object: Represents a book

function Book(title, author, publisher, imageLink, previewLink, id) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.imageLink = imageLink;
  this.previewLink = previewLink;
  this.id = id;
}

module.exports = Book;
