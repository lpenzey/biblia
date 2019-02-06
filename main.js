const UI = require("./js/ui");
const eventHandlers = require("./js/eventHandlers");
const store = require("./js/store");

document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  UI.loadingMessage("Loading books", "info");
  UI.clearBookResults();
  eventHandlers.bookForm();
});

document.querySelector("#book-load").addEventListener("click", e => {
  e.preventDefault();
  UI.loadingMessage("Loading more books", "info");
  eventHandlers.loadMoreBooks();
});

document.querySelector("#book-clear").addEventListener("click", e => {
  store.clearSearchedBooks();
  UI.resetPage();
});
