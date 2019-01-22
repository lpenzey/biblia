// search tasks
const axios = require("axios");
const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";

const search = {
  fetchBook: term =>
    axios
      .get(googleBooksUrl + term)
      .then(res => res.data)
      .catch(err => "error")
};

module.exports = search;
