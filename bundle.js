(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Book Class: Represents a book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

module.exports = Book;

},{}],2:[function(require,module,exports){
const UI = {
  saiHi: console.log("hi"),
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
};

module.exports = UI;

},{}],3:[function(require,module,exports){
const UI = require("./js/ui");
const Book = require("./js/Book");

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.sayHi);
// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", e => {
  // Get Form Values
  // Prevent default
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    console.log("Please fill in all fields", "danger");
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    console.log(book);

    // Add book to store
    // Store.addBook(book);

    // Show success message
    // UI.showAlert("Book Added", "success");

    // Clear Fields
    UI.clearFields();
  }
});

},{"./js/Book":1,"./js/ui":2}]},{},[3]);
