const UI = require("./js/ui");
const Book = require("./js/Book");
const search = require("./js/search");
const store = require("./js/store");

// Event: Display Stored Books
document.addEventListener("DOMContentLoaded", UI.displayStoredBooks);
// Event: Search for books
document.querySelector("#book-form").addEventListener("submit", e => {
  // Prevent default
  e.preventDefault();
  // Get Form Values
  const title = document.querySelector("#title").value;

  // Validate input
  if (title === "") {
    console.log("Please fill in all fields", "danger");
  } else {
    // Store query and index in session storage
    store.setLatestQuery(title);
    store.setIndex(0);
    // Perform google books search
    search.fetchBooks(title).then(result => {
      json_books = JSON.parse(result);
      for (const item of json_books) {
        UI.displayBook(item);
      }
    });

    // Show success message

    // Clear search field
    UI.clearField("#title");
  }
});
//Event: Search for 10 more books
document.querySelector("#book-load").addEventListener("click", e => {
  // Retrieve index from session storage and convert to integer w/ base 10
  var index = parseInt(sessionStorage.index, 10);
  // Increment search index by 10
  index = index += 10;
  console.log(index);
  // Update index in session storage
  store.setIndex(index);

  e.preventDefault;
  // Search for more books using the current query and updated index
  search.fetchBooks(sessionStorage.latestQuery, index).then(result => {
    console.log(result);
    json_books = JSON.parse(result);
    // Iterate through parsed API response and add to UI
    for (const item of json_books) {
      UI.displayBook(item);
    }
  });
});
