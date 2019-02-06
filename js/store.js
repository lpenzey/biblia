const store = {
  setSearchParams: (term, int = "0") => {
    localStorage.setItem("latestQuery", term);
    localStorage.setItem("index", int);
  },
  setBookResults: books => {
    bookString = JSON.stringify(books);
    localStorage.setItem("searchedBooks", bookString);
  },
  getBookResults: () => {
    var books = JSON.parse(localStorage.searchedBooks);
    return books;
  },
  getLatestQuery: () => {
    return localStorage.latestQuery;
  },
  getLatestIndex: () => {
    return parseInt(localStorage.index, 10);
  },
  incrementIndex: num => {
    var index = parseInt(localStorage.index, 10);
    return (index = index += num);
  },
  clearSearchedBooks() {
    localStorage.searchedBooks = "";
  }
};

module.exports = store;
