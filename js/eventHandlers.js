const UI = require("./ui");
const search = require("./search");
const store = require("./store");

const eventHandlers = {
  bookForm() {
    UI.clearSearchedBooks("#book-list");
    const title = document.querySelector("#title").value;
    if (title === "") {
      console.log("Please fill in all fields", "danger");
    } else {
      store.setLatestQuery(title);
      store.setIndex(0);
      search.fetchBooks(title).then(response => {
        booksArr = search.parseBooks(response);
        for (const item of booksArr) {
          UI.displayBook(item);
        }
        UI.showButtons();
      });
      UI.clearField("#title");
    }
  },
  loadMoreBooks() {
    var index = parseInt(sessionStorage.index, 10);
    index = index += 10;
    store.setIndex(index);
    const title = sessionStorage.latestQuery;
    search.fetchBooks(title, index).then(response => {
      booksArr = search.parseBooks(response);
      for (const item of booksArr) {
        UI.displayBook(item);
      }
    });
  }
};

module.exports = eventHandlers;
