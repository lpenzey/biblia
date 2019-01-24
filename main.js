const UI = require("./js/ui");
const Book = require("./js/Book");
const search = require("./js/search");

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Event: Search for books
document.querySelector("#book-form").addEventListener("submit", e => {
  // Get Form Values
  // Prevent default
  e.preventDefault();
  const title = document.querySelector("#title").value;

  // Validate
  if (title === "") {
    console.log("Please fill in all fields", "danger");
  } else {
    // Perform google books search
    search.fetchBooks(title).then(result => {
      json_books = JSON.parse(result);
      for (const item of json_books) {
        UI.displayBook(item);
      }
    });
    //const booksArray = JSON.parse(gbooks);

    // Instantiate book

    // Add book to store

    // Store.addBook(book);

    // Show success message

    // UI.showAlert("Book Added", "success");

    // Clear Fields
    UI.clearField("#title");
    UI.clearSearchedBooks("#book-list");
  }
});
