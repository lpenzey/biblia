const Handlebars = require("handlebars");
const store = require("./store");

const UI = {
  searchFail(failure) {
    if (failure === "query") {
      this.showAlert("Please enter a search query", "danger");
    } else if (failure === "results") {
      this.showAlert("No books found", "danger");
    }
    this.clearElement(".alert");
    this.clearField("#title");
    this.hideButtons();
  },
  searchSuccess() {
    storedBooks = store.getBookResults();
    booksToDisplay = storedBooks.slice(-10);
    this.loopThroughBooks(booksToDisplay).then(response => {
      if (response === "done") {
        this.clearElement(".alert");
        this.clearField("#title");
        this.showButtons();
      }
    });
  },
  loopThroughBooks(books) {
    return new Promise(resolve => {
      for (const item of books) {
        this.displayBook(item);
      }
      resolve("done");
    });
  },
  displayBook(book) {
    bookHandlebars = this.formatBookObject(book);
    const source = document.querySelector("#book-template").innerHTML;
    const template = Handlebars.compile(source);
    const newHtml = template(bookHandlebars);
    document.querySelector("#book-list").innerHTML += newHtml;
  },
  formatBookObject(book) {
    book.authors = book.authors.authors;
    book.title = book.title.title;
    book.publisher = book.publisher.publisher;
    book.imageLink = book.imageLink.imageLink;
    book.previewLink = book.previewLink.previewLink;
    book.id = book.id.id;
    return book;
  },
  enlargeImage(book, size) {
    str = book.imageLink;
    const newStr = str.replace("&zoom=1", "&zoom=" + size);
    book.imageLink = newStr;
  },
  clearField(element) {
    document.querySelector(element).value = "";
  },
  showButtons() {
    document.querySelector("#book-load").style.visibility = "visible";
    document.querySelector("#book-clear").style.visibility = "visible";
  },
  hideButtons() {
    document.querySelector("#book-load").style.visibility = "hidden";
    document.querySelector("#book-clear").style.visibility = "hidden";
  },
  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const bookshelf = document.querySelector("#book-shelf");
    container.insertBefore(div, bookshelf);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  },
  loadingMessage(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const bookshelf = document.querySelector("#book-shelf");
    container.insertBefore(div, bookshelf);
  },
  clearElement(element) {
    document.querySelector(element).remove();
  }
};

module.exports = UI;
