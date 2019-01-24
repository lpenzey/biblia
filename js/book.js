// Book Object: Represents a book

function Book(title, author, publishingCompany, imageLink, previewLink, id) {
  this.title = title;
  this.author = author;
  this.publishingCompany = publishingCompany;
  this.imageLink = imageLink;
  this.previewLink = previewLink;
  this.id = id;
}

module.exports = Book;
