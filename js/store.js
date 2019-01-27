const store = {
  setLatestQuery: term => sessionStorage.setItem("latestQuery", term),
  setIndex: int => sessionStorage.setItem("index", int)
};

module.exports = store;
