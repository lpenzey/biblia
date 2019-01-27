// search tasks
const axios = require("axios");
const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes";
const keys = require("../config/keys");
const Book = require("./Book");

const search = {
  fetchBooks: (term, index = 0) =>
    axios
      .get(googleBooksUrl, {
        params: {
          q: term,
          startIndex: index,
          key: keys.googleBooksApiKey
        }
      })
      .then(response => {
        return response;
      })
      .catch(err => err.response),
  parseBooks: response => {
    const books = [];
    for (const item of response.data.items) {
      let bookInfo = item.volumeInfo;
      const book = new Book(
        bookInfo.title,
        bookInfo.authors,
        bookInfo.publisher,
        bookInfo.imageLinks.thumbnail,
        bookInfo.previewLink,
        bookInfo.id
      );
      books.push(book);
    }
    return books;
  }
};
module.exports = search;
