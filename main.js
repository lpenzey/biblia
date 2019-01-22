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
