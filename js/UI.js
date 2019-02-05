const Handlebars = require("handlebars");

const UI = {
  displayBook(book) {
    const source = document.querySelector("#book-template").innerHTML;
    const template = Handlebars.compile(source);
    const newHtml = template(book);
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
