function Book(title, authors, publisher, imageLink, previewLink, id) {
  this.title = title;
  this.authors = authors;
  this.publisher = publisher;
  this.imageLink = imageLink;
  this.previewLink = previewLink;
  this.id = id;
}

module.exports = Book;
