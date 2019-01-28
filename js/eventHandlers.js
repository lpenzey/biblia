const UI = require("./ui");
const search = require("./search");
const store = require("./store");

const eventHandlers = {
  bookForm: () => {
    UI.clearSearchedBooks("#book-list");
    const title = document.querySelector("#title").value;
    if (title === "") {
      UI.showAlert("Please enter a query", "warning");
    } else {
      store.setSearchParams(title);
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
  loadMoreBooks: () => {
    var index = store.incrementIndex(10);
    const title = store.getLatestQuery();
    store.setSearchParams(title, index);
    search.fetchBooks(title, index).then(response => {
      booksArr = search.parseBooks(response);
      for (const item of booksArr) {
        UI.displayBook(item);
      }
    });
  }
};

module.exports = eventHandlers;
