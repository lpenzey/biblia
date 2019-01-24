// search tasks
const axios = require("axios");
const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes";
const keys = require("../config/keys");
const Book = require("./Book");

const search = {
  fetchBooks: term =>
    axios
      .get(googleBooksUrl + "?q=" + term + "&key=" + keys.googleBooksApiKey)
      .then(response => {
        // Instantiate books array
        const newLocal = [];
        const books = newLocal;
        // Loop through api response object
        for (const item of response.data.items) {
          // Set title
          const title = item.volumeInfo.title;
          // Set author
          const authors = item.volumeInfo.authors;
          // Set image link
          const imageLink = item.volumeInfo.imageLinks.thumbnail;
          // Set previeww link
          const previewLink = item.volumeInfo.previewLink;
          // Set isbn
          const id = item.id;
          // Create new Book with above parameters
          const book = new Book(title, authors, imageLink, previewLink, id);
          // Add to books array
          books.push(book);
        }
        // Convert to JSON string
        json_books = JSON.stringify(books);
        return json_books;
      })
      .catch(err => "error")
};
module.exports = search;
