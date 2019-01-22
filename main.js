const UI = require("./js/ui");
const Book = require("./js/Book");
const search = require("./js/search");

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
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
    // Perform google books search
    gbooks = search.fetchBooks(title);
    console.log(gbooks);
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
