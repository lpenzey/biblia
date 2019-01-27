const UI = require("./js/ui");
const search = require("./js/search");
const store = require("./js/store");

document.addEventListener("DOMContentLoaded", UI.hideButtons);

document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.querySelector("#title").value;

  // Validate input
  if (title === "") {
    console.log("Please fill in all fields", "danger");
  } else {
    // Store query and index in session storage
    store.setLatestQuery(title);
    store.setIndex(0);

    search.fetchBooks(title).then(response => {
      booksArr = search.parseBooks(response);

      for (const item of booksArr) {
        UI.displayBook(item);
      }

      UI.showButtons();
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
  // Update index in session storage
  store.setIndex(index);

  e.preventDefault;
  // Retrieve current search query
  const title = sessionStorage.latestQuery;
  // Search for more books using the current query and updated index
  search.fetchBooks(title).then(response => {
    booksArr = search.parseBooks(response);

    for (const item of booksArr) {
      UI.displayBook(item);
    }
  });
});

// Event: clear searched books
document.querySelector("#book-clear").addEventListener("click", e => {
  UI.clearSearchedBooks("#book-list");
  UI.hideButtons();
});
