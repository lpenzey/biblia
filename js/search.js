const axios = require("axios");
const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes";
const keys = require("../config/keys");
const Book = require("./Book");
const Author = require("./bookAtoms/Author");
const Title = require("./bookAtoms/Title");
const Publisher = require("./bookAtoms/Publisher");
const Image = require("./bookAtoms/Image");
const Preview = require("./bookAtoms/Preview");
const Id = require("./bookAtoms/Id");

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
      if (typeof bookInfo.imageLinks != "undefined") {
        const title = new Title(bookInfo.title);
        const authors = new Author(bookInfo.authors);
        const publisher = new Publisher(bookInfo.publisher);
        const imageLink = new Image(bookInfo.imageLinks.thumbnail);
        const previewLink = new Preview(bookInfo.previewLink);
        const id = new Id(item.id);
        const book = new Book(
          title,
          authors,
          publisher,
          imageLink,
          previewLink,
          id
        );
        books.push(book);
      }
    }
    return books;
  }
};
module.exports = search;
