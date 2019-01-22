// search tasks
const axios = require("axios");
const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const keys = require("../config/keys");

const search = {
  fetchBooks: term =>
    axios
      .get(googleBooksUrl + term + "&key=" + keys.googleBooksApiKey)
      .then(response => response.data.items)
      .catch(err => "error")
};

module.exports = search;
