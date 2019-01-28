const UI = require("./js/ui");
const eventHandlers = require("./js/eventHandlers");

document.addEventListener("DOMContentLoaded", UI.hideButtons());

document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  eventHandlers.bookForm();
});

document.querySelector("#book-load").addEventListener("click", e => {
  e.preventDefault();
  eventHandlers.loadMoreBooks();
});

document.querySelector("#book-clear").addEventListener("click", e => {
  UI.clearSearchedBooks("#book-list");
  UI.hideButtons();
});
