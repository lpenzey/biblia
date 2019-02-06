const UI = require("./ui");
const search = require("./search");
const store = require("./store");

const eventHandlers = {
  bookForm: () => {
    store.clearSearchedBooks();
    const title = document.querySelector("#title").value;
    if (title !== "") {
      store.setSearchParams(title);
      search.fetchBooks(title).then(response => {
        if (response.data.totalItems !== 0) {
          booksArr = search.parseBooks(response);
          store.setBookResults(booksArr);
          UI.searchSuccess();
        } else {
          UI.searchFail("results");
        }
      });
    } else {
      UI.searchFail("query");
    }
  },
  loadMoreBooks: () => {
    var index = store.incrementIndex(10);
    const title = store.getLatestQuery();
    store.setSearchParams(title, index);
    search.fetchBooks(title, index).then(response => {
      if (typeof response.data.items != "undefined") {
        newBooks = search.parseBooks(response);
        existingBooks = store.getBookResults();
        allBooks = existingBooks.concat(newBooks);
        store.setBookResults(allBooks);
        UI.searchSuccess();
      } else {
        UI.searchFail("resultsEnd");
      }
    });
  }
};

module.exports = eventHandlers;
