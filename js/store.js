const store = {
  setSearchParams: (term, int = "0") => {
    localStorage.setItem("latestQuery", term);
    localStorage.setItem("index", int);
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
  clearSearchedBooks(element) {
    document.querySelector(element).innerHTML = null;
  }
};

module.exports = store;
