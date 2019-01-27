const Handlebars = require("handlebars");

const UI = {
  displayBook(book) {
    // Get  handlebars template in index.html

    const source = document.querySelector("#book-template").innerHTML;

    // Create handlebars template
    const template = Handlebars.compile(source);

    // Create new book card
    const newHtml = template(book);

    // Append each book to the list
    document.querySelector("#book-list").innerHTML += newHtml;
  },
  enlargeImage(book, size) {
    str = book.imageLink;
    const newStr = str.replace("&zoom=1", "&zoom=" + size);
    book.imageLink = newStr;
  },
  clearField(element) {
    document.querySelector(element).value = "";
  },
  clearSearchedBooks(element) {
    document.querySelector(element).innerHTML = null;
  },
  showButtons() {
    document.querySelector("#book-load").style.visibility = "visible";
    document.querySelector("#book-clear").style.visibility = "visible";
  },
  hideButtons() {
    document.querySelector("#book-load").style.visibility = "hidden";
    document.querySelector("#book-clear").style.visibility = "hidden";
  }
};

module.exports = UI;
